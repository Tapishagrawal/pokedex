import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { searchContext } from '../contextApi/SearchContextProvider';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { setSearchValue, handleSetSerachValue} = useContext(searchContext);

  return (
    <div className='px-10 py-5 fixed top-0 left-0 w-full z-50 bg-[#f3f0fa]'>
      <div className='flex justify-between items-center'>
        <Link to="/" className='text-2xl font-semibold'>PokeDex</Link>
        <div className='flex gap-5'>
          <div className='relative'>
            <input onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder='Search' className='group w-96 border border-zinc-300 outline-none focus:border-2 focus:border-blue-300 px-5 pr-6 rounded-full py-1 font-medium text-zinc-500 text-sm' />
            <i className='absolute right-2 top-[0.4rem] text-zinc-600'><IoSearchOutline /></i>
          </div>
          <Link to="/pokemons" onClick={()=>{handleSetSerachValue(), setSearchValue("")}} className='bg-orange-600 px-3 rounded-2xl text-white font-medium transition-all'>Serach</Link>
        </div>
      </div>
    </div>
  )
}
