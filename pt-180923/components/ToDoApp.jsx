import React, {useEffect, useState} from 'react'
import ToDoList from './ToDoList'

const ToDoApp = () => {

    const [taskList, setTaskList] = useState([])
    const [inputUserData, setInputUIserData] = useState("")

    useEffect(() => {
        const taskLocal = JSON.parse(localStorage.getItem("listOfTasks"))
        if (taskLocal !== null)setTaskList(taskLocal)
    }, [])
    
    const addTaksListToLocal = (value)=>{localStorage.setItem("listOfTasks",JSON.stringify(value))}

    const handleAddTask = ()=>{
        setTaskList([...taskList,inputUserData])
        setInputUIserData("")
        addTaksListToLocal([...taskList,inputUserData])
    }

  return (
    <>
    <input type='text' onChange={(e)=>{setInputUIserData(e.target.value)}} value={inputUserData}></input>
    <button onClick={handleAddTask}>Send</button>
    <ToDoList taskList={taskList} setTaskList={setTaskList}></ToDoList>
    </>
  )
}

export default ToDoApp