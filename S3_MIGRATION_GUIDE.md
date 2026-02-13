# S3 Image Organization Guide for The Velvet Pulse

## Overview
All images for The Velvet Pulse project are now organized under the `thevelvetpulse/` folder in the `graveyardjokes-cdn` S3 bucket, accessible via CloudFront at:
```
https://d3fjkusrpksks7.cloudfront.net/thevelvetpulse/
```

## Configuration

### Filesystem Configuration
The S3 disk is now configured with:
- **Root folder**: `thevelvetpulse/`
- **Default disk**: `s3` (configured in `.env`)
- **Bucket**: `graveyardjokes-cdn`
- **CloudFront URL**: `https://d3fjkusrpksks7.cloudfront.net/thevelvetpulse`

### Directory Structure
Recommended organization within `thevelvetpulse/`:
```
thevelvetpulse/
├── albums/              # Album cover art
├── artists/             # Artist photos
├── merch/              # Merchandise images
├── backgrounds/        # Background and hero images
├── band/               # Band photos
└── ui/                 # UI elements, icons, etc.
```

## Uploading Images to S3

### Using the ImageService

```php
use App\Services\ImageService;

$imageService = new ImageService();

// Upload from a form request
$url = $imageService->upload($request->file('image'), 'albums', 'neon-dreams.webp');

// Delete an image
$imageService->delete('albums/neon-dreams.webp');

// Get URL for existing image
$url = $imageService->url('albums/neon-dreams.webp');

// Check if image exists
$exists = $imageService->exists('albums/neon-dreams.webp');
```

### Using Storage Facade Directly

```php
use Illuminate\Support\Facades\Storage;

// Upload
$path = Storage::disk('s3')->putFileAs('albums', $file, 'filename.webp', 'public');

// Get URL
$url = Storage::disk('s3')->url($path);

// Delete
Storage::disk('s3')->delete('albums/filename.webp');
```

## Migrating Existing Images from Local `/images/` to S3

### Step 1: List Current Local Images
```bash
# List all images in public/images
dir /s /b public\images\*.webp
dir /s /b public\images\*.jpg
dir /s /b public\images\*.png
```

### Step 2: Upload Using Artisan Command
Create a migration command:

```bash
php artisan make:command MigrateImagesToS3
```

Then implement the command (see `app/Console/Commands/MigrateImagesToS3.php` example below).

### Step 3: Run the Migration
```bash
php artisan migrate:images-to-s3
```

### Step 4: Update Image References in Code

#### Before (using local paths):
```tsx
// TopAlbums.tsx
cover: '/images/RetroVinylRecordArt.webp'

// Merch.tsx
image: '/images/tshirt-placeholder.jpg'
```

#### After (using CDN):
```tsx
// TopAlbums.tsx
const cdn = import.meta.env.VITE_ASSET_URL; // https://d3fjkusrpksks7.cloudfront.net/thevelvetpulse
cover: `${cdn}/albums/RetroVinylRecordArt.webp`

// Merch.tsx
const cdn = import.meta.env.VITE_ASSET_URL;
image: `${cdn}/merch/tshirt-placeholder.jpg`
```

## Using AWS CLI to Upload Images

### Install AWS CLI
```bash
# Download from: https://aws.amazon.com/cli/
# Or use chocolatey: choco install awscli
```

### Configure AWS CLI
```bash
aws configure
# Enter:
# AWS Access Key ID: <your-access-key-id>
# AWS Secret Access Key: [from .env]
# Default region: us-east-2
# Output format: json
```

### Upload Images
```bash
# Upload a single file
aws s3 cp public/images/album-cover.webp s3://graveyardjokes-cdn/thevelvetpulse/albums/album-cover.webp --acl public-read

# Upload an entire directory
aws s3 sync public/images s3://graveyardjokes-cdn/thevelvetpulse/images --acl public-read

# Upload with specific content type
aws s3 cp image.webp s3://graveyardjokes-cdn/thevelvetpulse/albums/image.webp --content-type "image/webp" --acl public-read
```

### List S3 Contents
```bash
# List all files in thevelvetpulse folder
aws s3 ls s3://graveyardjokes-cdn/thevelvetpulse/ --recursive

# List files in a specific subfolder
aws s3 ls s3://graveyardjokes-cdn/thevelvetpulse/albums/
```

### Delete Files
```bash
# Delete a single file
aws s3 rm s3://graveyardjokes-cdn/thevelvetpulse/old-image.jpg

# Delete a folder and its contents
aws s3 rm s3://graveyardjokes-cdn/thevelvetpulse/old-folder/ --recursive
```

## Verifying CloudFront Distribution

After uploading, verify your images are accessible:

```bash
# Test a direct S3 URL
curl -I https://graveyardjokes-cdn.s3.us-east-2.amazonaws.com/thevelvetpulse/test.webp

# Test CloudFront URL
curl -I https://d3fjkusrpksks7.cloudfront.net/thevelvetpulse/test.webp
```

## Invalidating CloudFront Cache

When you update images with the same filename:

```bash
# Invalidate specific path
aws cloudfront create-invalidation --distribution-id [YOUR_DISTRIBUTION_ID] --paths "/thevelvetpulse/albums/*"

# Invalidate entire thevelvetpulse folder
aws cloudfront create-invalidation --distribution-id [YOUR_DISTRIBUTION_ID] --paths "/thevelvetpulse/*"
```

## Best Practices

1. **Optimize images before uploading**:
   - Use WebP format for better compression
   - Resize to appropriate dimensions
   - Use tools like ImageOptim, Squoosh, or Sharp

2. **Use descriptive filenames**:
   ```
   ✅ neon-dreams-album-cover-2024.webp
   ❌ IMG_1234.jpg
   ```

3. **Organize by category**:
   - Keep albums, merch, and band photos in separate folders
   - Makes it easier to manage and find images

4. **Set proper permissions**:
   - Always use `--acl public-read` when uploading via AWS CLI
   - Or set `'visibility' => 'public'` when using Laravel Storage

5. **Use environment variables**:
   ```env
   VITE_ASSET_URL=https://d3fjkusrpksks7.cloudfront.net/thevelvetpulse
   ```

## Current Image Inventory

Based on the code scan, here are the images currently referenced:

### Using CDN (Already Organized)
- `AdobeStock_565842769.webp` (PromoSection)
- `AdobeStock_1261974513.webp` (PromoSection)
- `Girlband.webp` (AboutUs)
- `Glamrockbandportraitinthe1980s.webp` (AboutUs)
- `AdobeStock_1423234483.webp` (Home background)
- Various album covers in Music.tsx

### Using Local `/images/` (Need Migration)
#### TopAlbums.tsx:
- `RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp`
- `VintageoldblurreddustedabstractbackgroundWornmusicAlbumCoverwithRingwearSquareimage...webp`
- `Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp`
- `Abstractillustrationofalabyrinthmaze...webp`
- `TourBusInteriorwithInstrumentsandStageEquipment.webp`

#### Merch.tsx:
- `tshirt-placeholder.jpg`
- `vinyl-placeholder.jpg`
- `hoodie-placeholder.jpg`
- `poster-placeholder.jpg`
- `cd-placeholder.jpg`
- `stickers-placeholder.jpg`

#### AboutUs.tsx (Band Members):
- `jay.webp`
- `rhea.webp`
- `zane.webp`

## Quick Migration Script

Here's a PowerShell script to quickly move images:

```powershell
# migrate-images-to-s3.ps1
$images = @(
    @{Local="public\images\tshirt-placeholder.jpg"; S3="merch/tshirt-placeholder.jpg"},
    @{Local="public\images\vinyl-placeholder.jpg"; S3="merch/vinyl-placeholder.jpg"},
    @{Local="public\images\hoodie-placeholder.jpg"; S3="merch/hoodie-placeholder.jpg"}
    # Add more mappings...
)

foreach ($img in $images) {
    if (Test-Path $img.Local) {
        Write-Host "Uploading $($img.Local) to s3://graveyardjokes-cdn/thevelvetpulse/$($img.S3)"
        aws s3 cp $img.Local "s3://graveyardjokes-cdn/thevelvetpulse/$($img.S3)" --acl public-read
    } else {
        Write-Warning "File not found: $($img.Local)"
    }
}
```

## Support

If you encounter issues:
1. Check AWS credentials in `.env`
2. Verify S3 bucket permissions
3. Test with AWS CLI: `aws s3 ls s3://graveyardjokes-cdn/thevelvetpulse/`
4. Check CloudFront distribution is pointing to the correct origin

## References
- [Laravel File Storage Documentation](https://laravel.com/docs/filesystem)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
