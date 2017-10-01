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
			<!-- Scripts -->
			<script src="{{ URL::asset('js/app.js') }}"></script>
	</head>
	<body>
		<div class="header">
			<nav class="navbar navbar-static-top" role="navigation">
				<div class="container navigation-bar">
					<div class="navbar-header">
						<a class="logo" href="#"><img src="{{ URL::asset('img/logo.png') }}"></a>
					</div>
					<div>
						<ul class="nav navbar-nav navbar-right">
							<li><a class="signup" href="/signup">Become a Tutor</a></li>
							<li><a class="login" href="#">Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		@yield('content')
		<div class="footer">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-4">
						<ul class="list-footer">
							<li><a href="/signup">Become a Tutor</a></li>
							<li><a href="/faq-students">FAQ Students</a></li>
							<li><a href="/faq-tutor">FAQ Tutor</a></li>
						</ul>
					</div>
					<div class="col-xs-4">
						<ul class="list-footer">
							<li><a href="/terms">Terms and conditions</a></li>
							<li><a href="/privacy">Privacy policy</a></li>
							<li class="social-footer">
								<a href="#"><span><i class="fa fa-facebook" aria-hidden="true"></i></span></a>
								<a href="#"><span><i class="fa fa-twitter" aria-hidden="true"></i></span></a>
								<a href="#"><span><i class="fa fa-instagram" aria-hidden="true"></i></span></a>
							</li>
						</ul>
					</div>
					<div class="col-xs-4">
						<ul class="list-footer">
							<li><a href="#">Contact Us</a></li>
							<li><a href="tel:+12-3456-7890">+12 3456 7890</a></li>
						</ul>
					</div>
				</div>
				<div class="row title">
					<h1>©2017 XXX PTE LTD. All Rights Reserved.</h1>
					<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				</div>
			</div>
		</div>
	<body>
</html>