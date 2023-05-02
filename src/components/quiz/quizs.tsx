import geoQuestions from '../../assets/geoQuestions.json'
import techQuestions from '../../assets/techQuestions.json'
import Quiz from './quiz';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Score from './score';

interface QuizProps {
    category: string;
    name: string;
}

const Quizs = (props: QuizProps) => {
    const { category, name } = useParams();
    const [currentqt, setcurrentqt] = useState(0);
    const [isanswered, setisanswered] = useState(false);
    const [score, setscore] = useState(0);

    const handleNextClick = (e: any) => {
        e.preventDefault();
        setcurrentqt(currentqt + 1);
    };
    const handlesetScore = () => {
        setscore(score+1);
    }

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <p>Quiz category: {category == "geo" ? "Geography" : "Technology"}</p>
            </div>
            <div>
                <h2>Quiz 10 questions</h2>
                <h3 className=' bg-green-500 w-20 rounded-xl text-2xl p-5'>{currentqt}/10</h3>
                {currentqt <= 10 ? 
                
                category === 'tech' ?
                    <div>
                        <form>
                        <Quiz  handlesetScore={handlesetScore}  key={currentqt} Question={techQuestions[currentqt]}/>
                        <button type='submit' className=" bg-green-500 text-white px-8 py-2 rounded-md hover:scale-110" onClick={handleNextClick}>Next</button>
                        </form>
                    </div> :
                    <div>
                        <form>
                        <Quiz  handlesetScore={handlesetScore}   key={currentqt} Question={geoQuestions[currentqt]} />
                        <div className="flex justify-end ">
                            <button type='submit' className=" bg-green-500 text-white px-8 py-2 rounded-md hover:scale-110 " onClick={handleNextClick}>Next</button>
                        </div>
                        </form>
                    </div>
                    
                
                : <Score />}
            </div>
            <div>
            </div>
        </>
    )
}

export default Quizs;