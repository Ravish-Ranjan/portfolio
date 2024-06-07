import loading from "../media/loading.gif";
export function Img({ href, src, info, desc }) {
	return (
		<a href={href} className="box">
			<img
				className="gal-img"
				src={loading && src}
				alt={"mountains"}
				loading="lazy"
			></img>
			<div style={{ display: "grid" }}>
				<span className="title oswald-font">{info}</span>
				<span className="description">{desc}</span>
			</div>
		</a>
	);
}
