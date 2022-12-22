import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="hero z-0">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622955725643.png" className="max-w-sm" alt='Human sitting on a chair' />
				<div>
					<h1 className="text-5xl font-bold">Learn easily, effectively from anywhere, anytime!</h1>
					<p className="py-6">Get started with our courses with top instructor in the world. You don't have to worry about getting stucked. We will be there for you. You will get lifetime access to all purchased coure.</p>
					<Link to="/courses" className="btn btn-primary">Get Started</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;