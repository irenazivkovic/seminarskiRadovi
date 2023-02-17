<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rad extends Model
{
    use HasFactory;
    protected $fillable = [
        'student', //spoljni kljuc ka tabeli user,
        'profesor',//spoljni kljuc ka tabeli user,
        'datum_predaje',
        'file_id', //spoljni kljuc ka tabeli u kojoj cuvamo samo radove
        

         
        
    ];
    public function profesor()
    {
        return $this->belongsTo(User::class);
    }
    public function student()
    {
        return $this->belongsTo(User::class);
    }

}
