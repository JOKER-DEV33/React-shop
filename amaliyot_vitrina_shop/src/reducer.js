import {createContenxt} from 'react'

export const ShopContext = createContenxt()

export const ContextProvider = ({children}) => {
    const value = {
        example: "hello from context"
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}