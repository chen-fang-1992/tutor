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
			<link rel="stylesheet" href="{{ URL::asset('css/header.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/content.home.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/content.user.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/content.tutor.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/footer.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/font-awesome.css') }}">
	</head>
	<body>
		<div id="root" data-auth="{{ $auth }}" data-tutors="{{ $tutors }}"></div>
	<body>
	<!-- Scripts -->
	<script src="{{ URL::asset('js/app.js') }}"></script>
</html>