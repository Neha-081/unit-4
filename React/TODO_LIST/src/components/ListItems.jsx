import React from 'react'
import { useState } from 'react/cjs/react.development'


export default function ListItems({todo,id,checkComplete,handleEditTodo}) {
   const [oneEdit,setOneEdit]=useState(false)
   const [editValue,setEditValue]=useState(todo.name)
   const handleOneEdit=()=>{
        setOneEdit(true)
    }

    const handleSave=id=>{
        setOneEdit(false)
        if(editValue){
            handleEditTodo(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }

    if(oneEdit){
        return (
            <li>
           <input type="text" id="editValue" value={editValue} name="editValue" onChange={e=>setEditValue(e.target.value.toLowerCase())}/>
         <button onClick={()=>handleSave(id)} >Save</button>
       </li>
        )
    }else{
        return (
            <li>
         <label htmlFor={id} className={todo.complete ? "active" : ""} >
           <input type="checkbox" id={id} checked={todo.complete} 
           onChange={()=>checkComplete(id)}/>
          {todo.name}
         </label>
         <button disabled={todo.complete} onClick={handleOneEdit}>Edit</button>
       </li>
        )
    }
    
    
}
