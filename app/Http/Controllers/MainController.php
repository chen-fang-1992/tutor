<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{

	/*
		control navigation bar button
	*/
	public function index()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('layouts/layout', ['content' => 'home', 'auth' => 'false']);
		} else {
			return view('layouts/layout', ['content' => 'home', 'auth' => 'true']);
		}
	}
}
