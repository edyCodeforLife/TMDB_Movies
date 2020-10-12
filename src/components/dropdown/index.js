import React from "react";
import "../app.scss";
import {  Menu, Dropdown, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';


function DropdownMenu(props) {
	const { onClick, getAll, listType } = props;

	const menu = (
			<Menu>
				<Menu.Item onClick={() => getAll()} key={0}>ALL</Menu.Item>
				{listType && listType.map((item,idx) => {
					return(
					<Menu.Item onClick={() => onClick(item)} key={idx+1}>{item}</Menu.Item>
					)
				})}
			</Menu>
  );

  return (
    <Dropdown overlay={menu}>
		<Button style={{width: 300, display: 'flex', justifyContent: 'space-between'}} onClick={e => e.preventDefault()}>
			Filter Movies by
			<FilterOutlined style={{fontSize: 20}} />
		</Button>
    </Dropdown>
  );
}
export default React.forwardRef(DropdownMenu);
