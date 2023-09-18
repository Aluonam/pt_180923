import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({taskList, setTaskList}) => {

    const deleteTask = (actualElement) => {
        const newTaskList = taskList.filter((item)=>item !== actualElement)
        setTaskList(newTaskList)
        
    }


    const list = taskList.map((actualElement=>{
        return(
        <ul>
            <ToDoItem actualTask={actualElement}></ToDoItem>
            <button onClick={()=>{deleteTask(actualElement)}}>Eliminar</button>
        </ul>
        )
    }))
  return (
    <div>{list}</div>
  )
}

export default ToDoList