import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

function Main() {
	const [darkTheme, setDarkTheme] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) setDarkTheme(JSON.parse(theme).darkTheme);
	}, []);

	return (
		<div className="flex flex-col min-h-screen h-full" data-theme={darkTheme ? 'night' : 'cupcake'}>
			<div className="sticky top-0">
				<Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
			</div>
			<div className="py-8 flex-grow">
				<Outlet />
			</div>
		</div>
	);
}

export default Main;