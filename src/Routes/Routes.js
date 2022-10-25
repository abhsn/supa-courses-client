import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/courses',
				element: <Courses />,
				loader: async () => fetch('https://b610-lerning-platform-server-side-abhsn.onrender.com/api/courses')
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
])