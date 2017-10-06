import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import home_bg from '../../../../public/img/home_bg.jpeg';
import question from '../../../../public/img/question.png';
import wanted from '../../../../public/img/wanted.png';
import become from '../../../../public/img/become.png';
import Malik from '../../../../public/img/Malik.jpg';
import Libby from '../../../../public/img/Libby.jpg';
import Joe from '../../../../public/img/Joe.jpg';

export default class Home extends Component {
	render() {
		return (
			<div className="content home">
				<div className="background" style={{backgroundImage:"url("+home_bg+")"}}></div>
				<div className="container search-bar">
					<h1>Find A Native Language Tutor Near You</h1>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<div className="col-xs-3">
								<div className="dropdown">
									<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
										<span className="placeholder">English</span>
										<span className="caret"></span>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li value="0"><a className="btn btn-link">English</a></li>
										<li value="1"><a className="btn btn-link">Chinese</a></li>
										<li value="2"><a className="btn btn-link">French</a></li>
										<li value="3"><a className="btn btn-link">Germany</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-3">
								<div className="dropdown">
									<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
										<span className="placeholder">When?</span>
										<span className="caret"></span>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li value="0"><a className="btn btn-link">Monday</a></li>
										<li value="1"><a className="btn btn-link">Tuesday</a></li>
										<li value="2"><a className="btn btn-link">Wednesday</a></li>
										<li value="3"><a className="btn btn-link">Thursday</a></li>
										<li value="4"><a className="btn btn-link">Friday</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-3">
								<div className="dropdown">
									<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
										<span className="placeholder">Price</span>
										<span className="caret"></span>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li value="0"><a className="btn btn-link">Price</a></li>
										<li value="1"><a className="btn btn-link">Rating</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-3">
								<button type="button" className="btn btn-success">Search</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container us-bar">
					<div className="row title">
						<h1>Connecting People with Private Language Tutors</h1>
					</div>
					<div className="row subtitle">
						<div className="col-xs-4">
							<img src={question}/>
							<h1>What is TUTOR?</h1>
							<p>TUTOR is a marketplace connecting students with qualified tutors nearby. TUTOR benefits both students and tutors as students can now easily find a great tutor who matches their availabilities and location for private classNamees, while tutors can expand their businesses, staying organized and focused.</p>
						</div>
						<div className="col-xs-4">
							<img src={wanted}/>
							<h1>On Demand Tutors</h1>
							<p>Search and hire nearby language tutors now with TUTOR. Once you’ve selected the tutor you want to inquire about, we will contact you back on WhatsApp and introduce you to your preferred private native tutor so you can meet up!</p>
						</div>
						<div className="col-xs-4">
							<img src={become}/>
							<h1>Become a Tutor?</h1>
							<p>With TUTOR, you choose your hours and the students pay you directly. We keep it simple, fast and free to help you find nearby students who match your availabilities. TUTOR has students and teachers in Hong Kong, Singapore, Sydney, Melbourne, Dubai, Taiwan and Cape Town. Contact us now!</p>
						</div>
					</div>
				</div>
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
			</div>
		);
	}
}

if (document.getElementById('home')) {
	ReactDOM.render(<Home />, document.getElementById('home'));
}
