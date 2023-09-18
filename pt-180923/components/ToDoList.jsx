import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({taskList}) => {

    const list = taskList.map((actualElement=>{
        return(
        <ul>
            <ToDoItem actualTask={actualElement}></ToDoItem>
        </ul>
        )
    }))
  return (
    <div>{list}</div>
  )
}

export default ToDoList