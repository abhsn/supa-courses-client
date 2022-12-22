import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

export const AppearanceContext = createContext();

function Main() {
	const [darkTheme, setDarkTheme] = useState(true);
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		window.innerWidth <= 640 ? setMobile(true) : setMobile(false);
	}, [])

	useEffect(() => {
		window.addEventListener('resize', () => {
			window.innerWidth <= 640 ? setMobile(true) : setMobile(false);
		});
	}, []);

	useEffect(() => {
		return () => {
			const theme = localStorage.getItem('theme');
			if (theme) setDarkTheme(JSON.parse(theme).darkTheme);
		}
	}, []);

	const appearanceInfo = { darkTheme, setDarkTheme, mobile };

	return (
		<AppearanceContext.Provider value={appearanceInfo}>
			<div className="flex flex-col min-h-screen h-full" data-theme={darkTheme ? 'night' : 'cupcake'}>
				<div className="sticky top-0 z-10">
					<Header />
				</div>
				<div className="py-8 flex-grow">
					<Outlet />
				</div>
				<Footer />
			</div>
		</AppearanceContext.Provider>
	);
}

export default Main;