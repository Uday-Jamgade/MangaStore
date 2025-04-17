import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
 
    const [islogin, setIslogin]= useState(false);
    const [role,setRole]=useState("user");
    const [bookid, setBookid]=useState("")
    
    const login=(state)=>{
    setIslogin(state)
    }

    const logout=(state)=>{
        setIslogin(state)
    }

    const getBookid=(id)=>{
        setBookid(id)
    }

    const Role = (action)=>{
        setRole(action);
    }

    return (<AuthContext.Provider value={{islogin,login,logout,Role,role,bookid,getBookid}}>
        {children}
        </AuthContext.Provider>)

}

