<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TrainerController;
use App\Http\Controllers\Api\ProgramController;

// API auth endpoints (SPA cookie-based)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'forgot']);
Route::post('/reset-password', [AuthController::class, 'reset']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    // user program endpoints
    Route::get('/programs', [ProgramController::class, 'show']);
    Route::post('/programs', [ProgramController::class, 'store']);
});

// Public trainers listing
Route::get('/trainers', [TrainerController::class, 'index']);

// fallback for Laravel's default user route if needed
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
