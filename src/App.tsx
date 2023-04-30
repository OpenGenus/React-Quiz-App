import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Home  from './components/Home'
function App() {
  
  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
     Welcome to Super Quiz
    </h1>
      <Home />
      </div>
    </>
  )
}

export default App
