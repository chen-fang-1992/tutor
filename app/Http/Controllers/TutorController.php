<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Profile;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class TutorController extends Controller
{
	/*
		ajax search tutors
	*/
	public function show()
	{
		$language = Input::get('language');
		$day = Input::get('availability');
		$location = Input::get('location');
		$filter = Input::get('filter');

		if ($location == '') {
			$location = '%%';
		} else {
			$location = '%' . $location . '%';
		}

		if ($filter == 'Price') {
			$filter = 'price';
		} else {
			$filter = 'rate';
		}

		$availability = 0;
		if ($day == 'When?') {
			$availability = 15;
		}
		if (strpos($day, 'M') > -1) {
			$availability += 1;
		}
		if (strpos($day, 'A') > -1) {
			$availability += 2;
		}
		if (strpos($day, 'E') > -1) {
			$availability += 4;
		}
		if (strpos($day, 'W') > -1 && $day != 'When?') {
			$availability += 8;
		}

		$tutors = Profile::where([
			['language', $language],
			['location', 'like', $location]
		])->whereRaw('availability&'.$availability.' = '.$availability)
		->orderBy($filter, 'ASC')->get();

		return $tutors;
	}
}
