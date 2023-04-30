interface Question {
    questionId: number;
    question: string;
    answers: string[];
    correct: string;

    }
const Quiz = (props: Question) =>{
    console.log("Questions:",props)
    return(
        <div>
            <h1>Ind Quiz</h1>
        </div>
    )
}
export default Quiz