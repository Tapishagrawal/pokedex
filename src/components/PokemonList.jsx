import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';
import { searchContext } from '../contextApi/SearchContextProvider';
import { ShowPokemonContext } from '../contextApi/ShowPokemonContextProvider';
export default function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const { searchValue } = useContext(searchContext);
    const { isPokemonVisible } = useContext(ShowPokemonContext);
    const fetchData = async () => {
        try {
            const res = await axios(`https://pokeapi.co/api/v2/pokemon`);
            getPokemon(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    const getPokemon = (data) => {
        data.map(async (item) => {
            const res = await axios(item.url);
            setPokemonData(pre => {
                pre = [...pre, res.data];
                return pre
            })
        })
    }
    const getSinglePokemon = (pokemonId) => {
        const pokemon = pokemonData.find(pokemon => pokemon.id === pokemonId)
        setPokemonDetails(pokemon)
    }
    useEffect(() => {
        fetchData()
    }, []);

    useEffect(()=>{
        const filteredData = pokemonData.filter(pokemon=>pokemon.name.includes(searchValue));
        setFilteredPokemonData(filteredData); 
    },[searchValue, pokemonData]) 
    return (
        <>
            <div className={` grid grid-flow-row ${isPokemonVisible ? "grid-cols-3" : "grid-cols-4"} gap-5 mx-auto gap-x-20 ${isPokemonVisible ? "max-w-screen-md" : "max-w-screen-lg transition-all duration-500"}`}>
                {
                    filteredPokemonData.map((pokemon, i) => (
                        <PokemonCard key={i} {...pokemon} setIsModalVisible={setIsModalVisible} getSinglePokemon={getSinglePokemon} />
                    ))
                }
            </div>
            {isModalVisible &&
                <div onClick={() => setIsModalVisible(false)} className='fixed top-0 left-0 bg-black/50 w-full h-screen z-50'></div>
            }
            <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50'>
                {isModalVisible && <PokemonModal {...pokemonDetails} setIsModalVisible={setIsModalVisible} />}
            </div>
        </>
    )
}