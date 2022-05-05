import { getDefaultNormalizer } from '@testing-library/react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () => {
    var navigate = useNavigate()
    //const [email, setemail] = useState('yaksh134@gmail.com')
    //const [password, setpassword] = useState('1234')
    const lf = () =>{
        sessionStorage.setItem('email','yaksh134@gmail.com')
        navigate('/list')
    }
   
  return (
    <div>
        <h1>Doctor Login</h1>
        <button onClick={lf}>LOGIN HERE</button>
        
    </div>
  )
}
