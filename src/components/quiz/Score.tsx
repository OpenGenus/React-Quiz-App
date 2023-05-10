import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// interface Scoreset {
//     score: number;
//     name: string;
// }
const Score = () => {
  const { score, name, info } = useParams<{ score: string, name: string, info: string }>();
const scoreNumber = Number(score);
    const navigate = useNavigate()
    console.log("info", info)
  return (
    <div className='mt-36'>
      <h2>{info}</h2>
            {scoreNumber >= 8 ? 
<>
<div class="celebration">
  <h1>Congratulations!</h1>
  <p>You got a great score!</p>
</div>
            <div className='bg-green-400 text-white p-5'>     
                   <h1 className='text-2xl font-bold'>Congrats! {name} You scored the higest 
                    Your Score is <i>{score}</i> out of 10
            </h1>
            <button className='p-5 bg-slate-800 text-white rounded-3xl mt-5 hover:text-black hover:bg-white' onClick={() => {navigate('/')}}>Try agin or Change Category</button>
            </div>
            </>
            :
            <>
             
                {(scoreNumber <= 7 && scoreNumber > 5) ? 
                <div className='text-2xl font-bold bg-yellow-400 text-white p-5'>
                <h1>Good! {name} Try again
                    You Scored <i>{score}</i> out of 10   
                </h1>  </div>
                :<h1></h1>  
                
                }
          
            <div className='text-2xl font-bold bg-red-400 text-white p-5'>
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
