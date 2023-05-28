import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// email sign up

 const emailSignUp = (email,password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

// email sign in

 const emailSignIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// log out

const logOut = () => {
    setLoading(true);
    return signOut( auth);
}

// observe user onAuthStateChanged

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
        console.log( "current user"  ,currentUser);
        setLoading(false);
    });
    return ()=>{
              return unsubscribe();
    } 
}, []);



    const authInfo = { user,loading,emailSignUp , emailSignIn , logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;