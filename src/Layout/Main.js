import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

export const ThemeContext = createContext();

function Main() {
	const [darkTheme, setDarkTheme] = useState(true);

	const themeInfo = { darkTheme, setDarkTheme };

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) setDarkTheme(JSON.parse(theme).darkTheme);
	}, []);

	return (
		<ThemeContext.Provider value={themeInfo}>
			<div className="flex flex-col min-h-screen h-full" data-theme={darkTheme ? 'night' : 'cupcake'}>
				<div className="sticky top-0">
					<Header />
				</div>
				<div className="py-8 flex-grow">
					<Outlet />
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default Main;