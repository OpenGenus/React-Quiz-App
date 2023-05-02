import React from 'react'
import { useNavigate } from 'react-router-dom';
interface Scoreset {
    Scoreset: number;
}
const Score = (props:  Scoreset) => {
    const navigate = useNavigate()
  return (
    <div>
            {props.Scoreset >= 8 ? 
            
            <h1 className='text-2xl font-bold'>Congrats! You scored the higest 
                    Your Score is <i>{props.Scoreset}</i> out of 10

            </h1> 
            :
            <>
            <h1 className='text-2xl font-bold'>
                {props.Scoreset >= 6 ? <h1></h1> : <h1>Nice try! Try again
                    You Scored <i>{props.Scoreset}</i> out of 10   
                </h1>
                }
            </h1>
            <button className='p-5 bg-slate-800 text-white rounded-3xl mt-5' onClick={() => {navigate('/')}}>Try agin</button>
            </>
            }
    </div>
  )
}

export default Score