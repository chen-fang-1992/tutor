import React from 'react'
import PropTypes from 'prop-types'

const SearchItem = ({ tutor }) => (
	<div className="panel" data-toggle="modal" data-target={`#${tutor.id}`}>
		<div className="row">
			<div className="col-xs-5 picture">
				<img src={tutor.picture} />
			</div>
			<div className="col-xs-7">
				<div className="row name">
					<h1>{tutor.firstname} {tutor.lastname}</h1>
				</div>
				<div className="row info">
					<button className="btn btn-success">Teaches {tutor.language}</button>
				</div>
				<div className="row info">
					<button className="btn btn-warning">From {tutor.country}</button>
				</div>
				<div className="row info">
					<button className="btn btn-primary">Price {tutor.currency} {tutor.price}/Hour</button>
				</div>
			</div>
		</div>
	</div>
)

SearchItem.propTypes = {
	tutor: PropTypes.shape({
		id: PropTypes.number.isRequired,
		picture: PropTypes.string.isRequired,
		firstname: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
		language: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
}

export default SearchItem
