<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;

class AuthService
{
    public function register(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return $user;
    }

    public function attemptLogin(array $credentials): bool
    {
        return auth()->attempt($credentials);
    }

    public function logout()
    {
        // Ensure we call the session (web) guard logout so the session is cleared
        try {
            Auth::guard('web')->logout();
        } catch (\Throwable $e) {
            // fallback to facade logout
            Auth::logout();
        }
    }

    public function sendResetLink(array $data): string
    {
        return Password::sendResetLink(['email' => $data['email']]);
    }

    public function resetPassword(array $data): string
    {
        $status = Password::reset(
            $data,
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();
                event(new PasswordReset($user));
            }
        );

        return $status;
    }
}
