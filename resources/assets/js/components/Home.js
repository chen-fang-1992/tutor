import React from 'react'
import home_bg from '~/public/img/home_bg.jpeg'
import HomeSearchBar from './home/HomeSearchBar'
import HomeIntroBar from './home/HomeIntroBar'
import HomeTestimonials from './home/HomeTestimonials'

const Home = () => (
	<div className="content home">
		<div className="background" style={{backgroundImage:"url("+home_bg+")"}}></div>
		<HomeSearchBar />
		<HomeIntroBar />
		<HomeTestimonials />
	</div>
)

export default Home
