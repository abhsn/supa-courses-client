import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

function Main() {
	return (
		<React.Fragment>
			<div className="flex flex-col h-full">
				<div className="sticky top-0">
					<Header />
				</div>
				<div className="px-16 py-8">
					<Outlet />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Main;