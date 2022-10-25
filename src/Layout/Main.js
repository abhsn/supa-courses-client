import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

function Main() {
	return (
		<React.Fragment>
			<div className="flex flex-col h-full">
				<Header />
				<div className="grid place-content-center flex-grow">
					<Outlet />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Main;