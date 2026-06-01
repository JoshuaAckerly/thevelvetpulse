<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase;

class UserTest extends TestCase
{
    /** @test */
    public function user_can_be_instantiated(): void
    {
        $user = new User;
        $this->assertInstanceOf(User::class, $user);
    }

    /** @test */
    public function user_has_expected_fillable_fields(): void
    {
        $user = new User;
        $this->assertEquals(['name', 'email', 'password'], $user->getFillable());
    }

    /** @test */
    public function user_can_be_created_via_factory(): void
    {
        $user = User::factory()->make();
        $this->assertNotEmpty($user->name);
        $this->assertNotEmpty($user->email);
        $this->assertNotEmpty($user->password);
    }
}
