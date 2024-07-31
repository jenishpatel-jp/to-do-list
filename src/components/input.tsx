'use client'

import React from 'react'
import { Button } from './ui/button'

const Input = () => {

  const handleClick = () => {
    console.log("Add button has been pressed.");
  }

  return (
    <div className='flex justify-center p-2 m-2 flex-1 border border-white items-center'>
        <input className='rounded-md m-3 p-3 w-1/3 text-center border border-white text-black' placeholder='Add things you need to do...' />
        <Button className='bg-green-400 m-3 p-3 border border-white' onClick={() => handleClick()}>Add</Button>
    </div>
  )
}

export default Input