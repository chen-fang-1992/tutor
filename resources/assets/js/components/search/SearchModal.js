import React from 'react'
import PropTypes from 'prop-types'

const SearchModal = ({ tutor }) => (
	<div className="modal fade" id={tutor.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-body">
					<div className="row">
						<div className="col-xs-5 picture">
							<img src={tutor.picture} />
						</div>
						<div className="col-xs-6 info">
							<h1 className="modal-title">{tutor.firstname} {tutor.lastname}</h1>
							<div className="modal-info-key">
								<span>Teaches</span>
							</div>
							<div className="modal-info-value">
								<span>{tutor.language}</span>
							</div>
							<div className="modal-info-key">
								<span>From</span>
							</div>
							<div className="modal-info-value">
								<span>{tutor.country}</span>
							</div>
							<div className="modal-info-key">
								<span>Price</span>
								<button className="btn btn-primary inquire">Inquire Now</button>
							</div>
							<div className="modal-info-value">
								<span>{tutor.currency} {tutor.price}/Hour</span>
							</div>
						</div>
						<div className="col-xs-1">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
					</div>
					<div className="row availability">
						<div className={"col-xs-3"+(tutor.availability%2===1?" avail":"")}>
							<span>{tutor.availability%2===1?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Mornings</span>
						</div>
						<div className={"col-xs-3"+(tutor.availability%4>=2?" avail":"")}>
							<span>{tutor.availability%4>=2?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Afternoons</span>
						</div>
						<div className={"col-xs-3"+(tutor.availability%8>=4?" avail":"")}>
							<span>{tutor.availability%8>=4?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Evenings</span>
						</div>
						<div className={"col-xs-3"+(tutor.availability%16>=8?" avail":"")}>
							<span>{tutor.availability%16>=8?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Weekends</span>
						</div>
					</div>
					<div className="row about">
						<div className="col-xs-12">
							<p>{tutor.about}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

SearchModal.propTypes = {
	tutor: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		picture: PropTypes.string.isRequired,
		firstname: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
		language: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		availability: PropTypes.number.isRequired,
		about: PropTypes.string.isRequired
	})).isRequired
}

export default SearchModal
