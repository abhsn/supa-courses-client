import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

function Register() {

	const { signUp, setUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;
		const name = form.fullName.value;
		const url = form.photoURL.value;
		if (password === confirm) return;
		signUp(email, password)
			.then(result => {
				setUser(result.user);
				updateUserProfile(name, url)
					.then(() => {
						// needs to create a new object without reference since react thinks we are assigning same value to setUser which causes no render. simply by doing this, header shows image after registering
						const newUserObj = { ...result.user };
						setUser(newUserObj);
					})
					.catch(err => console.error(err));
			})
			.catch(err => console.error(err));

	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-8 p-6 w-1/2 mx-auto" >
			<h3 className="text-center text-4xl">Register</h3>
			<div className="grid w-1/2 mx-auto gap-4">
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full max-w-xs" required />
				</div>

				<div>
					<label htmlFor="fullName">Full Name</label>
					<input id="fullName" type="text" placeholder="Full Name" name="fullName" className="input input-bordered input-info w-full max-w-xs" required />
				</div>

				<div>
					<label htmlFor="photoURL">Photo URL</label>
					<input id="photoURL" type="url" placeholder="http://example.com" name="photoURL" className="input input-bordered input-info w-full max-w-xs" required />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" placeholder="Password" name="password" className="input input-bordered input-info w-full max-w-xs" required />
				</div>

				<div>
					<label htmlFor="confirm">Confirm Password</label>
					<input id="confirm" type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered input-info w-full max-w-xs" required />
				</div>
				<button className="btn">Register</button>
			</div>
			<span className="text-center"><small>Already have an account? <Link to='/login' className="btn-link">Login here</Link>.</small></span>
		</form>
	);
}

export default Register;