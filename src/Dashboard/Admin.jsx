import React from 'react'
import Header from '../Others/Header'
import { CreateTask } from '../Others/CreateTask'
import { AllTask } from '../Others/AllTask'

export const Admin = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser}/>
            <CreateTask />
            <AllTask />

        </div>
    )
}

