<?php

namespace Database\Seeders;

use App\Models\Rad;
use Illuminate\Database\Seeder;

class RadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rad::create([
            'student' => 1, // ID studenta koji je predao ovaj rad
            'profesor' => 2, // ID profesora koji je pregledao ovaj rad
            'datum_predaje' => '2023-03-20', // Datum predaje rada
            'naziv' => 'Analiza performansi bežičnih mreža' // Naziv rada
        ]);
        
        // Objekat 2
        Rad::create([
            'student' => 2, // ID studenta koji je predao ovaj rad
            'profesor' => 1, // ID profesora koji je pregledao ovaj rad
            'datum_predaje' => '2023-04-15', // Datum predaje rada
            'naziv' => 'Razvoj softverskog sistema za evidenciju poslovanja' // Naziv rada
        ]);
        
        // Objekat 3
        Rad::create([
            'student' => 3, // ID studenta koji je predao ovaj rad
            'profesor' => 1, // ID profesora koji je pregledao ovaj rad
            'datum_predaje' => '2023-05-01', // Datum predaje rada
            'naziv' => 'Istraživanje primene AI u medicini' // Naziv rada
        ]);
    }
}
