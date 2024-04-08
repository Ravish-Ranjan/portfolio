import Imgblk1 from "./Imgblk";
import pro1 from "../media/pro1.png";
import pro2 from "../media/pro2.png";
import pro3 from "../media/pro3.png";
import pro4 from "../media/pro4.png";
import pro5 from "../media/pro5.png";
import pro6 from "../media/pro6.png";
import pro7 from "../media/pro7.png";
import pro8 from "../media/vid1.gif";
import pro9 from "../media/todo.gif";
import pro10 from "../media/weather.gif";
import pro11 from "../media/fluke.png";
import pro12 from "../media/quotes.png";
import pro13 from "../media/mdpreview.png";

let imgs = [
	{src:pro13,info:"Markdown Previewer",href:"https://ravish-ranjan.github.io/markdown-previewer/"},
	{src:pro12,info:"Random Quotes Generator",href:"https://ravish-ranjan.github.io/quotes/"},
	{src:pro11,info:"Fluke : movie streaming app",href:""},
	{src:pro4,info:"qrcode maker",href:""},
	{src:pro9,info:"Note making app",href:""},
	{src:pro7,info:"Music PLayer",href:""},
	{src:pro1,info:"Otp Recivever",href:""},
	{src:pro2,info:"Login Form",href:""},
	{src:pro3,info:"Calender",href:""},
	{src:pro5,info:"Control Panel",href:""},
	{src:pro6,info:"Marqee Bar",href:""},
	{src:pro8,info:"Link Shortner",href:""},
	{src:pro10,info:"Weather app",href:""},
]

function Work() {
	return (
		<div className="" id="work">
			<span className="block-title oswald-font-300"><span>Projects</span></span>
			<div className="gallery">
				{
					imgs.map((val,i) => {
						return <Imgblk1 {...val} key={i}/>
					})
				}
			</div>
			<span className="block-title"></span>
		</div>
	);
}
export default Work;
