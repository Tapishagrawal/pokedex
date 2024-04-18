import React, { createContext, useState } from 'react'

export const ShowPokemonContext = createContext();

export default function ShowPokemonContextProvider({children}) {
    const [isPokemonVisible, setIsPokemonVisible] = useState(false);
    return (
        <ShowPokemonContext.Provider value={{ isPokemonVisible, setIsPokemonVisible }}>
            {children}
        </ShowPokemonContext.Provider>
    )
}
