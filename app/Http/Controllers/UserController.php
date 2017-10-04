<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;

class UserController extends Controller
{
	public function index()
	{
		return view('layouts/layout', ['content' => 'login']);
	}


	public function create()
	{
		return view('layouts/layout', ['content' => 'register']);
	}

	public function store()
	{
		return view('layouts/layout', ['content' => 'result']);
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