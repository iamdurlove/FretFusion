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

        return Inertia::render('About', [
            'users' => $user,
            'title' => "About Us",
            'name' => "Durlav"
        ]);
    }

    public function products()
    {
        return Inertia::render('Products');
    }
}
