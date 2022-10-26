import { createContext, useContext } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

export const PrivateContext = createContext();

function PrivateRoute({ children }) {


	const [course] = useLoaderData();

	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="grid place-content-center animate-spin max-h-screen">
				<div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}></div>
			</div>
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