import React from 'react'
import { useState } from 'react'

export const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = ((e)=>{

        e.preventDefault()
        setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
        const data = JSON.parse(localStorage.getItem("employees"))
          data.forEach(function(e){
            if(asignTo == e.firstName){
                e.tasks.push(newTask)
                e.taskCounts.newTask = e.taskCounts.newTask + 1
                console.log(e)
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
        
        
        console.log("Task Created as Follows ",taskTitle,taskDescription,taskDate,asignTo,category)
        
    })
  return (
                <div>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full bg-red-900 items-start justify-between'>


                    <div className='w-1/2'>
                        <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='Make UI Design' /></div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}}  className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input value={asignTo} onChange={(e)=>{setAsignTo(e.target.value)}}  className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='Design,dev,etc' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}}  className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"  ></textarea>
                        <div>
                        <button className='py-3 bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5'>Create Task</button>
                    </div>
                    </div>
                    
                </form>
            </div>
  )
}
