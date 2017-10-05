<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Input;

class UserController extends Controller
{
	public function index()
	{
		return view('layouts/layout', ['content' => 'user']);
	}

	public function create()
	{
		return view('layouts/layout', ['content' => 'register']);
	}

	public function store()
	{
		$user = new User;
		$user->name = Input::get('name');
		$user->email = Input::get('email');
		$user->password = Input::get('password');

		if ($user->save()) {
			$profile = new profile;
			$profile->userId = $user->id;
			$profile->firstName = explode(" ", $user->name)[0];
			$profile->lastName = explode(" ", $user->name)[1];
			if ($profile->save()) {
				return view('layouts/layout', ['content' => 'profile']);
			}
		}
	}

	public function show()
	{
		$profile = Profile::find(9);
		return view('layouts/layout', ['content' => 'profile']);
	}

	public function update()
	{
		$profile = Profile::find(9);
		$profile->firstName = Input::get('firstname');
		$profile->lastName = Input::get('lastname');
		$profile->number = Input::get('number');
		$profile->country = Input::get('country');
		$profile->city = Input::get('city');
		$profile->location = Input::get('location');
		$profile->currency = Input::get('currency');
		$profile->rate = Input::get('rate');
		$profile->about = Input::get('about');

		if ($profile->save()) {
			return view('layouts/layout', ['content' => 'profile']);
		}
	}
}
