import { useEffect } from 'react'
import './App.css'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { fetchAllPokeonData } from './redux/action'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPokeonData())
  },[])
  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
