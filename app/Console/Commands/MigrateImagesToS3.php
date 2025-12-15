<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class MigrateImagesToS3 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:images-to-s3 
                            {--dry-run : Run without actually uploading files}
                            {--directory=public/images : Source directory to migrate from}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate local images to S3 under the thevelvetpulse folder';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $isDryRun = $this->option('dry-run');
        $sourceDir = base_path($this->option('directory'));

        if (!File::exists($sourceDir)) {
            $this->error("Source directory does not exist: {$sourceDir}");
            return 1;
        }

        $this->info("Scanning {$sourceDir} for images...");
        $this->newLine();

        // Define category mappings based on filename patterns
        $categoryMappings = [
            'album' => 'albums',
            'vinyl' => 'albums',
            'cover' => 'albums',
            'tshirt' => 'merch',
            'hoodie' => 'merch',
            'merch' => 'merch',
            'poster' => 'merch',
            'sticker' => 'merch',
            'cd' => 'merch',
            'band' => 'band',
            'artist' => 'artists',
            'member' => 'band',
            'tour' => 'band',
            'background' => 'backgrounds',
            'adobe' => 'backgrounds',
        ];

        $extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
        $files = File::allFiles($sourceDir);
        $imageFiles = collect($files)->filter(function ($file) use ($extensions) {
            return in_array(strtolower($file->getExtension()), $extensions);
        });

        if ($imageFiles->isEmpty()) {
            $this->warn('No image files found to migrate.');
            return 0;
        }

        $this->info("Found {$imageFiles->count()} image(s) to migrate.");
        $this->newLine();

        $uploaded = 0;
        $skipped = 0;
        $failed = 0;

        foreach ($imageFiles as $file) {
            $relativePath = str_replace($sourceDir . DIRECTORY_SEPARATOR, '', $file->getPathname());
            $filename = $file->getFilename();
            $filenameLower = strtolower($filename);

            // Determine category based on filename
            $category = 'images'; // default
            foreach ($categoryMappings as $pattern => $cat) {
                if (str_contains($filenameLower, $pattern)) {
                    $category = $cat;
                    break;
                }
            }

            // Build S3 path
            $s3Path = $category . '/' . $filename;

            // Check if already exists
            if (Storage::disk('s3')->exists($s3Path)) {
                $this->warn("⏩ Skipped (already exists): {$s3Path}");
                $skipped++;
                continue;
            }

            if ($isDryRun) {
                $this->line("🔍 [DRY RUN] Would upload: {$relativePath} → {$s3Path}");
                continue;
            }

            // Upload to S3
            try {
                $contents = File::get($file->getPathname());
                Storage::disk('s3')->put($s3Path, $contents, 'public');
                
                $this->info("✅ Uploaded: {$s3Path}");
                $uploaded++;
            } catch (\Exception $e) {
                $this->error("❌ Failed to upload {$relativePath}: " . $e->getMessage());
                $failed++;
            }
        }

        $this->newLine();
        $this->info('Migration Summary:');
        $this->table(
            ['Status', 'Count'],
            [
                ['Uploaded', $uploaded],
                ['Skipped (Already Exists)', $skipped],
                ['Failed', $failed],
                ['Total', $imageFiles->count()],
            ]
        );

        if ($isDryRun) {
            $this->newLine();
            $this->warn('This was a DRY RUN. No files were actually uploaded.');
            $this->info('Run without --dry-run to perform the actual migration.');
        }

        return 0;
    }
}
