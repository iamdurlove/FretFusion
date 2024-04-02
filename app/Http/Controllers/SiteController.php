<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    // for about us
    public function about()
    {
        return Inertia::render('About', [
            'title' => "About Us",
            'name' => "Durlav"
        ]);
    }
}
