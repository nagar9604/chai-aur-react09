import React, { useState } from "react";
import UserContetx from "./Usercontext";

const UserContetxProvider=({children})=>{
    const [user,setUser]=useState(null)
   return(
    <UserContetx.Provider value={{user , setUser}}>
        {children}
    </UserContetx.Provider>
   )
}

export default UserContetxProvider