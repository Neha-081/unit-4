import React,{useState,useContext,useRef,useEffect} from 'react';
import {DataContext} from './Dataprovider'
 export default function FormInput(){
const [todos,setTodos]=useContext(DataContext)
const [todoName,setTodoName]=useState("")
const todoInput=useRef()
const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos,{
        name:todoName,
        complete:false
    }])
    setTodoName("")
    todoInput.current.focus()
} 

useEffect(()=>{
todoInput.current.focus()
},[])

return (
     
        <form autoComplete="off" onSubmit={addTodo}>
   <input type="text"  name="todos" id="todos" required placeholder="Enter Todo..." value={todoName} onChange={e=>setTodoName(e.target.value.toLowerCase())} ref={todoInput}/>
   
   <button type="submit">Create</button>
 </form>

    )




}


