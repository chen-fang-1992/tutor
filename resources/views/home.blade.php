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
			<link rel="stylesheet" href="{{ URL::asset('css/common.css') }}">
			<link rel="stylesheet" href="{{ URL::asset('css/home.css') }}">
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
							<li><a class="signup nav-btn" href="/signup">Become a Tutor</a></li>
							<li><a class="login nav-btn" href="#">Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="content">
			<div class="background" style="background-image:url('{{ URL::asset('img/home-bg.jpeg') }}')">
			</div>
			<div class="container search-bar">
				<h1>Find A Native Language Tutor Near You</h1>
				<div class="row">
					<div class="col-xs-10 col-xs-offset-1">
						<div class="col-xs-3">
							<div class="dropdown">
								<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
									<span class="placeholder">English</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu" role="menu">
									<li value="0"><a class="btn btn-link">English</a></li>
									<li value="1"><a class="btn btn-link">Chinese</a></li>
									<li value="2"><a class="btn btn-link">French</a></li>
									<li value="3"><a class="btn btn-link">Germany</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xs-3">
							<div class="dropdown">
								<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
									<span class="placeholder">When?</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu" role="menu">
									<li value="0"><a class="btn btn-link">Monday</a></li>
									<li value="1"><a class="btn btn-link">Tuesday</a></li>
									<li value="2"><a class="btn btn-link">Wednesday</a></li>
									<li value="3"><a class="btn btn-link">Thursday</a></li>
									<li value="4"><a class="btn btn-link">Friday</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xs-3">
							<div class="dropdown">
								<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
									<span class="placeholder">Price</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu" role="menu">
									<li value="0"><a class="btn btn-link">Price</a></li>
									<li value="1"><a class="btn btn-link">Rating</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xs-3">
							<button type="button" class="btn btn-success">Search</button>
						</div>
					</div>
				</div>
			</div>
			<div class="container us-bar">
				<div class="row title">
					<h1>Connecting People with Private Language Tutors</h1>
				</div>
				<div class="row subtitle">
					<div class="col-xs-4">
						<img src="{{ URL::asset('img/question.png') }}">
						<h1>What is TUTOR?</h1>
						<p>TUTOR is a marketplace connecting students with qualified tutors nearby. TUTOR benefits both students and tutors as students can now easily find a great tutor who matches their availabilities and location for private classes, while tutors can expand their businesses, staying organized and focused.</p>
					</div>
					<div class="col-xs-4">
						<img src="{{ URL::asset('img/wanted.png') }}">
						<h1>On Demand Tutors</h1>
						<p>Search and hire nearby language tutors now with TUTOR. Once you’ve selected the tutor you want to inquire about, we will contact you back on WhatsApp and introduce you to your preferred private native tutor so you can meet up!</p>
					</div>
					<div class="col-xs-4">
						<img src="{{ URL::asset('img/switch.png') }}">
						<h1>Become a Tutor?</h1>
						<p>With TUTOR, you choose your hours and the students pay you directly. We keep it simple, fast and free to help you find nearby students who match your availabilities. TUTOR has students and teachers in Hong Kong, Singapore, Sydney, Melbourne, Dubai, Taiwan and Cape Town. Contact us now!</p>
					</div>
				</div>
			</div>
			<div class="container-fluid testimonials">
				<div class="row title">
					<h1>Testimonials from our native tutors</h1>
				</div>
				<div id="testCarousel" class="carousel slide">
					<div class="carousel-inner">
						<div class="active item">
							<img src="{{ URL::asset('img/Malik.jpg') }}">
							<p class="carousel-para">“I am an experienced French tutor and have worked with TUTOR for nearly one year. TUTOR has been helping me to find students, each with different goals, levels and age. Thank you TUTOR!”</p>
							<p class="carousel-name">Malik</p>
							<p class="carousel-title">Native French Teacher</p>
						</div>
						<div class="item">
							<img src="{{ URL::asset('img/Libby.jpg') }}">
							<p class="carousel-para">“I am a native English speaker and TUTOR has been such a useful and easy way to connect with students. They do a wonderful job connecting you with students who best match your schedule had plenty of opportunities made aware quickly. I would strongly recommend them to those students looking to learn another language or to teach!”</p>
							<p class="carousel-name">Libby</p>
							<p class="carousel-title">Native English Teacher</p>
						</div>
						<div class="item">
							<img src="{{ URL::asset('img/Joe.jpg') }}">
							<p class="carousel-para">“TUTOR is a great organization that helps us English teachers find opportunities to practice our craft with quick and direct referrals, communication and assistance. I highly recommend you give TUTOR a shot and in no time you'll have a great group of students which are a pleasure to teach.”</p>
							<p class="carousel-name">Joe</p>
							<p class="carousel-title">Native English Teacher</p>
						</div>
					</div>
					<ol class="carousel-indicators">
						<li data-target="#testCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#testCarousel" data-slide-to="1"></li>
						<li data-target="#testCarousel" data-slide-to="2"></li>
					</ol>
					<a class="carousel-control left" href="#testCarousel" data-slide="prev">&lsaquo;</a>
					<a class="carousel-control right" href="#testCarousel" data-slide="next">&rsaquo;</a>
				</div> 
				<script>
				$(function(){
						$('#testCarousel').carousel({
						    interval: 100000
						});
					});
				</script>
			</div>
		</div>
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