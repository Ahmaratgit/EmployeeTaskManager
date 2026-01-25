import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

export const AllTask = () => {
    const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5  mt-5 h-48  '>
        <div className='bg-red-400 mt-3 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-red-700'>Employee Name</h2>
            <h3 className='w-1/5 bg-red-700'>New Task</h3>
            <h5 className='w-1/5 bg-red-700'>Active Task</h5>
            <h5 className='w-1/5 bg-red-700'>Completed Task</h5>
            <h5 className='w-1/5 bg-red-700'>Failed Task</h5>

        </div>
        <div className='h-[80%] overflow-auto  '>
            {authData.employees.map(function(e,idx){

            return <div key={idx} className='bg-red-400 mt-3 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-red-700'>{e.firstName}</h2>
            <h3 className='w-1/5 bg-red-700'>{e.taskCounts.newTask}</h3>
            <h5 className='w-1/5 bg-red-700'>{e.taskCounts.active}</h5>
            <h5 className='w-1/5 bg-red-700'>{e.taskCounts.completed}</h5>
            <h5 className='w-1/5 bg-red-700'>{e.taskCounts.failed}</h5>

        </div>
        })}
        </div>
    </div>
  )
}
 