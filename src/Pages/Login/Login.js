import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

function Login() {

	const { signIn, setUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signIn(email, password)
			.then(result => {
				setUser(result.user);
				navigate(from, { replace: true });
			})
			.catch(err => console.error(err));
	}

	return (
		<form onSubmit={handleSubmit} className="grid place-content-center gap-8 p-6 w-1/2 mx-auto">
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