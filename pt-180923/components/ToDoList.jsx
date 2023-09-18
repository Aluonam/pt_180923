import React from 'react'

const ToDoList = ({taskList}) => {

    const list = taskList.map((actualElement=>{
        return(
        <ul>
            <li>{actualElement}</li>
        </ul>
        )
    }))
  return (
    <div>{list}</div>
  )
}

export default ToDoList