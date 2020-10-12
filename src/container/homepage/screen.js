import React from "react";
import "../../components/app.scss"
import { Pagination, Card, Skeleton, Row, Col  } from 'antd';
import { getImagePath } from '../../global/constant/config';
import { chunk, map } from 'lodash';
import TopNavBar from '../../components/topNavBar';
import BottomBar from '../../components/bottomBar';

function ScreenHomePage(props) {
	const { Meta } = Card;
	const { listMovies , onSelectedFilter, getAll, listType, onHandleSearch, onChangePage, loading, currentPage, setNavigation } = props;
	// const { items } = listMovies;
	const newItems = chunk(listMovies,48)[0];
	return (
		<React.Fragment>
			<TopNavBar
				isDetail={false}
				onClick={onSelectedFilter}
				listType={listType}
				getAll={getAll}
				onHandleSearch={onHandleSearch}
			/>
			<Row
				style={{padding: 50}}
			>
				{map(newItems, (data, idx) => {
					return(
						<Col key={`list-of-movies=${idx}`} md={4}>
							<Card
								onClick={() => setNavigation(data.id)}
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
			<Pagination
				style={{marginBottom: 70}}
				defaultCurrent={1}
				simple
				current={currentPage}
				onChange={onChangePage}
				total={100}
			/>
			<BottomBar />
		</React.Fragment>
	);
}

export default ScreenHomePage;
