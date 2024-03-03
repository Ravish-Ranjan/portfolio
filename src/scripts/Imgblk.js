import React, { Component } from "react";

class Imgblk1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: "https://source.unsplash.com/random/300x400?Mountains",
			alt: "mountains",
		};
	}
	render() {
		return (
			<div>
				<img
					className="gal-img"
					src={this.state.src && this.props.src}
					alt={this.state.alt}
					loading="lazy"
				></img>
				<span className="gal-title oswald-font">{this.props.info}</span>
			</div>
		);
	}
}

export default Imgblk1;
