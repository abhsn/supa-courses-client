import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const authinfo = { user, setUser }

	return (
		<AuthContext.Provider value={authinfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;