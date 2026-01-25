import React from 'react'

export const FailedTask = ({data}) => {
    
  return (
                    <div className='h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                <div className='mt-2'>
                    <button className='w-full'>Failed</button>
                </div>

            </div>
  )
}
