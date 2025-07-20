<?php

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('/topalbums', function () {
    return Inertia::render('TopAlbums');
})->name('topalbums');

Route::get('/music', function () {
    return Inertia::render('Music');
})->name('music');

Route::get('/generate-sitemap', function () {
    Sitemap::create()
        ->add(Url::create('/'))
        ->add(Url::create('/about'))
        ->add(Url::create('/music'))
        ->add(Url::create('/topalbums'))

        ->writeToFile(public_path('sitemap.xml'));

    return 'Sitemap generated!';
});


/* Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php'; */
