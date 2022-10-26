import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import Header from "../Pages/Shared/Header/Header";

function Main() {
	const { darkTheme } = useContext(AuthContext);
	return (
		<div className="flex flex-col min-h-screen h-full" data-theme={darkTheme ? 'night' : 'cupcake'}>
			<div className="sticky top-0">
				<Header />
			</div>
			<div className="py-8 flex-grow">
				<Outlet />
			</div>
		</div>
	);
}

export default Main;