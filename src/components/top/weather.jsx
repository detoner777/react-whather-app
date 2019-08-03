import React from 'react';

import Sun from "../../resources/icons/sun.png"

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="weather-container">
			<div className="header">Location Name</div>
			<div className="inner-container">
				<div className='image'><img src={Sun} alt="" /></div>
				<div className="current-weather">10</div>
			</div>
			<div className="footer">Sunny</div>

		</div>
	}
}