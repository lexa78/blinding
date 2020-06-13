<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = ['name', 'email', 'signed', 'pidor', 'pidor_reason', 'ip'];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
