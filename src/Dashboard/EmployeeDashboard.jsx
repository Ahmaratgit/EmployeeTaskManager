import React from 'react'
import Header from '../Others/Header'
import { TaskListNumber } from '../Others/TaskListNumber'
import { TaskList } from '../Others/TaskList'

export const EmployeeDashboard = (props) => {

  return (
   <div className='p-7 bg-[#1C1C1C] h-screen' >
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
   </div>
  )
}  