<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	public function login()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('layouts/layout', ['content' => 'login', 'auth' => 'false']);
		} else {
			return redirect('/user/profile');
		}
	}

	public function register()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('layouts/layout', ['content' => 'register', 'auth' => 'false']);
		}
	}

	public function store()
	{
		$user = Auth::user();
		$profile = new profile;
		$profile->userId = $user->id;
		$profile->firstName = explode(" ", $user->name)[0];
		$profile->lastName = explode(" ", $user->name)[1];

		if ($profile->save()) {
			return view('layouts/layout', ['content' => 'profile', 'auth' => 'true']);
		}
	}

	public function show()
	{
		$user = Auth::user();
		if ($user == null) {
			return redirect('/user/login');
		} else {
			return view('layouts/layout', ['content' => 'profile', 'auth' => 'true']);
		}
	}

	public function update()
	{
		$user = Auth::user();
		$profile = Profile::find($user->id);
		$profile->firstName = Input::get('firstname');
		$profile->lastName = Input::get('lastname');
		$profile->number = Input::get('number');
		$profile->country = Input::get('country');
		$profile->city = Input::get('city');
		$profile->location = Input::get('location');
		$profile->currency = Input::get('currency');
		$profile->rate = Input::get('rate');
		$profile->about = Input::get('about');

		$user->name = $profile->firstName . ' ' . $profile->lastName;

		if ($profile->save() && $user->save()) {
			return view('layouts/layout', ['content' => 'profile', 'auth' => 'true']);
		}
	}
}