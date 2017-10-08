<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected  $primaryKey = 'user_id';

	//Profile-User:One-One
	public function users()
	{
		return $this->hasOne(User::class);
	}
}
