import React, { useContext, useEffect, useState } from 'react'
import { ShowPokemonContext } from '../contextApi/ShowPokemonContextProvider'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokeonData, randomPokemonData } from '../redux/action';
import Loadning from './Loadning';
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#8lecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
}
export default function UserSinglePokemon() {
    const dispatch = useDispatch();
    const { randomSinglePokemon, isLoading } = useSelector(store => {
        return {
            randomSinglePokemon: store.pokemonDataReducer.randomSinglePokemon,
            isLoading: store.pokemonDataReducer.isLoading
        }
    })

    useEffect(() => {
        if(localStorage.getItem("pokemon") == null){
            dispatch(randomPokemonData())
        }
    }, [])
    if(isLoading){
        return <Loadning/>
    }
    return (
        randomSinglePokemon && (
            <div className='bg-white p-7 rounded-2xl w-full lg:w-[1000px] md:w-[900px] h-[800px] sm:h-[450px] mt-10 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] mx-auto'>
                <div className='p-5 flex flex-col sm:flex-row items-center sm:items-baseline'>
                    <div className='self-start sm:hidden'>
                        <h1 className='text-xl font-semibold mb-2'>{randomSinglePokemon.name[0]?.toUpperCase() + randomSinglePokemon.name?.slice(1)}</h1>
                        <span style={{ backgroundColor: typeColor[randomSinglePokemon.types[0].type.name] }} className='px-2 rounded-full text-white font-medium'>{randomSinglePokemon.types[1]?.type.name || randomSinglePokemon.types[0]?.type.name}</span>
                    </div>

                    <div className='relative sm:w-[50%]'>
                        <div className='hidden sm:inline-block'>
                            <h1 className='text-xl font-semibold mb-2'>{randomSinglePokemon.name[0]?.toUpperCase() + randomSinglePokemon.name?.slice(1)}</h1>
                            <span style={{ backgroundColor: typeColor[randomSinglePokemon.types[0].type.name] }} className='px-2 rounded-full text-white font-medium'>{randomSinglePokemon.types[1]?.type.name || randomSinglePokemon.types[0]?.type.name}</span>
                        </div>
                        <img src={randomSinglePokemon.sprites.front_default} alt="" className='z-10 relative pokemon-user-image md:-ml-10' />
                        <div style={{ backgroundColor: typeColor[randomSinglePokemon.types[0].type.name] }} className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[150px] h-[150px] rounded-full blur-3xl opacity-60`}></div>
                    </div>
                    <div className='self-start sm:w-[50%] sm:-ml-10'>
                        <h3 className='text-sm font-semibold'>Abilities</h3>
                        <div className='flex gap-1 my-3'>
                            {
                                randomSinglePokemon.abilities.map((ability, i) => (
                                    <p key={i} style={{ backgroundColor: `${typeColor[randomSinglePokemon.types[0].type.name]}` }} className=' text-white p-1 rounded-full px-2 text-xs font-medium'>{ability.ability.name}</p>
                                ))
                            }
                        </div>
                        <h3 className='text-sm font-semibold mb-2'>Story</h3>
                        <p className='text-sm text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam quos tempore, nobis voluptatum iusto necessitatibus vero voluptatem ducimus! Odit.</p>

                        <h3 className='text-sm font-semibold my-4'>Stats</h3>
                        <div>
                            {randomSinglePokemon.stats.map((stat, i) => (
                                <div key={i} className='flex justify-between w-[200px] md:w-[400px]'>
                                    <p className='text-zinc-400 text-sm font-medium'>{stat.stat.name}</p>
                                    <div className='flex items-center gap-5'>
                                        <p className='text-sm font-medium'>{stat.base_stat}</p>
                                        <div className='relative w-[200px] bg-slate-200 h-1 rounded-full overflow-hidden hidden md:inline-block'>
                                            <div style={{ width: `${stat.base_stat}%` }} className={`absolute bg-[#ff9318] h-1 rounded-full`}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
