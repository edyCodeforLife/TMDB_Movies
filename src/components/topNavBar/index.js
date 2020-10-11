import React from 'react';
import "../app.scss";
import logoImage from "../../assets/images/image005.png"
import { Input } from 'antd';
import { isMobile } from '../../global/function';

export default function TopNavBar(props) {
	const { Search } = Input;
	const { onHandleSearch } = props;
	return(
		<div className="menuBox">
			<div>
				<img className="imageSize" src={logoImage} />
				<div className="titleLogo">Entertainment</div>
			</div>

			<div>
			<Search
				placeholder="search your movies"
				enterButton
				size={isMobile() ? "small" : "middle"}
				onChange={(e) => {onHandleSearch(e)}}
				style={{ width: isMobile() ? 130 : 400 }}
				/>
			</div>
		</div>
	)
}