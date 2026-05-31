<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MessageProxyController;
use Illuminate\Support\Facades\Route;

Route::get('/messages', [MessageProxyController::class, 'index']);
Route::patch('/messages/read-all', [MessageProxyController::class, 'markAllRead']);
Route::patch('/messages/{id}/read', [MessageProxyController::class, 'markRead']);

// Contact form — 3 submissions per minute per IP
Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:3,1');
