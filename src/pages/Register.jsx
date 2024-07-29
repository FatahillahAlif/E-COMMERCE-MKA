import React from 'react'
import FormComp from '../components/Form';
import FormReg from '../components/FormReg';
import FormRegComp from '../components/FormReg';

function Login() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-3xl pt-8'>
        REGISTER
      </h1>
      <FormRegComp/>
    </div>
  )
}

export default Login;