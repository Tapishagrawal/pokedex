import React, { createContext, useState } from 'react'

export const searchContext = createContext();

export default function SearchContextProvider({ children }) {
    const [searchValue, setSerachValue] = useState("");

    return <searchContext.Provider value={{ searchValue, setSerachValue}}>
        {children}
    </searchContext.Provider>
}
