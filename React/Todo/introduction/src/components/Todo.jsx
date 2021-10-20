import { useState } from "react"
import '../App.css'

function Todo(){
    const [text,setText]=useState("")
    const [todos,setTodos]=useState([])
    
    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleAdd=()=>{
     setTodos([...todos,text])
     setText("");
    }
    const pending=(e)=>{
        e.target.textContent="Completed";
        e.target.setAttribute("class","comp");
    }
    const remove=(e)=>{
        e.target.parentNode.parentNode.remove();
    }
    return (<div id="maindiv">
          <h1 className="head1">MY TODOS</h1>
            <div className="secdiv">
        <input value={text} type="text" onChange={handleChange} placeholder="Enter Todo" className="inp1"></input>
        <button className="btn1" onClick={handleAdd}>Add todo</button>
        </div>
        <div className="thirdiv">
        {todos.map((e)=>(
            <div className="fourthdivs">{e}
            <div>
            <button className="pendingbtn" onClick={pending}>Pending</button>
            <button className="removebtn" onClick={remove}>Remove</button>
            </div>
            </div>
         )) }
         
</div>
    </div>
    )
}
export {Todo}