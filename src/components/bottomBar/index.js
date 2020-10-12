import React from 'react';
import "../app.scss";
import { Input } from 'antd';
import { isMobile } from '../../global/function';

export default function BottomBar(props) {
	const year = (new Date()).getFullYear();
	return(
		<div style={{position: 'relative', bottom: 0, justifyContent: 'center'}} className="menuBox">
			<span style={{color: '#999'}}>Copyright © {year}</span>
			<span style={{color: '#F0822F', padding: '0 5px', fontWeight: 700 }}>Edy Susanto</span>
			<span style={{color: '#999'}}>All Rights reserved.</span>
		</div>
	)
}