import React,{useContext} from 'react'
import ListItems from './ListItems'
import { DataContext } from './Dataprovider'

export default function TodoList() {
    const [todos,setTodos]=useContext(DataContext)
 
const switchComplete= id =>{
   const newTodos=[...todos]
  newTodos.forEach((todo,index)=>{
      if(index===id){
          todo.complete=!todo.complete
      }
  })
  setTodos(newTodos)
}

const handleEditTodo=(editvalue,id)=>{
    const newTodos=[...todos]
    newTodos.forEach((todo,index)=>{
        if(index===id){
            todo.name=editvalue
        }
    })
    setTodos(newTodos)
}

    return (  
<ul>
  {
      todos.map((todo,index) => (
          <ListItems todo={todo} key={index} id={index} checkComplete={switchComplete} handleEditTodo={handleEditTodo}/>
      ))
  }
</ul>
    )
}
