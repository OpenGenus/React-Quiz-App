// eslint-disable-next-line @typescript-eslint/no-explicit-any
// @ts-ignore
// eslint-disable-next-line react/prop-types

import './App.css'
import  Home  from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Score from './components/quiz/Score'
import Quiz from './components/quiz/Quizs'
function App() {
  
  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline bg-gray-200 mb-20"> 
     Welcome to Super Quiz
    </h1>
    
    <BrowserRouter>
    <Routes>
      <Route path="/quiz/:category/:name" element={<Quiz/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/score/:score/:name" element={<Score/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
