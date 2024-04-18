import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import PokemonList from './PokemonList'
export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemons' element={<PokemonList/>}/>
        </Routes>
    )
}
