import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FcGraduationCap } from "react-icons/fc";

function Header({ darkTheme, setDarkTheme }) {
	const { user, logOut } = useContext(AuthContext);
	const [skip, setSkip] = useState(true);

	const handleLogOut = () => {
		logOut()
			.then(() => console.log('successfully logged out'))
			.catch(err => console.error(err));
	}

	useEffect(() => {
		if (!skip) {
			const themeObj = {};
			themeObj.darkTheme = darkTheme;
			localStorage.setItem('theme', JSON.stringify(themeObj));
		} else {
			setSkip(false);
		}
	}, [darkTheme])

	return (
		<div className="navbar bg-base-300 flex items-center">
			<Link to="/" className="btn btn-ghost normal-case text-xl flex gap-2"><span className="text-4xl"><FcGraduationCap /></span>Supa Courses</Link>

			<input onChange={() => {
				setDarkTheme(!darkTheme);
			}}
				checked={darkTheme}
				type="checkbox"
				className={`mr-4 ml-auto toggle toggle-lg bg-slate-400 checked:bg-slate-400 checked:border-slate-400 relative ${(darkTheme) ? "before:content-['🌞'] before:left-[2px] before:absolute before:text-2xl" : "after:content-['🌙'] after:absolute after:text-2xl after:right-[2px]"}`} />

			<Link to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link>
			<Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link>
			<Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
			{
				user ?
					<div className="dropdown dropdown-left">
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