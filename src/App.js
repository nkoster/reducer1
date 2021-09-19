import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { HeaderProvider } from './context/Header'

const App = () => {
  return (
    <div className='App'>
      <HeaderProvider>
        <Header />
        <Main />
      </HeaderProvider>
    </div>
  )
}

export default App
