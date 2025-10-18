<?php

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/generate-sitemap', function () {
    $base = 'https://thevelvetpulse.graveyardjokes.com';

    Sitemap::create()
        ->add(Url::create($base . '/'))
        ->add(Url::create($base . '/music'))
        ->add(Url::create($base . '/topalbums'))
        ->add(Url::create($base . '/tourevents'))
        ->writeToFile(public_path('sitemap.xml'));

    return 'Sitemap generated!';
});

Route::redirect('/about', '/', 301);
Route::redirect('/login', '/', 301);
Route::redirect('/register', '/', 301);
Route::redirect('/forgot-password', '/', 301);
Route::redirect('/reset-password', '/', 301);
Route::redirect('/reset-password/*', '/', 301);
Route::redirect('/email-verification', '/', 301);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
