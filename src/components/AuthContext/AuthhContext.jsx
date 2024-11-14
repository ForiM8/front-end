import { createContext, useContext, useState } from "react"
 const AuthContext = createContext(null)
export const useAuth = () =>  useContext(AuthContext) 
export const AuthhContext = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    
    return (<AuthContext.Provider value={{ isAuth, setIsAuth }}>             {children}         </AuthContext.Provider>)
}