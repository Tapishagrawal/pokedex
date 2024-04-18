import React, { createContext, useState } from 'react'

export const searchContext = createContext();

export default function SearchContextProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleSetSerachValue = () => {
        setInputValue(searchValue)
    }

    return <searchContext.Provider value={{ searchValue, setSearchValue, handleSetSerachValue, inputValue}}>
        {children}
    </searchContext.Provider>
}
