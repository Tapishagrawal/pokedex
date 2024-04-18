import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchContextProvider from './contextApi/SearchContextProvider.jsx'
import ShowPokemonContextProvider from './contextApi/ShowPokemonContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowPokemonContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </ShowPokemonContextProvider>
)
