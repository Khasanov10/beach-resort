import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

class Rooms extends Component {
	render() {
		return (
			<>
				<Hero hero='roomsHero'>
					<Banner title='our rooms'>
						<Link to='/' className='btn-primary'>
							return home
						</Link>
					</Banner>
				</Hero>
				<RoomContainer />
			</>
		);
	}
}

export default Rooms;
