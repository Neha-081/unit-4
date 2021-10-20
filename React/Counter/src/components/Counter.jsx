import { useState } from "react"
export  const Counter=()=>{
    const [count,setCount]=useState(0);
    return( <div>
        <h1>Counter: {count}</h1>
      <button   disabled={count===0} onClick={()=>{
        
          
      setCount(count-1)
       
      }}>Reduce 1</button>

<button onClick={()=>{
          
          setCount(count+1)
           
          }}>Add 1</button>

<button onClick={()=>{
          
          setCount(count*2)
           
          }}>Double</button>
    </div>
    )
}
