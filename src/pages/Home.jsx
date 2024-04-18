import React from 'react'
import PokemonList from '../components/PokemonList'
import UserSinglePokemon from '../components/UserSinglePokemon'
import Loadning from '../components/Loadning'

export default function Home() {
    return (
        <div className='my-20 flex gap-10 px-3'>
            <UserSinglePokemon />
        </div>
    )
}
