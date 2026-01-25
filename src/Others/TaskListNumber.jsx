import React from 'react'

export const TaskListNumber = ({data}) => {
  return (
    <div className='flex  mt-10 screen justify-between gap-5 bg-white'>
        <div className='w-[45%] rounded-xl bg-red-900  py-5 px-10' >
        <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='w-[45%] rounded-xl bg-yellow-900  py-5 px-10' >
        <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='w-[45%] rounded-xl bg-green-900  py-5 px-10' >
        <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='w-[45%] rounded-xl bg-blue-900  py-5 px-10' >
        <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'> New Task</h3>
        </div>
    </div>
  )
}
 