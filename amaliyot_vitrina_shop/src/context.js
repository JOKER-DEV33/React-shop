import { createContext } from "react";
export const ShopContext = createContext()

export const ContextPorvider = ({children}) =>{
    const value ={
        example: "hello from context"
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}