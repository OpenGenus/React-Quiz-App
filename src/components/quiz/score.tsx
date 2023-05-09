import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// interface Scoreset {
//     score: number;
//     name: string;
// }
const Score = () => {
  const { score, name } = useParams<{ score: string, name: string }>();
const scoreNumber = Number(score);
    const navigate = useNavigate()
  return (
    <div className='mt-36'>
            {scoreNumber >= 8 ? 
            <>            <h1 className='text-2xl font-bold'>Congrats! {name} You scored the higest 
                    Your Score is <i>{score}</i> out of 10
            </h1>
            <button className='p-5 bg-slate-800 text-white rounded-3xl mt-5' onClick={() => {navigate('/')}}>Try agin</button>
            </>
            :
            <>
             <div className='text-2xl font-bold'>
                {(scoreNumber <= 7 && scoreNumber > 5) ? <h1>Good! {name} Try again
                    You Scored <i>{score}</i> out of 10   
                </h1>:<h1></h1>  
                
                }
            </div>
            <div className='text-2xl font-bold'>
                {scoreNumber <= 5 ? 
                 <h1>Nice try! {name} Try again
                 You Scored <i>{score}</i> out of 10   
             </h1>
               
                 : 
                 <h1></h1>
                }
            </div>
            <button className='p-5 bg-slate-800 text-white rounded-3xl mt-5' onClick={() => {navigate('/')}}>Try agin</button>
            </>
            }
    </div>
  )
}

export default Score