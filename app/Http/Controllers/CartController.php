<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Cart::with('product')->where('user_id', auth()->user()->id)->get();
        return inertia('Cart/Index', [
            'carts' => $query,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        $user = auth()->user();
        $data = $request->validated();
        $data['user_id'] = $user->id;

        $checkProduct = Cart::where('product_id', $data['product_id'])->where('user_id', $data['user_id'])->first();

        if ($checkProduct) {
            $checkProduct->quantity += 1;
            $query = $checkProduct->save();
            if ($query) {
                return redirect()->route('cart.index')->with('success', 'Product added to cart');
            } else {
                // Redirect back with an error message if creation fails
                return redirect()->back()->withInput()->withErrors(['error' => 'Failed to add product to cart']);
            }
        }
        // Create a new Cart instance with the validated data
        $query = Cart::create($data);
        // dd($query->toArray());
        // Check if the record was successfully created
        if ($query) {
            return redirect()->route('cart.index')->with('success', 'Product added to cart');
        } else {
            // Redirect back with an error message if creation fails
            return redirect()->back()->withInput()->withErrors(['error' => 'Failed to add product to cart']);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // dd($id);
        $query = Cart::where('id', $id)->delete();
        if ($query) {
            return redirect()->route('cart.index')->with('success', 'Product removed from cart');
        } else {
            return redirect()->back()->withInput()->withErrors(['error' => 'Failed to remove product from cart']);
        }

    }
}
