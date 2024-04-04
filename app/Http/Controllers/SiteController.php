<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{

    public function home()
    {
        return Inertia::render('Home');
    }

    public function about()
    {

        $user = User::all();

        return Inertia::render('About');
    }

    public function products()
    {
        return Inertia::render('Product');
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
}
