import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

function Home() {
	return (
		<div className='home page-block' id="home">
			<div className='homecover'>
				<h1 className='title oswald-font'>Hi,Ravish here</h1>
				<p className='para'>
					Seeking challenging and reputed career opportunities in web development, specifically in front-end development. where I can apply my skills and knowledge to develop and captivating user interfaces.
				</p>
				<p className='bio oswald-font'>
					<span>lorem</span>
					<span>lorem</span>
					<span>lorem</span>
					<span>lorem</span>
				</p>
				<a href="#work" className='btn btn-outline-secondary btn-md'>See Work</a>
			</div>
		</div>
	)
}
export default Home;