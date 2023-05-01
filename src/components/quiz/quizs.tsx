import geoQuestions from '../../assets/geoQuestions.json'
import techQuestions from '../../assets/techQuestions.json'
import Quiz from './quiz';
 import { useParams } from 'react-router-dom';
interface QuizProps {
    category: string;
    name: string;
}

const Quizs = (props: QuizProps) => {
   const {category, name} = useParams();
    return (
        <>
        <div>
            <p>Name: {name}</p>
            <p>Quiz category: {category == "geo" ? "Geography":"Technology"  }</p>
        </div>
        <div>
            <h1>Quiz 10 questions</h1>
        {category === 'tech' ? 
    <div>
        {techQuestions.map((question, i) => {
            return (
                <Quiz key={i} Question={question}  />
            )
        }).slice(0,2)}
    </div> :
    <div>
        {geoQuestions.map((question, i) => {
            return (
                <Quiz key={i} Question={question}/>
            )
        })}
    </div>    
    }
        </div>
        <div>
         
        </div>
        </>
    )
}
export default Quizs;