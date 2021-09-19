import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { StateProvider } from './context/State'

const App = () => {
  return (
    <div className='App'>
      <StateProvider>
        <Header />
        <Main />
      </StateProvider>
    </div>
  )
}

export default App
