import { createContext, useEffect, useState } from "react";


const AuthContext=createContext();

function AuthProvider({children}) {
    const[currentUser,setCurrentUser]=useState(null);
    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem("currentUser"));
        if(user)
        {
            setCurrentUser(user);
        }
    },[]);
    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}