import React, { useContext, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { searchContext } from '../contextApi/SearchContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const { setSearchValue, handleSetSerachValue, searchValue } = useContext(searchContext);
  const [mobileManu, setmobileManu] = useState(false)
  const navigate = useNavigate();

  const handleSearch = () => {
    if(searchValue){
      handleSetSerachValue();
      navigate("/pokemons")
    }
  }
  const handleKeyPress = (e) => {
    if (searchValue) {
      if (e.key === 'Enter') {
        handleSetSerachValue();
        navigate("/pokemons")
      }
    }
  }
  return (
    <div className='px-10 py-5 fixed top-0 left-0 w-full z-50 bg-[#f3f0fa]'>
      <div className='flex justify-between items-center relative'>
        <Link to="/" className='text-2xl font-semibold'>PokeDex</Link>
        <div className='flex gap-5 '>
          {
            mobileManu ?
              <i className='cursor-pointer text-2xl second-serachBar' onClick={() => setmobileManu(!mobileManu)}><IoClose /></i>
              :
              <i className='cursor-pointer second-serachBar' onClick={() => setmobileManu(!mobileManu)}><RxHamburgerMenu /></i>
          }
          <form onSubmit={(e)=>e.preventDefault()} className='relative searchBar'>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyPress} type="text" placeholder='Search' className='group md:w-96 border border-zinc-300 outline-none focus:border-2 focus:border-blue-300 px-5 pr-6 rounded-full py-1 font-medium text-zinc-500 text-sm' />
            <i className='absolute right-2 top-[0.4rem] text-zinc-600'><IoSearchOutline /></i>
          </form>
          <button onClick={handleSearch} className='searchBar bg-orange-600 px-3 py-1 rounded-2xl text-white font-medium transition-all'>Search</button>
        </div>
        {
          mobileManu &&
          <div className='absolute top-14 right-1 bg-white w-full p-5 second-serachBar'>
            <div className='relative mb-5'>
              <input onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyPress} type="text" placeholder='Search' className='group w-full border border-zinc-300 outline-none focus:border-2 focus:border-blue-300 px-5 pr-6 rounded-full py-1 font-medium text-zinc-500 text-sm' />
              <i className='absolute right-2 top-[0.4rem] text-zinc-600'><IoSearchOutline /></i>
            </div>
            <Link to="/pokemons" onClick={handleSearch} className=' bg-orange-600 px-3 py-1 rounded-2xl text-white font-medium transition-all'>Serach</Link>
          </div>
        }
      </div>
    </div>
  )
}
