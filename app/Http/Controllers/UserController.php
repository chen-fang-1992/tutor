<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
	/*
		register
	*/
	public function register()
	{
		// check whether there is user who has logged in
		if (Auth::check())
			return 'fail1';
		// create user model
		$user = new user;
		$user->name = Input::get('name');
		$user->email = Input::get('email');
		$user->password = bcrypt(Input::get('password'));
		// check email unique
		if (User::where([ ['email', $user->email] ])->get()->count())
			return 'fail2';
		// insert user and create profile model
		if ($user->save()) {
			Auth::attempt(['email' => Input::get('email'), 'password' => Input::get('password')]);
			$user = Auth::user();
			$profile = new profile;
			$profile->user_id = $user->id;
			$profile->firstname = explode(" ", $user->name)[0];
			$profile->lastname = explode(" ", $user->name)[1];
			$profile->price = 0;
			$profile->availability = 0;
			$profile->picture = '/img/default.png';
		// insert profile
			if ($profile->save())
				return $profile;
			else
				return 'fail3';
		}
	}

	/*
		login authentication
	*/
	public function login()
	{
		// check whether there is user who has logged in
		if (Auth::check())
			return 'fail1';
		// get login info
		$email = Input::get('email');
		$password = Input::get('password');
		// authenticate login info
		if (Auth::attempt(['email' => $email, 'password' => $password]))
			return $this->show();
		else
			return 'fail2';
	}

	/*
		logout authentication
	*/
	public function logout()
	{
		// check whether there is user who has logged in
		if (Auth::check()) {
			Auth::logout();
			return 'success';
		} else {
			return 'fail';
		}
	}

	/*
		get user profile show
	*/
	public function show()
	{
		// get user model
		if (Auth::check()) {
			$user = Auth::user();
			$profile = Profile::find($user->id);
			return $profile;
		} else {
			return 'fail';
		}
	}

	/*
		update user profile
	*/
	public function update()
	{
		// check whether there is user who has logged in
		if (!Auth::check())
			return 'fail';

		//get profile model
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
		// check whether picture is updated
		if ($profile->picture != $picture) {
			// decode base64
			preg_match('/^(data:\s*image\/(\w+);base64,)/', $picture, $result);
			$img = base64_decode(str_replace($result[1], '', $picture));
			// store path and load path
			$loadpath = "/img/" . $profile->firstname . '_' . $profile->lastname . '.' . $result[2];
			$storepath = getcwd() . $loadpath;
			// store file and path
			file_put_contents($storepath, $img);
			$profile->picture = $loadpath;
		}
		// update profile and user
		if ($profile->save() && $user->save())
			return 'success';
	}
}
