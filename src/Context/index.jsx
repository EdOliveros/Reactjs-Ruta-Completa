import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)
  console.log('Count: ',count)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}
