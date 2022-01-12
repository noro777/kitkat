<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsSuggestions extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'content',
    ];

}
