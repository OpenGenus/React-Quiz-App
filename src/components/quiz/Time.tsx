import React from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Time = React.memo(() => {
  const {name} = useParams()
  const urlSearchParams = new URLSearchParams(window.location.search);
  const quiz = urlSearchParams.get('quiz')
 const decodeScore = parseInt(atob(quiz), 10)
    const navigate = useNavigate();
    const Completionist = () => 
    {
        setTimeout(() =>{
            navigate(`/score/${decodeScore}/${name}`, {state: {score: decodeScore, name: name, info: "Time is up"}})
         }, 1000)
    return (<span>Time is up</span>)
   
};
    const renderer = ({ hours, minutes, seconds, completed }: any) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };
  return (
    <div>
         <h2>
                    Time left <Countdown
                    date={Date.now() + 30000}
                        renderer={renderer}/>
                        </h2>
    </div>
  )
})

export default Time