import React from 'react'
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
export default function PokemonCard({ id, name, sprites, stats, abilities, setIsModalVisible, getSinglePokemon, types }) {
    return (
        <div onClick={() => { setIsModalVisible(true), getSinglePokemon(id) }} className='cursor-pointer relative w-[250px] bg-[#fffffc] rounded-lg p-5 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] overflow-hidden'>
            <span style={{ backgroundColor: `${typeColor[types[0].type.name]}` }} className={`absolute w-full h-36 top-0 left-0 rounded-bl-[200px] rounded-br-[200px]`}></span>
            <div>
                <img src={sprites.front_default} alt="" className='w-full relative' />
            </div>
            <h3 className='text-center font-bold text-lg'>{name[0]?.toUpperCase()+name?.slice(1)}</h3>
            <div className='flex flex-wrap justify-around mt-5 gap-5'>
                {abilities.map((ability, i) => (
                    <p key={i} style={{ backgroundColor: `${typeColor[types[0].type.name]}` }} className=' text-white p-1 rounded-full px-2 text-xs font-medium'>{ability.ability.name}</p>
                ))}
            </div>
            <div className='flex gap-5 justify-center text-center mt-5'>
                <div>
                    <p className='font-semibold'>{stats[1].base_stat}</p>
                    <p className='text-zinc-500 font-medium'>{stats[1].stat.name}</p>
                </div>
                <div>
                    <p className='font-semibold'>{stats[2].base_stat}</p>
                    <p className='text-zinc-500 font-medium'>{stats[2].stat.name}</p>
                </div>
                <div>
                    <p className='font-semibold'>{stats[5].base_stat}</p>
                    <p className='text-zinc-500 font-medium'>{stats[5].stat.name}</p>
                </div>
            </div>
        </div>
    )
}
