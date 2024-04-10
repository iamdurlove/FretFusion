<?php

namespace Database\Seeders;

use App\Models\Cart;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create(
            [
                'name' => 'Durlav Parajuli',
                'email' => 'test@gmail.com',
                'password' => bcrypt('test1234'),
                'email_verified_at' => Carbon::now()->toDateTimeString(),
            ]
        );
        User::factory()->create(
            [
                'name' => 'Bibas Neupane',
                'email' => 'bibas@gmail.com',
                'password' => bcrypt('test1234'),
                'email_verified_at' => Carbon::now()->toDateTimeString(),
            ]
        );

        Product::factory(50)->create();

        // Cart::factory(10)->create();
    }
}
