# The Velvet Pulse - Image Migration to S3 Script
# This script uploads images from public/images to S3 under thevelvetpulse folder

param(
    [switch]$DryRun,
    [string]$SourceDir = "public\images",
    [string]$Bucket = "graveyardjokes-cdn",
    [string]$Prefix = "thevelvetpulse"
)

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "The Velvet Pulse - S3 Image Migration" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if AWS CLI is installed
try {
    $null = aws --version
} catch {
    Write-Host "Error: AWS CLI is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Install from: https://aws.amazon.com/cli/" -ForegroundColor Yellow
    exit 1
}

# Check if source directory exists
if (-not (Test-Path $SourceDir)) {
    Write-Host "Error: Source directory not found: $SourceDir" -ForegroundColor Red
    exit 1
}

Write-Host "Source Directory: $SourceDir" -ForegroundColor Green
Write-Host "S3 Bucket: $Bucket" -ForegroundColor Green
Write-Host "S3 Prefix: $Prefix" -ForegroundColor Green
Write-Host ""

if ($DryRun) {
    Write-Host "DRY RUN MODE - No files will be uploaded" -ForegroundColor Yellow
    Write-Host ""
}

# Define category mappings
$categoryMappings = @{
    'album' = 'albums'
    'vinyl' = 'albums'
    'cover' = 'albums'
    'retro' = 'albums'
    'vintage' = 'albums'
    'abstract' = 'albums'
    'tshirt' = 'merch'
    'hoodie' = 'merch'
    'poster' = 'merch'
    'sticker' = 'merch'
    'cd' = 'merch'
    'merch' = 'merch'
    'band' = 'band'
    'tour' = 'band'
    'girl' = 'band'
    'glam' = 'band'
    'member' = 'band'
    'jay' = 'band'
    'rhea' = 'band'
    'zane' = 'band'
    'adobestock' = 'backgrounds'
    'background' = 'backgrounds'
}

# Get all image files
$imageExtensions = @('*.jpg', '*.jpeg', '*.png', '*.gif', '*.webp', '*.svg')
$imageFiles = Get-ChildItem -Path $SourceDir -Include $imageExtensions -Recurse -File

if ($imageFiles.Count -eq 0) {
    Write-Host "No image files found in $SourceDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($imageFiles.Count) image(s) to process" -ForegroundColor Cyan
Write-Host ""

$uploaded = 0
$skipped = 0
$failed = 0

foreach ($file in $imageFiles) {
    $filename = $file.Name
    $filenameLower = $filename.ToLower()
    
    # Determine category based on filename
    $category = 'images'  # default
    foreach ($pattern in $categoryMappings.Keys) {
        if ($filenameLower -like "*$pattern*") {
            $category = $categoryMappings[$pattern]
            break
        }
    }
    
    # Build S3 path
    $s3Path = "$Prefix/$category/$filename"
    $s3Uri = "s3://$Bucket/$s3Path"
    
    # Check if file already exists in S3
    $exists = $false
    try {
        $null = aws s3 ls $s3Uri 2>$null
        $exists = $?
    } catch {
        $exists = $false
    }
    
    if ($exists) {
        Write-Host "⏩ Skipped (already exists): $s3Path" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    if ($DryRun) {
        Write-Host "🔍 [DRY RUN] Would upload: $($file.FullName) → $s3Path" -ForegroundColor Cyan
        continue
    }
    
    # Determine content type
    $contentType = switch ($file.Extension.ToLower()) {
        '.jpg'  { 'image/jpeg' }
        '.jpeg' { 'image/jpeg' }
        '.png'  { 'image/png' }
        '.gif'  { 'image/gif' }
        '.webp' { 'image/webp' }
        '.svg'  { 'image/svg+xml' }
        default { 'application/octet-stream' }
    }
    
    # Upload to S3
    try {
        Write-Host "📤 Uploading: $filename → $s3Path" -ForegroundColor Cyan
        aws s3 cp $file.FullName $s3Uri --content-type $contentType --acl public-read --only-show-errors
        
        if ($LASTEXITCODE -eq 0) {
            $url = "https://d3fjkusrpksks7.cloudfront.net/$s3Path"
            Write-Host "   ✅ Success! URL: $url" -ForegroundColor Green
            $uploaded++
        } else {
            Write-Host "   ❌ Failed to upload" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host "   ❌ Error: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Migration Summary" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Uploaded:        $uploaded" -ForegroundColor Green
Write-Host "Skipped:         $skipped" -ForegroundColor Yellow
Write-Host "Failed:          $failed" -ForegroundColor Red
Write-Host "Total Processed: $($imageFiles.Count)" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Host "This was a DRY RUN. No files were actually uploaded." -ForegroundColor Yellow
    Write-Host "Run without -DryRun to perform the actual migration." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Example: .\migrate-images-to-s3.ps1" -ForegroundColor Cyan
}

Write-Host "Migration complete!" -ForegroundColor Green
