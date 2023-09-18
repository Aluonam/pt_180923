import React, {useEffect, useState} from 'react'

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
    <div>ToDoApp</div>
    <input type='text' onChange={(e)=>{setInputUIserData(e.target.value)}} value={inputUserData}></input>
    <button onClick={handleAddTask}>Send</button>
    </>
  )
}

export default ToDoApp