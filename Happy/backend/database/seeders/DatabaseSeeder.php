<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Запуск сидера для ролей и разрешений
        $this->call(RolesAndPermissionsSeeder::class);

        // Создание пользователя и присвоение роли
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'), // Обязательно добавьте пароль
        ]);

        // Назначение роли "admin" пользователю
        $user->assignRole('admin');
    }
}
