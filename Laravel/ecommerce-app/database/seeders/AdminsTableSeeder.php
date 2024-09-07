<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'name'      =>  'Admin',
            'email'     =>  'admin@gmail.com',
            'phone'     =>  '123456789',
            'password'  =>  Hash::make('Admin@1234'),
        ]);
    }
}
