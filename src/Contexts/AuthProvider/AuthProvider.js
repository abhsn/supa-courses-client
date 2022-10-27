import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	}

	const githubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	}

	const logOut = () => {
		return signOut(auth);
	}

	const updateUserProfile = (name, url) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: url
		});
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setLoading(false);
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
		});

		return () => unSubscribe;
	}, []);

	const authinfo = { user, setUser, loading, signUp, signIn, updateUserProfile, logOut, googleSignIn, githubSignIn }

	return (
		<AuthContext.Provider value={authinfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;