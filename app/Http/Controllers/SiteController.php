<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
        $query = Product::query();
        $products = $query->paginate(12)->onEachSide(1);
        return inertia('Product', ['products' => $products]);
    }

    public function showProducts($id)
    {
        $product = Product::find($id);
        return inertia('ProductShow', ['product' => $product]);
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
}
