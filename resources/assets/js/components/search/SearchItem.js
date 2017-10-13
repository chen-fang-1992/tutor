import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SearchItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="panel" data-toggle="modal" data-target={"#"+this.props.tutor.id}>
				<div className="row">
					<div className="col-xs-5 picture">
						<img src={this.props.tutor.picture}/>
					</div>
					<div className="col-xs-7">
						<div className="row name">
							<h1>{this.props.tutor.firstname} {this.props.tutor.lastname}</h1>
						</div>
						<div className="row info">
							<button className="btn btn-success">Teaches {this.props.tutor.language}</button>
						</div>
						<div className="row info">
							<button className="btn btn-warning">From {this.props.tutor.country}</button>
						</div>
						<div className="row info">
							<button className="btn btn-primary">Price {this.props.tutor.currency} {this.props.tutor.price}/Hour</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('search-item')) {
	ReactDOM.render(<SearchItem />, document.getElementById('search-item'));
}
