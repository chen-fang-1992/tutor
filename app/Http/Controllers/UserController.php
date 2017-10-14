<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class UserController extends Controller
{

	/*
		login authentication
	*/
	public function login()
	{
		$email = Input::get('email');
		$password = Input::get('password');

		if (Auth::attempt(['email' => $email, 'password' => $password])) {
			return redirect('/user/profile/detail');
		} else {
			return 'fail';
		}
	}

	/*
		get user profile detail
	*/
	public function detail()
	{
		$user = Auth::user();
		$profile = Profile::find($user->id);
		return $profile;
	}

	/*
		store user profile
	*/
	public function store()
	{
		$user = Auth::user();
		$profile = new profile;
		$profile->user_id = $user->id;
		$profile->firstname = explode(" ", $user->name)[0];
		$profile->lastname = explode(" ", $user->name)[1];

		if ($profile->save())
			return redirect('/user/profile');
	}

	/*
		update user profile
	*/
	public function update()
	{
		$user = Auth::user();
		$profile = Profile::find($user->id);
		$profile->firstname = Input::get('firstname');
		$profile->lastname = Input::get('lastname');
		$profile->number = Input::get('number');
		$profile->country = Input::get('country');
		$profile->language = Input::get('language');
		$profile->city = Input::get('city');
		$profile->location = Input::get('location');
		$profile->availability = Input::get('availability');
		$profile->currency = Input::get('currency');
		$profile->price = Input::get('price');
		$profile->about = Input::get('about');
		$user->name = $profile->firstname . ' ' . $profile->lastname;
		$picture = Input::get('picture');

		// decode base64
		preg_match('/^(data:\s*image\/(\w+);base64,)/', $picture, $result);
		$img = base64_decode(str_replace($result[1], '', $picture));
		// store path and load path
		$loadpath = "/img/" . $profile->firstname . '_' . $profile->lastname . '.' . $result[2];
		$storepath = getcwd() . $loadpath;
		// store file and path
		file_put_contents($storepath, $img);
		$profile->picture = $loadpath;

		if ($profile->save() && $user->save())
			return redirect('/user/profile');
	}
}
