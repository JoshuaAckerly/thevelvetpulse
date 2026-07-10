<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use League\CommonMark\CommonMarkConverter;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/topalbums', function () {
    return Inertia::render('TopAlbums');
})->name('topalbums');

Route::get('/music', function () {
    return Inertia::render('Music');
})->name('music');

Route::get('/tourevents', function () {
    return Inertia::render('TourEvents');
})->name('tourevents');

Route::get('/tours', function () {
    return Inertia::render('Tours');
})->name('tours');

Route::get('/merch', function () {
    return Inertia::render('Merch');
})->name('merch');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('/terms', function () {
    $converter = new CommonMarkConverter(['html_input' => 'escape', 'allow_unsafe_links' => false]);
    $markdown = file_get_contents(base_path('legal/TERMS_OF_SERVICE.md')) ?: '';
    $html = $converter->convert($markdown)->getContent();

    return Inertia::render('legal/Terms', ['content' => $html]);
})->name('terms');

Route::get('/privacy', function () {
    $converter = new CommonMarkConverter(['html_input' => 'escape', 'allow_unsafe_links' => false]);
    $markdown = file_get_contents(base_path('legal/PRIVACY_POLICY.md')) ?: '';
    $html = $converter->convert($markdown)->getContent();

    return Inertia::render('legal/Privacy', ['content' => $html]);
})->name('privacy');

Route::get('/cookies', function () {
    $converter = new CommonMarkConverter(['html_input' => 'escape', 'allow_unsafe_links' => false]);
    $markdown = file_get_contents(base_path('legal/COOKIE_POLICY.md')) ?: '';
    $html = $converter->convert($markdown)->getContent();

    return Inertia::render('legal/Cookies', ['content' => $html]);
})->name('cookies');

Route::get('/generate-sitemap', function () {
    $base = 'https://thevelvetpulse.graveyardjokes.com';

    Sitemap::create()
        ->add(Url::create($base.'/'))
        ->add(Url::create($base.'/music'))
        ->add(Url::create($base.'/topalbums'))
        ->add(Url::create($base.'/tourevents'))
        ->add(Url::create($base.'/tours'))
        ->add(Url::create($base.'/merch'))
        ->add(Url::create($base.'/contact'))
        ->add(Url::create($base.'/about'))
        ->add(Url::create($base.'/privacy'))
        ->add(Url::create($base.'/terms'))
        ->add(Url::create($base.'/cookies'))
        ->writeToFile(public_path('sitemap.xml'));

    return 'Sitemap generated!';
});

Route::redirect('/login', '/', 301);
Route::redirect('/register', '/', 301);
Route::redirect('/forgot-password', '/', 301);
Route::redirect('/reset-password', '/', 301);
Route::redirect('/reset-password/*', '/', 301);
Route::redirect('/email-verification', '/', 301);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
