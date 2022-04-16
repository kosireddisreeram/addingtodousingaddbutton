import { useState } from "react";
import React from "react";
// import TodoList from "./TodoList";

 const Todo = () =>{
     const [task,setTask]=useState("");
     const [todo,setTodo]=useState([]);

     // we can use the useState or react.useState
     const handleChange=(e) =>{
         console.log("changing input",e.target.value);
      setTask(e.target.value);
     }
     const handleClick=()=>{
           setTodo([...todo,task])
     }
    return (
        <>
        <h1>Todo</h1>
        <input type={"text"} value ={task} placeholder ="enter your task" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        {todo.map((item)=>{
            return <h1>{item}</h1>
        })}
        <button>Delete</button>
        </> 
    )
}