import { Link } from "react-router-dom";

function Login() {
	return (
		<form className="grid place-content-center gap-8 p-6 w-1/2 mx-auto">
			<h3 className="text-center text-4xl">Login</h3>
			<div className="grid place-content-center gap-4">
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full max-w-xs" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" placeholder="Password" name="password" className="input input-bordered input-info w-full max-w-xs" />
				</div>
				<button className="btn glass">Login</button>
			</div>
			<span className="text-center"><small>Don't have an account? <Link to='/register' className="btn-link">Register here</Link>.</small></span>
		</form>
	);
}

export default Login;