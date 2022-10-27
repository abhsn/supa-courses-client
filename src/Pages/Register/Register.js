import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

function Register() {
	const [error, setError] = useState('');

	const { signUp, setUser, updateUserProfile } = useContext(AuthContext);

	const handleSubmit = e => {
		e.preventDefault();
		setError('');
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;
		const name = form.fullName.value;
		const url = form.photoURL.value;
		if (password !== confirm) {
			setError('Password did not match');
			return;
		};
		if (password.length < 6) {
			setError('Password can\'t be less than 6 character');
			return;
		}
		signUp(email, password)
			.then(result => {
				setUser(result.user);
				updateUserProfile(name, url)
					.then(() => {
						// needs to create a new object without reference since react thinks we are assigning same value to setUser which causes no render. simply by doing this, header shows image after registering
						const newUserObj = { ...result.user };
						setUser(newUserObj);
					})
					.catch(err => setError(err.message));
			})
			.catch(err => setError(err.message));
	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-8 p-6 w-full mx-auto" >
			<h3 className="text-center text-4xl">Register</h3>
			<div className="grid mx-auto gap-4">
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full" required />
				</div>

				<div>
					<label htmlFor="fullName">Full Name</label>
					<input id="fullName" type="text" placeholder="Full Name" name="fullName" className="input input-bordered input-info w-full" required />
				</div>

				<div>
					<label htmlFor="photoURL">Photo URL</label>
					<input id="photoURL" type="url" placeholder="http://example.com" name="photoURL" className="input input-bordered input-info w-full" required />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" placeholder="Password" name="password" className="input input-bordered input-info w-full" required />
				</div>

				<div>
					<label htmlFor="confirm">Confirm Password</label>
					<input id="confirm" type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered input-info w-full" required />
				</div>
				{
					error ? <span className="text-xs text-red-500 text-center">{error}</span> : ''
				}
				<button className="btn">Register</button>
			</div>
			<span className="text-center"><small>Already have an account? <Link to='/login' className="btn-link">Login here</Link>.</small></span>
		</form>
	);
}

export default Register;