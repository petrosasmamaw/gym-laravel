<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(RegisterRequest $request)
    {
        $user = $this->authService->register($request->validated());

        // Login the user (create session)
        auth()->login($user);

        return response()->json(['user' => $user], 201);
    }

    public function login(LoginRequest $request)
    {
        $creds = $request->only('email', 'password');

        if (! $this->authService->attemptLogin($creds)) {
            return response()->json(['message' => 'Invalid credentials'], 422);
        }

        $user = Auth::user();
        return response()->json(['user' => $user]);
    }

    public function logout(Request $request)
    {
        $this->authService->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out']);
    }

    public function me(Request $request)
    {
        return response()->json(['user' => $request->user()]);
    }

    public function forgot(ForgotPasswordRequest $request)
    {
        $status = $this->authService->sendResetLink($request->validated());

        return response()->json(['status' => $status === \Illuminate\Support\Facades\Password::RESET_LINK_SENT ? 'sent' : 'failed']);
    }

    public function reset(ResetPasswordRequest $request)
    {
        $status = $this->authService->resetPassword($request->validated());

        return response()->json(['status' => $status === \Illuminate\Support\Facades\Password::PASSWORD_RESET ? 'reset' : 'failed']);
    }
}
