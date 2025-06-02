<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageService
{
    /**
     * Upload an image to S3 under the thevelvetpulse folder.
     *
     * @param  \Illuminate\Http\UploadedFile  $file
     * @param  string  $directory  Directory within thevelvetpulse folder (e.g., 'albums', 'merch', 'artists')
     * @param  string|null  $filename  Optional custom filename
     * @return string  The public URL of the uploaded image
     */
    public function upload(UploadedFile $file, string $directory = 'images', ?string $filename = null): string
    {
        // Generate filename if not provided
        if (!$filename) {
            $filename = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME))
                . '-' . time()
                . '.' . $file->getClientOriginalExtension();
        }

        // Upload to S3 (already configured with thevelvetpulse/ root in config/filesystems.php)
        $path = Storage::disk('s3')->putFileAs(
            $directory,
            $file,
            $filename,
            'public'
        );

        // Return the public URL
        $bucket = config('filesystems.disks.s3.bucket');
        $region = config('filesystems.disks.s3.region');
        
        return "https://{$bucket}.s3.{$region}.amazonaws.com/{$path}";
    }

    /**
     * Delete an image from S3.
     *
     * @param  string  $path  Path relative to the thevelvetpulse folder
     * @return bool
     */
    public function delete(string $path): bool
    {
        return Storage::disk('s3')->delete($path);
    }

    /**
     * Get the public URL for an image.
     *
     * @param  string  $path  Path relative to the thevelvetpulse folder
     * @return string
     */
    public function url(string $path): string
    {
        $disk = Storage::disk('s3');
        $bucket = config('filesystems.disks.s3.bucket');
        $region = config('filesystems.disks.s3.region');
        
        return "https://{$bucket}.s3.{$region}.amazonaws.com/{$path}";
    }

    /**
     * Check if an image exists in S3.
     *
     * @param  string  $path  Path relative to the thevelvetpulse folder
     * @return bool
     */
    public function exists(string $path): bool
    {
        return Storage::disk('s3')->exists($path);
    }

    /**
     * List all images in a directory.
     *
     * @param  string  $directory  Directory within thevelvetpulse folder
     * @return array
     */
    public function listImages(string $directory = 'images'): array
    {
        return Storage::disk('s3')->files($directory);
    }

    /**
     * Copy a local file to S3 under the thevelvetpulse folder.
     *
     * @param  string  $localPath  Local file path
     * @param  string  $s3Path  Target path in S3 (relative to thevelvetpulse folder)
     * @return string  The public URL
     */
    public function copyToS3(string $localPath, string $s3Path): string
    {
        $contents = file_get_contents($localPath);
        Storage::disk('s3')->put($s3Path, $contents, 'public');
        
        $bucket = config('filesystems.disks.s3.bucket');
        $region = config('filesystems.disks.s3.region');
        
        return "https://{$bucket}.s3.{$region}.amazonaws.com/{$s3Path}";
    }
}
