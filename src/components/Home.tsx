import React from "react";
import Quizs from "./quiz/Quizs";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
const [name, setName] = useState('')
const [quiz, setQuiz] = useState(true)
const [category, setCategory] = useState('tech')
const handlequiz = () => {
    setQuiz(false)
    navigate(`/quiz/${category}/${name}`, {state: {category: category, name: name}})
}
const handlecategory = (e: any) => {
    setCategory(e.target.value)
}

    return (
        <>
        <div>
            {quiz ? 
            <div>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <select onChange={handlecategory}>
                <option value="tech">Tech</option>
                <option value="geo">Geo</option>        
            </select>
                 <button onClick={handlequiz}>Take Quiz</button>    
                </div> 
                : 
                <div>
                    <Quizs category={category} name={name}  />
                
                </div>
                  }
        
        </div>
        </>
    )
}
export default Home