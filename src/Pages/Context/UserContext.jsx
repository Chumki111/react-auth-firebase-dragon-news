import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.config'


export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);

    // createUser
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signIn
    const UserSignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    // signOut

    const logOut = () =>{
       return signOut(auth);
    }
    // onAuthState
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('user in the auth state changed ',currentUser)
        })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo ={user,createUser,UserSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
UserContext.propTypes = {
    children : PropTypes.node,
}
export default UserContext;