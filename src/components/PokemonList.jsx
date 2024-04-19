import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';
import { searchContext } from '../contextApi/SearchContextProvider';
import { FaArrowLeftLong } from "react-icons/fa6";
import Loadning from './Loadning';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokeonData } from '../redux/action';
export default function PokemonList() {
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const { inputValue, searchValue } = useContext(searchContext);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { allPokeonData, isLoading } = useSelector(store => {
        return {
            allPokeonData: store.pokemonDataReducer.allPokeonData,
            isLoading: store.pokemonDataReducer.isLoading
        }
    })


    const getSinglePokemon = (pokemonId) => {
        const pokemon = allPokeonData.find(pokemon => pokemon.id === pokemonId)
        setPokemonDetails(pokemon)
    }
    useEffect(() => {
        if (inputValue) {
            const filteredData = allPokeonData.filter(pokemon => pokemon.name.includes(inputValue));
            setFilteredPokemonData(filteredData);
        }
    }, [inputValue, allPokeonData]);

    useEffect(() => {
        dispatch(fetchAllPokeonData())
    }, []);
    console.log(filteredPokemonData)
    return (
        <>
            {
                filteredPokemonData.length > 0 ?

                    isLoading ?
                        <Loadning /> :
                        <div className='my-20'>
                            <button onClick={() => navigate("/")} className='flex items-center gap-2 font-semibold text-zinc-600 hover:bg-slate-300 rounded-full px-2 py-[1px] transition-all my-5 ml-8'><i className='text-orange-500'><FaArrowLeftLong /></i> Home</button>

                            <div className={`grid place-items-center grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-x-20`}>
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
                        </div>
                    :
                    <div className='mt-20'>
                            <button onClick={() => navigate("/")} className='flex items-center gap-2 font-semibold text-zinc-600 hover:bg-slate-300 rounded-full px-2 py-[1px] transition-all my-5 ml-8'><i className='text-orange-500'><FaArrowLeftLong /></i> Home</button>
                            <h1 className='text-center font-bold text-4xl text-slate-600'>No data found</h1>
                    </div>
            }
        </>
    )
}