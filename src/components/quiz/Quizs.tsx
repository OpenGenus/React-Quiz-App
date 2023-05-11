import {useEffect} from 'react'
import geoQuestions from '../../assets/geoQuestions.json'
import techQuestions from '../../assets/techQuestions.json'
import Quiz from './Quiz';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import nextbutton from '../../assets/next-icon.svg'
import Time from './Time';

const Quizs = () => {
   
    const navigate = useNavigate()
    const { category, name } = useParams();
    const [currentqt, setcurrentqt] = useState(0);
    const [score, setscore] = useState(0);
    const [isdisabled, setisdisabled] = useState(true);
    const [selected, setselected] = useState() ;
    useEffect(() => {
        const encodeScore = btoa(score.toString())
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('quiz', encodeScore);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams}`);
      }, [score]);
    const answers = (answer: any) => {
        setselected(answer);
        setisdisabled(false);
    
}
    const handleNextClick = (e: any) => {
        setisdisabled(true);
        e.preventDefault();
        
        setcurrentqt(currentqt + 1);
        if(category=="tech"){
            if (selected === techQuestions[currentqt].correct) {
                    setscore(score + 1); 
            }
        }
        else{
            if (selected === geoQuestions[currentqt].correct) {
                    setscore(score + 1);
        }
        }
    };
if(currentqt == 10){
    navigate(`/score/${score}/${name}`, {state: {score: score, name: name}})
}
    return (
        <>
            <div className='relative flex gap-7 justify-center p-2 bg-gray-200'>
                <p>Hello {name}</p>
                <p>Your Quiz category is {category == "geo" ? "Geography" : "Technology"}</p>
            </div>
            <div className='relative'>
                <h2 className='bg-gray-200'>Quiz 10 questions</h2>
                        <Time />
                <h3 className=' bg-green-500 w-24 rounded-xl text-2xl p-5 absolute top-[62px]   '>{currentqt+1}/10</h3>
                {
                currentqt < 10 ? 
                category === 'tech' ?
                    <div>
                        <form>
                        <Quiz handleCallback={answers}    key={currentqt} Question={techQuestions[currentqt]}/>
                        <div className="flex justify-end ">
                        <button disabled={isdisabled} type='submit' name="tech" className="bg-green-500 text-white px-8 py-2 rounded-md hover:scale-110 mt-[-27px] disabled:bg-gray-400 " onClick={handleNextClick}>
                            <img src={nextbutton} className='w-8' alt="next-button" />
                            </button>
                            </div>
                        </form>
                    </div> 
                    
                    :
                    <div>
                        <form>
                        <Quiz handleCallback={answers}    key={currentqt} Question={geoQuestions[currentqt]} />
                        <div className="flex justify-end ">
                            <button disabled={isdisabled} type='submit' name="geo" className=" bg-green-500 text-white px-8 py-2 rounded-md hover:scale-110 mt-[-27px] disabled:bg-gray-400" onClick={handleNextClick}>
                                <img src={nextbutton} className='w-8' alt="next-button" />
                            </button>
                        </div>
                        </form>
                    </div>
                : <></>
                }
            </div>
            <div>
            </div>
        </>
    )
}
export default Quizs;
