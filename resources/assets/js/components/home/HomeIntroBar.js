import React from 'react'
import question from '~/public/img/question.png'
import wanted from '~/public/img/wanted.png'
import become from '~/public/img/become.png'

const HomeIntroBar = () => (
	<div className="container intro-bar">
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
)

export default HomeIntroBar
