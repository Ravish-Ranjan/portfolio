import React, { Component } from "react";
import loading from "../media/loading.gif"

class Imgblk1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: loading,
			alt: "mountains",
		};
	}
	render() {
		return (
			<a href={this.props.href}>
				<img
					className="gal-img"
					src={this.state.src && this.props.src}
					alt={this.state.alt}
					loading="lazy"
				></img>
				<span className="gal-title oswald-font">{this.props.info}</span>
			</a>
		);
	}
}

export default Imgblk1;
