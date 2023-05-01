interface Question {
    questionId: number;
    question: string;
    answers: string[];
    correct: string;
    Question: any;

    }
const Quiz = (props: Question) =>{
    console.log("Questions:",Object.keys(props).map((key)=>{
        return props[key]
    }))
    return(
        <div>
           {Object.keys(props).map((key)=>{
                return <div className="border flex flex-col p-7" key={key}>
                    <div className="flex">
                   <p className="text-2xl"> {props[key].question as any}</p>
                   </div>
                    <div className="flex flex-col  p-20">
                        {props[key].answers.map((answer, i)=>{
                            return <ul key={i}>
                              <li><input type="radio" name="ans"/>
                                {answer}</li>
                            </ul>
                        })}
                </div>
                </div>
           })}
        </div>
    )
}
export default Quiz