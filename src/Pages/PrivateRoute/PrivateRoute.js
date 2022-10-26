import { createContext, useContext } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

export const PrivateContext = createContext();

function PrivateRoute({ children }) {


	const [course] = useLoaderData();
	console.log(course);

	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<span>loading...</span>
		);
	} else {
		if (user) {
			return <PrivateContext.Provider value={course}>
				{children}
			</PrivateContext.Provider>
		} else {
			return (
				<Navigate to="/login" state={{ from: location }} replace ></Navigate>
			);
		}
	}
}

export default PrivateRoute;