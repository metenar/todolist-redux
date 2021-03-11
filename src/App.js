import React from "react"
import './App.css';
import TodoList from "./TodoList";
import {useDispatch} from "react-redux"

function App() {
  const dispatch=useDispatch();
  const add=(newTodo)=>{
    dispatch({type:"ADD_TODO",payload:{text:newTodo.text,status:false}})
  }
  const del=(id)=>{
    console.log(id)
    dispatch({type:"DELETE_TODOS",payload:id})

  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoList add={add} del={del}/>
      </header>
    </div>
  );
}

export default App;
