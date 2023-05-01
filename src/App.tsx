import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Home  from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './components/quiz/quizs'
function App() {
  
  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
     Welcome to Super Quiz
    </h1>
    <BrowserRouter>
    <Routes>
      <Route path="/quiz/:category/:name" element={<Quiz/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
