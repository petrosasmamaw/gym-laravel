<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Trainer;

class TrainerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Alex Morgan',
                'age' => 29,
                'description' => 'Strength and conditioning coach focused on functional movement.',
                'sex' => 'male',
                'imageurl' => 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80',
            ],
            [
                'name' => 'Sofia Rivera',
                'age' => 34,
                'description' => 'Certified yoga instructor and mobility specialist.',
                'sex' => 'female',
                'imageurl' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
            ],
            [
                'name' => 'Marcus Lee',
                'age' => 41,
                'description' => 'Powerlifting coach with focus on technique and safety.',
                'sex' => 'male',
                'imageurl' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
            ],
            [
                'name' => 'Emma Johnson',
                'age' => 26,
                'description' => 'HIIT and metabolic conditioning trainer.',
                'sex' => 'female',
                'imageurl' => 'https://images.unsplash.com/photo-1520975913511-9f2b4b7a1f98?w=800&q=80',
            ],
            [
                'name' => 'Owen Carter',
                'age' => 37,
                'description' => 'Nutrition coach and personal trainer.',
                'sex' => 'male',
                'imageurl' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
            ],
        ];

        foreach ($data as $item) {
            Trainer::create($item);
        }
    }
}
