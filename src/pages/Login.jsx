import React from 'react'
import FormComp from '../components/Form';

function Login() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-3xl pt-8'>
        LOGIN
      </h1>
      <FormComp/>
    </div>
  )
}

export default Login;