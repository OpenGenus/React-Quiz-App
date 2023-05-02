import React from 'react'
import { useNavigate } from 'react-router-dom';
interface Scoreset {
    Scoreset: number;
}
const Score = (props:  Scoreset) => {
    const navigate = useNavigate()
    console.log("Your Score is", props)
  return (
    <div>
            {props.Scoreset >= 8 ? 
            
            <h1 className='text-2xl font-bold'>Congrats! You scored the higest 
                    Your Score is {props.Scoreset}

            </h1> 
            :
            <>
            <h1 className='text-2xl font-bold'>
                {props.Scoreset >= 6 ? <h1></h1> : <h1>Nice try! Try again
                    You Scored {props.Scoreset}
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