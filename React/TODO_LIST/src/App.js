
// import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import  Footer  from './components/Footer';
import TodoList from './components/TodoList';
import {Dataprovider} from './components/Dataprovider'
import './App.css'
function App() {

  return (
    <Dataprovider>
      <div className="App">
 <h1>To Do List</h1>
<FormInput/>
<TodoList/>
<Footer/>
  </div> 
  </Dataprovider>
  
  )
}

export default App;
