<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

	/*
		call for login page
	*/
	public function login()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('layouts/layout', ['content' => 'login', 'auth' => 'false']);
		} else {
			return redirect('/user/profile');
		}
	}

	/*
		call for register page
	*/
	public function register()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('layouts/layout', ['content' => 'register', 'auth' => 'false']);
		}
	}

	/*
		store user profile
	*/
	public function store()
	{
		$user = Auth::user();
		$profile = new profile;
		$profile->userId = $user->id;
		$profile->firstName = explode(" ", $user->name)[0];
		$profile->lastName = explode(" ", $user->name)[1];

		if ($profile->save()) {
			return redirect('/user/profile');
		}
	}

	/*
		show user profile
	*/
	public function show()
	{
		$user = Auth::user();
		if ($user == null) {
			return redirect('/user/login');
		} else {
			return view('layouts/layout', ['content' => 'profile', 'auth' => 'true']);
		}
	}


	/*
		update user profile
	*/
	public function update()
	{
		$user = Auth::user();
		$profile = Profile::find($user->id);
		$profile->firstName = Input::get('firstname');
		$profile->lastName = Input::get('lastname');
		$profile->number = Input::get('number');
		$profile->country = Input::get('country');
		$profile->language = Input::get('language');
		$profile->city = Input::get('city');
		$profile->location = Input::get('location');
		$profile->availability = Input::get('availability');
		$profile->currency = Input::get('currency');
		$profile->price = Input::get('price');
		$profile->about = Input::get('about');

		$user->name = $profile->firstName . ' ' . $profile->lastName;

		if ($profile->save() && $user->save()) {
			return redirect('/user/profile');
		}
	}

	/*
		get user profile detail
	*/
	public function detail()
	{
		$user = Auth::user();
		$profile = Profile::find($user->id);
		echo $profile->firstname;
		return response()->json([
			'firstname' => $profile->firstName,
			'lastname' => $profile->lastName,
			'number' => $profile->number,
			'country' => $profile->country,
			'language' => $profile->language,
			'city' => $profile->city,
			'location' => $profile->location,
			'availability' => $profile->availability,
			'currency' => $profile->currency,
			'price' => $profile->price,
			'about' => $profile->about
		]);
	}
}
