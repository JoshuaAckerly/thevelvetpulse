<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\TestCase;

class PageTest extends TestCase
{
    /** @test */
    public function home_page_returns_200(): void
    {
        $this->get('/')->assertStatus(200)->assertInertia(fn ($page) => $page->component('Home'));
    }

    /** @test */
    public function top_albums_page_returns_200(): void
    {
        $this->get('/topalbums')->assertStatus(200)->assertInertia(fn ($page) => $page->component('TopAlbums'));
    }

    /** @test */
    public function music_page_returns_200(): void
    {
        $this->get('/music')->assertStatus(200)->assertInertia(fn ($page) => $page->component('Music'));
    }

    /** @test */
    public function tour_events_page_returns_200(): void
    {
        $this->get('/tourevents')->assertStatus(200)->assertInertia(fn ($page) => $page->component('TourEvents'));
    }

    /** @test */
    public function tours_page_returns_200(): void
    {
        $this->get('/tours')->assertStatus(200)->assertInertia(fn ($page) => $page->component('Tours'));
    }

    /** @test */
    public function merch_page_returns_200(): void
    {
        $this->get('/merch')->assertStatus(200)->assertInertia(fn ($page) => $page->component('Merch'));
    }

    /** @test */
    public function contact_page_returns_200(): void
    {
        $this->get('/contact')->assertStatus(200)->assertInertia(fn ($page) => $page->component('Contact'));
    }

    /** @test */
    public function about_page_returns_200(): void
    {
        $this->get('/about')->assertStatus(200)->assertInertia(fn ($page) => $page->component('AboutUs'));
    }
}
