import React from 'react';
import "../app.scss";
import logoImage from "../../assets/images/image005.png"
import { Input } from 'antd';
import { isMobile } from '../../global/function';
import DropdownMenu from '../dropdown/index';

export default function TopNavBar(props) {
	const { Search } = Input;
	const { onHandleSearch, onClick, listType, getAll } = props;
	return(
		<div className="menuBox">
			<div>
				<img className="imageSize" src={logoImage} />
				<div className="titleLogo">Entertainment</div>
			</div>

			<div className="containerFilterAndSearch">
				<DropdownMenu
					onClick={onClick}
					listType={listType}
					getAll={getAll}
				/>
				<Search
					placeholder="search your movies"
					enterButton
					size={isMobile() ? "small" : "middle"}
					onChange={(e) => {onHandleSearch(e)}}
					style={{ width: isMobile() ? 130 : 450 }}
				/>
			</div>
		</div>
	)
}