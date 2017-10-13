import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SearchModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="modal fade" id={this.props.tutor.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row">
								<div className="col-xs-5 picture">
									<img src={this.props.tutor.picture}/>
								</div>
								<div className="col-xs-6 info">
									<h1 className="modal-title">{this.props.tutor.firstname} {this.props.tutor.lastname}</h1>
									<div className="modal-info-key">
										<span>Teaches</span>
									</div>
									<div className="modal-info-value">
										<span>{this.props.tutor.language}</span>
									</div>
									<div className="modal-info-key">
										<span>From</span>
									</div>
									<div className="modal-info-value">
										<span>{this.props.tutor.country}</span>
									</div>
									<div className="modal-info-key">
										<span>Price</span>
										<button className="btn btn-primary inquire">Inquire Now</button>
									</div>
									<div className="modal-info-value">
										<span>{this.props.tutor.currency} {this.props.tutor.price}/Hour</span>
									</div>
								</div>
								<div className="col-xs-1">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								</div>
							</div>
							<div className="row availability">
								<div className={"col-xs-3"+(this.props.tutor.availability%2===1?" avail":"")}>
									<span>{this.props.tutor.availability%2===1?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Mornings</span>
								</div>
								<div className={"col-xs-3"+(this.props.tutor.availability%4>=2?" avail":"")}>
									<span>{this.props.tutor.availability%4>=2?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Afternoons</span>
								</div>
								<div className={"col-xs-3"+(this.props.tutor.availability%8>=4?" avail":"")}>
									<span>{this.props.tutor.availability%8>=4?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Evenings</span>
								</div>
								<div className={"col-xs-3"+(this.props.tutor.availability%16>=8?" avail":"")}>
									<span>{this.props.tutor.availability%16>=8?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-ban" aria-hidden="true"></i>}Weekends</span>
								</div>
							</div>
							<div className="row about">
								<div className="col-xs-12">
									<p>{this.props.tutor.about}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('search-modal')) {
	ReactDOM.render(<SearchModal />, document.getElementById('search-modal'));
}
