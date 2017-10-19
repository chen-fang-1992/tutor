import React from 'react'
import HomeSearchBar from './home/HomeSearchBar'
import HomeIntroBar from './home/HomeIntroBar'
import HomeTestimonials from './home/HomeTestimonials'

let home_bg  = '/img/home_bg.jpeg'

const Home = () => (
	<div className="content home">
		<div className="background" style={{backgroundImage:"url("+home_bg+")"}}></div>
		<HomeSearchBar />
		<HomeIntroBar />
		<HomeTestimonials />
	</div>
)

export default Home
