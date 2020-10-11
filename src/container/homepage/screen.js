import React from "react";
import "../../components/app.scss"
import { Pagination, Card, Avatar, Skeleton, Row, Col  } from 'antd';
import getImagePath from '../../global/constant/config';
import { chunk, map } from 'lodash';
import TopNavBar from '../../components/topNavBar';

function ScreenHomePage(props) {
	const { Meta } = Card;
	const { listMovies , onClick, imagePokemon, onChangePage, loading, currentPage, setNavigation } = props;
	const { items } = listMovies;
	const newItems = chunk(items,48)[0];

	return (
		//   <div style={{marginTop: 50, marginBottom: 50}}>
		// 	<DropdownMenu
		// 		onClick={onClick}
		// 		listType={listType}
		// 		getAll={getAll}
		// 	/>
		<React.Fragment>
			<TopNavBar />
			<Row
				style={{padding: 50}}
			>
				{map(newItems, (data, idx) => {
					return(
						<Col key={`list-of-movies=${idx}`} md={4}>
							<Card
								// onClick={() => setNavigation(data.url)}
								loading={loading}
								size="small"
								style={{margin: 10}}
								hoverable={true}
								cover={
									<React.Fragment>
										{loading ? (
											<Skeleton.Image/>
										) : (
											<img
												alt="movies_poster"
												src={getImagePath(data.poster_path)}
											/>
										)}
									</React.Fragment>
								}
							>
								<Skeleton loading={loading} size="large" active paragraph={{ rows: 2 }}>
									<Meta
										style={{textAlign: 'left', display: 'flex', wordWrap: 'wrap' }}
										title={data.original_title}
										description={`${data.overview.substring(0,100)}...`}
									/>

								</Skeleton>
							</Card>
						</Col>
					)
				})}
			</Row>
			</React.Fragment>
		// </div>
	);
}

export default ScreenHomePage;
