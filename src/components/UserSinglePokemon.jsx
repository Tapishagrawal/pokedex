import React, { useContext, useEffect, useState } from 'react'
import { ShowPokemonContext } from '../contextApi/ShowPokemonContextProvider'
import axios from 'axios';
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
    const { isPokemonVisible } = useContext(ShowPokemonContext);
    const [pokemonDetail, setPokemonDetail] = useState(JSON.parse(localStorage.getItem("pokemon")))

    const fetchData = async () => {
        try {
            const id = Math.floor(Math.random() * 20)
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
            localStorage.setItem("pokemon", JSON.stringify(res.data));
            setPokemonDetail(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const pokemonData = localStorage.getItem("pokemon");
        if (!pokemonData) {
            fetchData();
        } else {
            try {
                const parsedPokemonData = JSON.parse(pokemonData);
                setPokemonDetail(parsedPokemonData);
            } catch (error) {
                console.error("Error parsing Pokemon data from localStorage:", error);
                fetchData();
            }
        }
    }, []);

    return (
        <div className='bg-white p-7 rounded-2xl w-[1000px] h-[520px] mx-auto mt-10 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]'>
            <div className='p-5 flex'>
                <div className='w-[50%] relative'>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>{pokemonDetail.name[0]?.toUpperCase() + pokemonDetail.name?.slice(1)}</h1>
                        <span style={{ backgroundColor: typeColor[pokemonDetail.types[0].type.name] }} className='px-2 rounded-full text-white font-medium'>{pokemonDetail.types[1]?.type.name || pokemonDetail.types[0]?.type.name}</span>
                    </div>
                    <img src={pokemonDetail.sprites.front_default} alt="" className='w-[400px] z-10 relative -ml-10' />
                    <div style={{ backgroundColor: typeColor[pokemonDetail.types[0].type.name] }} className={`absolute top-[50%] left-[40%] -translate-x-[50%] -translate-y-[50%] w-[270px] h-[270px] rounded-full blur-3xl opacity-60`}></div>
                </div>
                <div className='w-[50%] -ml-10'>
                    <h3 className='text-sm font-semibold'>Abilities</h3>
                    <div className='flex gap-1 my-3'>
                        {
                            pokemonDetail.abilities.map((ability, i) => (
                                <p key={i} style={{ backgroundColor: `${typeColor[pokemonDetail.types[0].type.name]}` }} className=' text-white p-1 rounded-full px-2 text-xs font-medium'>{ability.ability.name}</p>
                            ))
                        }
                    </div>
                    <h3 className='text-sm font-semibold mb-2'>Story</h3>
                    <p className='text-sm text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam quos tempore, nobis voluptatum iusto necessitatibus vero voluptatem ducimus! Odit.</p>

                    <h3 className='text-sm font-semibold my-4'>Stats</h3>
                    <div>
                        {pokemonDetail.stats.map((stat, i) => (
                            <div key={i} className='flex justify-between w-[400px]'>
                                <p className='text-zinc-400 text-sm font-medium'>{stat.stat.name}</p>
                                <div className='flex items-center gap-5'>
                                    <p className='text-sm font-medium'>{stat.base_stat}</p>
                                    <div className='relative w-[200px] bg-slate-200 h-1 rounded-full overflow-hidden'>
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
}
