<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'price' => random_int(1000, 5000),
            'image' =>
                "https://picsum.photos/id/" . random_int(1, 500) . "/500/500"
            ,
            'stock' => fake()->randomDigit(),
        ];
    }
}
