import geoQuestions from '../../assets/geoQuestions.json'
import techQuestions from '../../assets/techQuestions.json'
import Quiz from './quiz';
interface QuizProps {
    category: string;
    name: string;
}

const Quizs = (props: QuizProps) => {
    return (
        <>
        <div>
            <p>Name: {props.name}</p>
            <p>Quiz category: {props.category}</p>
        </div>
        <div>

            <h1>** Quiz **</h1>
        {props.category === 'tech' ? 
    <div>
        {techQuestions.map((question, i) => {
            return (
                <Quiz key={i} Question={question}  />
            )
        })}
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
export default Quizs