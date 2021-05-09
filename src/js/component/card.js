import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-md-3 m-auto">
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageURL}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardDescription}</p>
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	imageURL: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
