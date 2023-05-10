import { useState } from "react";

interface Question {
  questionId: number;
  question: string;
  answers: string[];
  correct: string;
  Question: any;
  isanswered: any;
  handlesetScore: any;
  handleCallback: any;
}

const Quiz = (props: Question) => {
  const [answer, setanswer] = useState();

  const handleanswer = (e: any) => {
    props.handleCallback(e.target.value);
  };

  return (
    <div className="border flex flex-col p-7 shadow-xl bg-gray-200 mt-20">
      <div className="flex">
        <p className="text-2xl">{props.Question.question}</p>
      </div>
      <div className="flex flex-col items-start  text-xl  p-20">
        {props.Question.answers.map((answer, i) => {
          return (
            <ul className="flex " key={i}>
              <li>
                <input
                  onChange={handleanswer}
                  value={answer}
                  type="radio"
                  name="ans"
                  className="mr-4 w-4 h-4 border"
                />
                {answer}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
