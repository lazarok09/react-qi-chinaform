import {useState } from "react";
import { UserContext } from './context';
export const UserContextProvider = ({children}) => {
    const [dataContext, setDataContext ] = useState();
    
    return (
        <UserContext.Provider value={{dataContext, setDataContext}}>
            {children}
        </UserContext.Provider>
    )
}