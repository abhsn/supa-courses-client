import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

function Header() {
	const { user } = useContext(AuthContext);

	return (
		<div className="navbar bg-base-300 flex items-center">
			<Link to="/" className="btn btn-ghost normal-case text-xl">Supa Courses</Link>
			<Link to="/courses" className="btn btn-ghost normal-case text-xl ml-auto">Courses</Link>
			<Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link>
			<Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
			{
				user ? <img src={user?.photoURL} className="w-10 h-10 object-cover rounded-full ml-2" alt={user.displayName} />
					: <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
			}
		</div>
	);
}

export default Header;