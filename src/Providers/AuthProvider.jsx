import { createContext, useEffect, useState } from "react";
import { Auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(Auth,email,password)
}
const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(Auth,email,password)
}

const logoutUser =()=>{
    setLoading(true)
    return signOut(Auth)
}
const updateUserProfile = (name,photo)=>{
    return updateProfile(Auth.currentUser, {
        displayName: name, photoURL: photo
      })
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth,currentUser=>{
    setUser(currentUser)
    // console.log(currentUser)
    setLoading(false)
    })
    return()=>{
        return unsubscribe()
    }
},[])

    const AuthInfo ={
            user,
            loading,
            createUser,
            signInUser,
            logoutUser,
            updateUserProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;