import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchContextProvider from './contextApi/SearchContextProvider.jsx'
import ShowPokemonContextProvider from './contextApi/ShowPokemonContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ShowPokemonContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </ShowPokemonContextProvider>
    </BrowserRouter>
  </Provider>
)
