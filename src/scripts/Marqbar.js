import "../styles/Marqbar.css";
import { useEffect, useState } from "react";

export function Marq({ itemList, direction, speed }) {
	const [prefersMotion, setPreferense] = useState(
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches
	);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);
		mediaQueryList.addEventListener("change", () => {
			setPreferense(!mediaQueryList.matches);
		});
	}, [prefersMotion]);

	const listrender = itemList.map((val, i) => (
		<span key={i} className="marq-bit">
			{val}
		</span>
	));

	return (
		<div
			className="marq-bar-outer inline-shadow"
			data-anim-direc={direction}
			data-anim-speed={speed}
		>
			<div className="marq-bar oswald-font">
				{listrender}
				{prefersMotion && listrender}
				{prefersMotion && listrender}
			</div>
		</div>
	);
}
