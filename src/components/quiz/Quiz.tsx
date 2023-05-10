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

  const handleanswer = (e: any) => {
    props.handleCallback(e.target.value);
  };

  return (
    <div className="border flex flex-col p-7 shadow-xl bg-gray-200 mt-20">
      <div className="flex">
        <p className="text-2xl">{props.Question.question}</p>
      </div>
      <div className="flex flex-col items-start gap-4  text-xl  p-20">
        {props.Question.answers.map((answer: string, i: number ) => {
          return (
            <ul className="flex " key={i}>
              <li className="flex border bg-gray-300 answered w-[100%] items-center p-3 rounded-xl"  >
                <input
                  onChange={handleanswer}
                  value={answer}
                  type="radio"
                  name="ans"
                  className="mr-4 w-4 h-4 "
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
