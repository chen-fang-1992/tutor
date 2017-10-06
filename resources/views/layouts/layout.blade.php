<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>TUTOR</title>
			<!-- Fonts -->
			<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,700,700i" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
			<!-- Styles -->
			<link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/font-awesome.css') }}">
	</head>
	<body>
		<div id="header" class="header {{ $content=='home' ? 'home' : 'other' }}" auth="{{ $auth }}"></div>
		<div id="{{ $content }}"></div>
		<div id="footer" class="footer"></div>
	<body>
	<!-- Scripts -->
	<script src="{{ URL::asset('js/app.js') }}"></script>
</html>