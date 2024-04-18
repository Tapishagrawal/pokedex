import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { searchContext } from '../contextApi/SearchContextProvider';
import { ShowPokemonContext } from '../contextApi/ShowPokemonContextProvider';

export default function Navbar() {
  const { setSerachValue, searchValue } = useContext(searchContext);
  const { setIsPokemonVisible, isPokemonVisible } = useContext(ShowPokemonContext);

  const debouncer = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  const debouncing = debouncer((e)=>setSerachValue(e.target.value), 800);
  console.log(searchValue)
  return (
    <div className='px-10 py-5 fixed top-0 left-0 w-full z-50 bg-[#f3f0fa]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>PokeDex</h1>
        <div className='flex gap-5'>
          <div className='relative'>
            <input onChange={debouncing} type="text" placeholder='Search' className='group w-44 border border-zinc-300 outline-none focus:border-2 focus:border-blue-300 px-5 pr-6 rounded-full py-[1px] font-medium text-zinc-500 text-sm' />
            <i className='absolute right-2 top-[0.3rem] text-zinc-600'><IoSearchOutline /></i>
          </div>
          <button onClick={() => setIsPokemonVisible(pre => !pre)} className='bg-orange-600 px-3 rounded-2xl text-white font-medium transition-all'>{isPokemonVisible ? "Close" : "My pokemon"}</button>
        </div>
      </div>
    </div>
  )
}
