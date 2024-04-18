import React from 'react'
import PokemonList from '../components/PokemonList'
import UserSinglePokemon from '../components/UserSinglePokemon'

export default function Home() {
    return (
        <div className='my-20 flex gap-10'>
            {/* <PokemonList /> */}
            <UserSinglePokemon />
        </div>
    )
}
