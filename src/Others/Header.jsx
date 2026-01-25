import React, { useState } from 'react'
import { setLocalStorage } from '../Utils/localStorage'

const Header = (props) => {
    // const [username, setUsername] = useState('')
    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }
    const logOutUser=()=>{
        localStorage.setItem('loggegInUser','')
        // window.location.reload()
        props.changeUser('')
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium' >Hello <br /><span className='text-3xl font-semibold'> username さん👋</span></h1>
            <button onClick={logOutUser}  className='bg-red-500 rounded-sm font-medium text-white px-5 py-2'>Logout</button>
        </div>
    )
}
export default Header
