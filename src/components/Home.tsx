import React, {useEffect} from "react";
import Quizs from "./quiz/Quizs";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate()
const [name, setName] = useState('')
const [quiz, setQuiz] = useState(true)
const [category, setCategory] = useState('tech')
const [isdisabled, setisdisabled] = useState(true);
const handlequiz = () => {
    setQuiz(false)
    navigate(`/quiz/${category}/${name}`, {state: {category: category, name: name}})
}

useEffect(() => {
    if(name){
        setisdisabled(false);
    }
    else{
        setisdisabled(true);
    }
}, [name])
const handlecategory = (e: any) => {
    setCategory(e.target.value)
    
}


    return (
        <>
        <div>
            {quiz ? 
            <div className="flex flex-col items-center my-36 justify-center gap-8">
                <div className="flex gap-5">
            <input className="w-72 border" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <select className="w-20 h-14 bg-green-300 rounded-lg" onChange={handlecategory}>
                <option value="tech">Tech</option>
                <option value="geo">Geo</option>        
            </select>
            </div>
            <small>Note: You will have 10 multiple-choice question!</small>
                 <button disabled={isdisabled} className="text-white bg-green-500 p-3 rounded-xl w-[30%] disabled:bg-gray-600" onClick={handlequiz}>Take Quiz</button>    
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