import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }
    return (
        <div className='flex items-center justify-center h-screen w-screen' >
            <div className='border-2 border-red-500 p-20 rounded-xl ' >
                <p className='' >LogIn Page</p>
                <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col justify-center items-center' >
                    <input 
                    required value={email} 
                    className=' py-3 px-5 border border-red-600 rounded-full outline-none bg-transparent placeholder:text-gray-300 text-xl' type="email" name="" id="" placeholder='Email' 
                    onChange={(e) => { setEmail(e.target.value) }} />

                    <input 
                    required value={password} 
                    className=' mt-3 py-3 px-5 border border-red-600 rounded-full outline-none bg-transparent placeholder:text-gray-300 text-xl' type="password" name="" id="" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className=' mt-7 py-3 px-5 border-none border-red-600 rounded-full outline-none bg-emerald-500 text-xl w-64'>Submit</button>
                </form>

            </div>
        </div>
    )
}
export default Login
