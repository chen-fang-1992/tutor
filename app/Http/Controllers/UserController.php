<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

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
			return view('layouts/layout', ['content' => 'profile']);
		}
	}

	public function show()
	{
		return view('layouts/layout', ['content' => 'profile']);
	}

	public function edit()
	{
		return view('layouts/layout', ['content' => 'edit']);
	}

	public function update()
	{
		return view('layouts/layout', ['content' => 'profile']);
	}
}
