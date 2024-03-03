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

let imgs = [
	{src:pro1,info:"Otp Recivever"},
	{src:pro2,info:"Login Form"},
	{src:pro3,info:"Calender"},
	{src:pro4,info:"qrcode maker"},
	{src:pro5,info:"Control Panel"},
	{src:pro6,info:"Marqee Bar"},
	{src:pro7,info:"Music PLayer"},
	{src:pro8,info:"Link Shortner"},
	{src:pro9,info:"Note making app"},
	{src:pro10,info:"Weather app"},
	{src:pro11,info:"Fluke : movie streaming app"},
]

function Work() {
	return (
		<div className="" id="work">
			<span className="block-title oswald-font-300"><span>Projects</span></span>
			<div className="gallery">
				{
					imgs.map((val,i) => {
						return <Imgblk1 clas {...val} key={i}/>
					})
				}
			</div>
			<span className="block-title"></span>
		</div>
	);
}
export default Work;
