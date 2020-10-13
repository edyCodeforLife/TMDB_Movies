import React from 'react';
import "../app.scss";

export default function BottomBar(props) {
	const year = (new Date()).getFullYear();
	return(
		<div className="menuFooter">
			<span style={{color: '#999'}}>Copyright © {year}</span>
			<span style={{color: '#F0822F', padding: '0 5px', fontWeight: 700 }}>Edy Susanto</span>
			<span style={{color: '#999'}}>All Rights reserved.</span>
		</div>
	)
}