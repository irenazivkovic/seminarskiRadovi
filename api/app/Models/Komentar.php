<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komentar extends Model
{
    use HasFactory;
    protected $fillable = [
        'rad_id',
        'profesor_id',
        'ocena', //procentualno
        'opis' //komentar na oocenu
         
        
    ];
    public function profesor()
    {
        return $this->belongsTo(User::class);
    }
    public function rad()
    {
        return $this->belongsTo(Rad::class);
    }
}
