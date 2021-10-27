import React,{useState,useEffect,createContext} from 'react'
export const DataContext=createContext()
export  const Dataprovider=(props) =>{
const [todos,setTodos]=useState([])
useEffect(()=>{
    const todostore = JSON.parse(localStorage.getItem("todostore"))
    if(todostore) setTodos(todostore)
    },[])

useEffect(()=>{
localStorage.setItem("todostore",JSON.stringify(todos))
},[todos])



    return (
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
