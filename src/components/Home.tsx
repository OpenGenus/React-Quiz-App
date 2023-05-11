// eslint-disable-next-line @typescript-eslint/no-explicit-any
// @ts-ignore
// eslint-disable-next-line react/prop-types
import { useEffect } from "react";
import Quizs from "./quiz/Quizs";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Quizhome from "../../public/quiz-home.jpg"
const Home = () => {
const navigate = useNavigate()
const [name, setName] = useState('')
const [quiz, setQuiz] = useState(true)
const [category, setCategory] = useState('tech')
const [isdisabled, setisdisabled] = useState(true);
const handlequiz = () => {
    setQuiz(false)
    navigate(`/quiz/${category}/${name}`, {state: { category, name}})
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
        <div className="flex items-center justify-center bg-[#262626]">
            
            <div><img className=" w-[70%] h-[350px] rounded-2xl" alt="quiz home" src={Quizhome}/></div>
            <div>
            {quiz ? 
            <div className="flex flex-col items-center my-36 justify-center gap-8">
                <div className="flex gap-5">
            <input className="w-72 border p-5" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <select className="w-28 text-center h-14 bg-green-300 rounded-lg" onChange={handlecategory}>
                <option value="tech">Technology</option>
                <option value="geo">Geography</option>        
            </select>
            </div>
            <small className="text-white">Note: You will have 10 multiple-choice questions to finish in 4 minutes!</small>
                 <button disabled={isdisabled} className="text-white bg-green-500 p-3 rounded-xl w-[30%] disabled:bg-gray-600" onClick={handlequiz}>Take Quiz</button>    
                </div> 
                : 
                <div>
                  
                    <Quizs category={category} name={name}  />
                </div>
                  }
        </div>
        </div>
        </>
    )
}
export default Home