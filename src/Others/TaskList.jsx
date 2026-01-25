import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import { FailedTask } from '../TaskList/FailedTask'
export const TaskList = ({ data }) => {
    return (
        <div id='TaskList' className=' flex justify-start items-center gap-5 h-[55%] w-full  mt-10 flex-nowrap overflow-x-auto' >
            {data.tasks.map((e,idx)=>{
                if(e.active){
                    return <AcceptTask key={idx} data={e}/>
                }
                if(e.newTask){
                    return <NewTask key={idx} data={e}/>
                }
                if(e.completed){
                    return <CompleteTask key={idx} data={e}/>
                }
                if(e.failed){
                    return <FailedTask key={idx} data={e}/>
                }
            })}
            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet!</p>
            </div> */}
            {/* <AcceptTask /> */}

            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet!</p>
            </div> */}
            {/* <NewTask /> */}
            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet!</p>
            </div> */}
            <CompleteTask />

            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet!</p>
            </div> */}
            {/* <FailedTask /> */}
            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex p-5 justify-between items-center'>
                    <h3 className='rounded-xl py-1 px-3 bg-red-900'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet!</p>
            </div> */}
        </div>
    )
}
