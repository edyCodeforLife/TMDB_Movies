import React from "react";
import "../../components/app.scss"
import { Rate, Card, Row, Col, Statistic, Avatar, Descriptions } from 'antd';
import { getImagePath } from '../../global/constant/config';
import { chunk, map } from 'lodash';
import TopNavBar from '../../components/topNavBar';
import BottomBar from '../../components/bottomBar';
import { LikeFilled } from '@ant-design/icons';
import { convertMinsToHrsMins, getInitials, isMobile } from '../../global/function/index';

function ScreenHomePage(props) {
	const { Meta } = Card;
	const { detailMovie, redirectLink, reviewMovie } = props;
	const releaseYear = new Date(detailMovie.release_date).getFullYear();

	return (
		<React.Fragment>
			<TopNavBar
				isDetail={true}
			/>
				<Row
					style={{padding: 50, width: '100%', backgroundColor: "#3E2631" }}
				>
					<Col md={12} xs={24} style={{textAlign: isMobile() ? 'center' : 'left'}}>
						<img
							width={isMobile() ? 250 : 550}
							height={isMobile() ? 400 :700}
							style={{borderRadius: 20, boxShadow: "4px 6px 18px #ccc" }}
							src={getImagePath(detailMovie.poster_path)}
						/>
					</Col>
					<Col md={12} xs={24}>
						<Row style={{textAlign: 'left', width: '100%', marginTop: 20}}>
							<Col md={24} xs={24}>
								<h1 style={{color: "wheat"}}>{`${detailMovie.original_title} (${releaseYear})`}</h1>
								<p style={{color: "orange", marginTop: -18}}>{detailMovie.tagline}</p>
							</Col>

							<Col md={24} xs={24}>
								<Rate disabled allowHalf value={Math.floor(detailMovie.vote_average/2)} />
								<sup style={{marginLeft: 10, color: 'white'}}>{detailMovie.vote_count}</sup>
								<sup style={{marginLeft: 3, color: 'orange'}}>Vote</sup>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 14}}>
								<h4 style={{color: "white"}}
									dangerouslySetInnerHTML= {{__html:
										`Genre:
										<span style="color:wheat">${map(detailMovie.genres, o => o.name).join(", ")}</span>`
									}}
								/>
							</Col>

							<Col md={24} xs={24}>
								<h4 style={{color: "white"}}
									  dangerouslySetInnerHTML=
										{{__html:
											`Playtime:
											<span style="color:wheat">${convertMinsToHrsMins(detailMovie.runtime)}</span>`
										}}
								/>
							</Col>

							<Col md={24} xs={24}>
								<h4 style={{color: "white"}}
									dangerouslySetInnerHTML=
									{{__html:
										`Production Company:
										<span style="color:wheat">${map(detailMovie.production_companies, o => `${o.name} (${o.origin_country})`).join(", ")}</span>`
									}}
								/>
							</Col>

							<Col md={24} xs={24}>
								<span style={{color: "white", fontWeight: 500}}>{"Homepage: "}</span>
								<span onClick={() => redirectLink(detailMovie.homepage)} style={{color: "wheat", cursor: 'pointer'}}>
									{detailMovie.homepage}
								</span>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 7}}>
								<span style={{color: "white", fontWeight: 500}}>{"Language: "}</span>
								<span style={{color: "wheat", fontWeight: 500}}>{map(detailMovie.spoken_languages, o => o.name).join(", ")}</span>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 7}}>
								<h4 style={{color: "white"}}
									dangerouslySetInnerHTML=
									{{__html:
									`Production Countries:
									<span style="color:wheat">${map(detailMovie.production_countries, o => `${o.name}`).join(", ")}</span>`
									}}
								/>
							</Col>

							<Col md={24} xs={24}>
								<h4 style={{color: "white"}}
									dangerouslySetInnerHTML=
									{{__html:
									`Release Date:
									<span style="color:wheat">${detailMovie.release_date}</span>`
									}}
								/>
							</Col>

							<Col md={24} xs={24}>
								<span style={{color: "white", marginRight: 5, fontWeight: 500}}
									dangerouslySetInnerHTML=
									{{__html: `Popularity: <span style="color:wheat"> ${detailMovie.popularity}</span>`}}
								/>
								<LikeFilled style={{fontSize: 20, color: "orange" }}/>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 7, display: 'inline-flex'}}>
								<span style={{color: "white", fontWeight: 500}}>{"Budget: "}</span>
								<Statistic
									valueStyle={{
										fontSize: 14,
										fontWeight: 500,
										color: 'wheat',
										position: 'relative',
										top: 0,
										marginLeft: 5
									}}
									prefix={"$"}
									value={detailMovie.budget}
								/>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 7, display: 'inline-flex'}}>
								<span style={{color: "white", fontWeight: 500}}>{"Revenue: "}</span>
								<Statistic
									valueStyle={{
										fontSize: 14,
										fontWeight: 500,
										color: 'wheat',
										position: 'relative',
										top: 0,
										marginLeft: 5
									}}
									prefix={"$"}
									value={detailMovie.revenue}
								/>
							</Col>

							<Col md={24} xs={24} style={{marginTop: 7}}>
								<h2 style={{color: "white"}}>Overview:</h2>
								<p style={{color: "wheat"}}>{detailMovie.overview}</p>
							</Col>

						</Row>
					</Col>

					<Col md={24} xs={24} style={{textAlign: 'left', marginTop: 40,}}>
						<h1 style={{color: "wheat"}}>Review Section</h1>
					</Col>

					<Row
						style={{
							width: '100%',
							padding: 30,
							textAlign: "left",
							backgroundColor: "white",
							borderRadius: 8,
							border: '4px solid orange',
							// boxShadow: "3px 4px 10px #ccc",
							// height: "100vh",
							// maxHeight: '100vh',
							// overflowY: 'scroll',
						}}>

						{reviewMovie && reviewMovie.results && map(reviewMovie.results, o => (
							<Col md={24} xs={24}
								style={{
									margin: "10px 0px",
									backgroundColor: "white",
									width: "100%",
									height: "auto",
									padding: 20,
									borderRadius: 15,
									border: '4px solid #4DBBE6',
									boxShadow: "3px 4px 10px #ccc"
								}}>
								<Avatar
									style={{
										backgroundColor: "orange",
										color: "wheat"
									}}
									size={40}>
									{getInitials(o.author)}
								</Avatar>
								<span
									style={{
										fontSize: 18,
										marginLeft: 10,
										fontWeight: 500,
										color: "orange"
									}}
								>
									{o.author}
								</span>
								<Col md={24} xs={24}
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										marginLeft: 50,
										lineHeight: 1.6
									}}
								>
									<p
										dangerouslySetInnerHTML=
										{{__html:
											o.content
										}}
								/>
								</Col>
							</Col>
						))}

					</Row>
				</Row>
			<BottomBar />
		</React.Fragment>
	);
}

export default ScreenHomePage;
