<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_ru',
        'name_kz',
        'parent_id',
        'sort_order',
        'show_on_main',
    ];
}
