import React,{useContext,useState} from 'react'
import { DataContext } from './Dataprovider'
export default function Footer() {
    const[checkAll,setcheckAll]=useState(false)
    const [todos,setTodos]=useContext(DataContext)
   const handleCheckAll=()=>{
       const newTodos=[...todos]
       newTodos.forEach(todo=>{
           todo.complete=!checkAll
       })
       setTodos(newTodos)
       setcheckAll(!checkAll)
   }



   const deleteTodo=()=>{
       const newTodos=todos.filter(todo=>{
           return todo.complete===false
       })
       setTodos(newTodos)
       setcheckAll(false)
   }
    return (
   <> {
         todos.length===0 ? <h2>Congratulations! You have nothing to do</h2>
         :
         <div>
             <div className="row">
 <label htmlFor="all">
       <input type="checkbox" name="all/ id="all onChange={handleCheckAll} checked={checkAll}/>
       ALL
     </label>
     <p>You have {todos.filter(todo=>todo.complete===false).length} to do</p>
     <button id="delete" onClick={deleteTodo}>Delete</button>
 </div>
        </div>
     }

     </>
        
    )
}
