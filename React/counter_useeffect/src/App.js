// import { useState,useEffect } from 'react';
import {Counter} from './components/Counter'
import {useState} from 'react'
import './App.css'


function App() {
  const [show,setShow] = useState(true)
 return <div className="App">
   {show? (
   <>
   <Counter/> <button onClick={()=>{
     setShow(false)
   }}>Hide</button>
   </>
   ):(<>
     <button onClick={()=>{
       setShow(true)
     }}>Show</button>
     </>
   )
  }
   

 </div>
   
}

export default App;
