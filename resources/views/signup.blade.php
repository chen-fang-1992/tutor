@extends('layouts.layout')

@section('content')
<div class="content background">
	<div class="container">
		<div class="row">
			<div class="col-xs-8">
				<h1>Become A Part Time Private Tutor Now</h1>
				<p>Do you want to become a private language tutor in your city and be paid to discuss with people in your native language? No qualifications nor certifications are needed as long as you are a native speaker in the language you feel confident to share and teach!</p>
				<p>Please fill up this form and we will get back to you through WhatsApp within 7 working days to get you started with TUTOR:</p>
				<div class="form col-xs-8">
					<form role="form">
						<label for="name">What’s your name?</label>
						<div class="form-group">
							<input type="text" class="form-control" id="name" placeholder="">
						</div>
						<label for="email">What’s your email?</label>
						<div class="form-group">
							<input type="text" class="form-control" id="email" placeholder="">
						</div>
						<label for="password">Password</label>
						<div class="form-group">
							<input type="text" class="form-control" id="password" placeholder="">
						</div>
						<label for="repeat-password">Repeat password</label>
						<div class="form-group">
							<input type="text" class="form-control" id="repeat-password" placeholder="">
						</div>
						<div class="form-group">
							<input type="checkbox"><span> I accept the Terms and Conditions</span>
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-primary">SUBMIT YOUR PROFILE NOW</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection