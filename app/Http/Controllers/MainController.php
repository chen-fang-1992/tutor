<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
	public function index()
	{
		$user = Auth::user();
		if ($user == null) {
			return view('home', ['auth' => 'false']);
		} else {
			return view('home', ['auth' => 'true']);
		}
	}
}