import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Login() {
	const [error, setError] = useState('');
	const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	const form = e.target;
	// 	const email = form.email.value;
	// 	const password = form.password.value;
	// 	signIn(email, password)
	// 		.then(result => {
	// 			setUser(result.user);
	// 			navigate(from, { replace: true });
	// 		})
	// 		.catch(err => console.error(err));
	// }

	const logIn = () => {
		setError('');
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		signIn(email, password)
			.then(() => {
				// no need since onAuthStateChange is running
				// setUser(result.user);
				navigate(from, { replace: true });
			})
			.catch(err => setError(err.message));
	}

	const logInWithGoogle = () => {
		setError('');
		googleSignIn()
			.then(() => navigate(from, { replace: true }))
			.catch(err => setError(err.message));
	}

	const logInWithGithub = () => {
		setError('');
		githubSignIn()
			.then(() => navigate(from, { replace: true }))
			.catch(err => setError(err.message));
	}

	return (
		<form onSubmit={(e) => e.preventDefault()} className="grid gap-8 p-6 w-full mx-auto">
			<h3 className="text-center text-4xl">Login</h3>
			<div className="grid mx-auto gap-4">
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" placeholder="Password" name="password" className="input input-bordered input-info w-full" />
				</div>
				{
					error ? <span className="text-xs text-red-500 text-center">{error}</span> : ''
				}
				<button onClick={logIn} className="btn">Login</button>

				<p className="text-center">or</p>

				<button onClick={logInWithGoogle} className="btn btn-outline"><span className="text-3xl mr-2"><FcGoogle /></span>Login with Google</button>

				<button onClick={logInWithGithub} className="btn btn-outline"><span className="text-3xl mr-2"><FaGithub /></span>Login with GitHub</button>
			</div>
			<span className="text-center"><small>Don't have an account? <Link to='/register' className="btn-link">Register here</Link>.</small></span>
		</form>
	);
}

export default Login;