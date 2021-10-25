import { useEffect, useState } from "react";
import '../App.css'

export function Counter(){
    const [count,setCount]=useState(0)


    useEffect(()=>{
const id = setInterval(()=>{
    setCount((prev)=>{
        if(prev===9){
            clearInterval(id)
            return 10
        }
        return prev+1;
    });
},1000);
//cleanup
 return ()=>{
        console.log("Unmounting");
        clearInterval(id)
    }
    },[]);
    return <h1 className="head">Count:{count}</h1>
   
    
   
}

