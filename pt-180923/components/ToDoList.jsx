import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({taskList, setTaskList}) => {

    const deleteTask = (actualElement) => {
        const newTaskList = taskList.filter((item)=>item !== actualElement)
        setTaskList(newTaskList)
        localStorage.setItem("listOfTasks",JSON.stringify(newTaskList))

    }

    const list = taskList.map((actualElement, index)=>{
        return(
        <ul>
            <ToDoItem actualTask={actualElement}></ToDoItem>
            <button onClick={()=>{deleteTask(actualElement)}}>Eliminar</button>
        </ul>
        )
    })

  return (
    <div>{list}</div>
  )
}

export default ToDoList