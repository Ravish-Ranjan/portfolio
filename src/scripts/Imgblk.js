import loading from "../media/loading.gif";

export function Img({ href, src, info }) {
	return (
		<a href={href} >
			<img
				className="gal-img"
				src={loading && src}
				alt={"mountains"}
				loading="lazy"
			></img>
			<span className="gal-title oswald-font">{info}</span>
		</a>
	);
}
