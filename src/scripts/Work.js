import { Img } from "./Imgblk";
import information from "../assets/projects.json";
import Images from "./ImgExport";

export function Work() {
	return (
		<div className="" id="work">
			<span className="block-title oswald-font-300">
				<span>Projects</span>
			</span>
			<div className="gallery">
				{information.map((val, i) => {
					return <Img src={Images[i]} {...val} key={i} />;
				})}
			</div>
			<span className="block-title"></span>
		</div>
	);
}