'use client'
import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        
      <button onClick={()=>setCount(count+1)} className='text-2xl font-bold m-4'>+</button>
      {count}
      <button onClick={()=>setCount(count-1)} className='text-2xl font-bold m-4'>-</button>
    </div>
  )
}

export default Counter