import React from 'react'

const List = () => {
  return (
    <div className='justify-center border border-white p-2 m-2 grid grid-cols-6'>
            <h2 className='col-span-4'>Description</h2>
            <h2 className='col-span-1'>Priority</h2>
            <h2 className='col-span-1 justify-center text-center'>Status</h2>
            <h2 className='col-span-4'>To-do 1</h2>
            <h2 className='col-span-1'>High</h2>
            <input type='checkbox' className='p-2'/>
            <h2 className='col-span-4'>To-do 2</h2>
            <h2 className='col-span-1'>Medium</h2>
            <input type='checkbox' className='p-2'/>
            <h2 className='col-span-4'>To-do 2</h2>
            <h2 className='col-span-1'>Low</h2>
            <input type='checkbox' className='p-2'/>
    </div>
  )
}

export default List