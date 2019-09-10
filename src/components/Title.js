import React, { Component } from "react";

export class Title extends Component {
	render() {
		return (
			<div>
				<div className='section-title'>
					<h4>{this.props.title}</h4>
				</div>
			</div>
		);
	}
}

export default Title;
