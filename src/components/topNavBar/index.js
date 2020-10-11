import React from 'react';
import "../app.scss";
import logoImage from "../../assets/images/image005.png"

export default function TopNavBar(props) {
	return(
		<div className="menuBox">
			<div>
				<img src={logoImage} />
				<div className="titleLogo">Entertainment</div>
			</div>
		</div>
	)
}