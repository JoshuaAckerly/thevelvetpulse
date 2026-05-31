<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdatePasswordRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class PasswordController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('settings/password');
    }

    public function update(UpdatePasswordRequest $request): RedirectResponse
    {
        /** @var array<string, mixed> $validated */
        $validated = $request->validated();

        /** @var User $user */
        $user = $request->user();
        $password = $validated['password'];
        assert(is_string($password));
        $user->update([
            'password' => Hash::make($password),
        ]);

        return back();
    }
}
