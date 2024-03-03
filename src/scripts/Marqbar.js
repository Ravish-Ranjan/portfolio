import "../styles/Marqbar.css";
import React, { Component } from 'react';

class Marqbar extends Component{
	static defaultProps = {
		itemList:[""]
	}
    constructor(props){
        super(props);
        this.state = {
            prefersReducedMotion : !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        };
    }
    componentDidMount() {
        const mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)");
        mediaQueryList.addEventListener("change", () => {
            this.setState({ prefersReducedMotion: !mediaQueryList.matches });
        });
    }
    render(){
        const listrender = this.props.itemList.map((val,i) => <span key={i} className="marq-bit">{val}</span>);
        return(
            <div className="marq-bar-outer inline-shadow" 
                data-anim-direc={this.props.direction}
                data-anim-speed={this.props.speed}
            >
                <div className="marq-bar oswald-font">
                    {listrender}
                    {this.state.prefersReducedMotion && listrender} 
                    {this.state.prefersReducedMotion && listrender} 
                </div>
            </div>
        )
    }
}

export default Marqbar;
