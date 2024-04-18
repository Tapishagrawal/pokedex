import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchContextProvider from './contextApi/SearchContextProvider.jsx'
import ShowPokemonContextProvider from './contextApi/ShowPokemonContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShowPokemonContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </ShowPokemonContextProvider>
  </BrowserRouter>
)
