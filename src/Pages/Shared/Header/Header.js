import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

function Header() {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => console.log('successfully logged out'))
			.catch(err => console.error(err));
	}

	return (
		<div className="navbar bg-base-300 flex items-center">
			<Link to="/" className="btn btn-ghost normal-case text-xl">Supa Courses</Link>
			<Link to="/courses" className="btn btn-ghost normal-case text-xl ml-auto">Courses</Link>
			<Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link>
			<Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
			{
				user ?
					<div className="dropdown dropdown-left">
						{/* <label tabIndex={0} className="btn p-0 w-10 h-10 rounded-full object-cover">
						</label> */}
						<img tabIndex={0} src={user?.photoURL} className="btn p-0 w-12 h-12 mx-2 object-cover rounded-full" alt={user.displayName} title={user.displayName} />
						<ul tabIndex={0} className="top-[auto_!important] right-[0_!important] my-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
							<li><button onClick={handleLogOut}>Log out</button></li>
						</ul>
					</div>
					: <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
			}
		</div>
	);
}

export default Header;