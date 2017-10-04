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

Route::get('/', function () {
	return view('home');
});

Route::group(['prefix' => 'user'], function() {
	Route::get('/login', 'UserController@index');
	Route::get('/register', 'UserController@create');
	Route::post('/profile', 'UserController@store');
	Route::get('/profile', 'UserController@show');
	Route::get('/profile/edit', 'UserController@edit');
	Route::put('/profile', 'UserController@update');
});

//Route::resource('user', 'UserController');