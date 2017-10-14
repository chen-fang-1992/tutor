<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/', 'MainController@index');
Route::get('/home', 'MainController@index');

Route::group(['prefix' => 'user'], function() {
	Route::get('login', 'UserController@login');
	Route::post('login', 'Auth\LoginController@login');

	Route::get('register', 'UserController@register');
	Route::post('register', 'Auth\RegisterController@register');

	Route::get('profile/create', 'UserController@store');
	Route::get('profile', 'UserController@show');
	Route::post('profile', 'UserController@update');
	Route::get('profile/detail', 'UserController@detail');
});*/

/*Route::get('/', function() {
	echo date("h:i:sa");
		return view('view', ['content' => 'home', 'auth' => 'false', 'tutors' => '']);
});*/

Route::post('/user/login', 'UserController@login');
Route::get('/user/logout', 'Auth\LoginController@logout');

Route::get('/user/profile/detail', 'UserController@detail');

Route::get('/tutor', 'MainController@search');
Route::get('/tutor/detail', 'MainController@show');

Route::get('/{path?}', function() {
//echo date("h:i:sa");
	return view('view', ['content' => 'home', 'auth' => 'false', 'tutors' => '']);
})->where('path', '.*');
