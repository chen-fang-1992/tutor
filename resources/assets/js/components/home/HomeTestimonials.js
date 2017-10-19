import React from 'react'

let Malik = '/img/Malik.jpg'
let Libby = '/img/Libby.jpg'
let Joe = '/img/Joe.jpg'

const HomeTestimonials = () => (
	<div className="container-fluid testimonials">
		<div className="row title">
			<h1>Testimonials from our native tutors</h1>
		</div>
		<div id="testCarousel" className="carousel slide">
			<div className="carousel-inner">
				<div className="active item">
					<img src={Malik}/>
					<p className="carousel-para">“I am an experienced French tutor and have worked with TUTOR for nearly one year. TUTOR has been helping me to find students, each with different goals, levels and age. Thank you TUTOR!”</p>
					<p className="carousel-name">Malik</p>
					<p className="carousel-title">Native French Teacher</p>
				</div>
				<div className="item">
					<img src={Libby}/>
					<p className="carousel-para">“I am a native English speaker and TUTOR has been such a useful and easy way to connect with students. They do a wonderful job connecting you with students who best match your schedule had plenty of opportunities made aware quickly. I would strongly recommend them to those students looking to learn another language or to teach!”</p>
					<p className="carousel-name">Libby</p>
					<p className="carousel-title">Native English Teacher</p>
				</div>
				<div className="item">
					<img src={Joe}/>
					<p className="carousel-para">“TUTOR is a great organization that helps us English teachers find opportunities to practice our craft with quick and direct referrals, communication and assistance. I highly recommend you give TUTOR a shot and in no time you'll have a great group of students which are a pleasure to teach.”</p>
					<p className="carousel-name">Joe</p>
					<p className="carousel-title">Native English Teacher</p>
				</div>
			</div>
			<ol className="carousel-indicators">
				<li data-target="#testCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#testCarousel" data-slide-to="1"></li>
				<li data-target="#testCarousel" data-slide-to="2"></li>
			</ol>
			<a className="carousel-control left" href="#testCarousel" data-slide="prev">&lsaquo;</a>
			<a className="carousel-control right" href="#testCarousel" data-slide="next">&rsaquo;</a>
		</div>
	</div>
) 

export default HomeTestimonials
