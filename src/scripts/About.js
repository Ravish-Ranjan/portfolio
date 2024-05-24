import { Marq } from "./Marqbar.js";
import someimg from "../media/prof.jpg";

const skills = [
	"c",
	"c++",
	"python",
	"java",
	"html",
	"css",
	"js",
	"php",
	"mysql",
];

export function About() {
	return (
		<div className="about" id="about">
			<Marq itemList={skills} direction="left" speed="slow" />
			<div className="marq-para oswald-font-300">
				<p>
					"A highly motivated computer science student with experience
					in many programming languages and web development. Eager to
					apply my skills and knowledge to contribute to the success
					of a well-regarded Organization.
				</p>
				<img src={someimg} alt="something"></img>
			</div>
			<Marq itemList={skills} direction="right" speed="slow" />
		</div>
	);
}
