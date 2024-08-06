'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { handleSubmit } from '@/utils/todoUtils';

interface TodoFormProps{
  description: string;
  setDescription: (description: string) => void;
  priority: string;
  setPriority: (priority: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ( {description, setDescription} ) => {

  const [priority, setPriority] = useState<string>('');

  return (
    <form onSubmit={handleSubmit(description, setDescription, priority, setPriority)} className='border border-white p-2 m-2 flex justify-center'>
      <div className='flex items-center p-2 w-3/4'>
        <label htmlFor='description' className='p-2'>Description:</label>
        <input
          type='text'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className='text-black w-full border border-white'
        />
      </div>
      <div className='flex items-center space-x-2'>
        <label htmlFor='priority' className='p-2'>Priority:</label>
        <select
          id='priority'
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className='text-black p-1 m-2 rounded-md'
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>
      </div>
      <Button type='submit' className='m-2 p-2 bg-green-400 hover:bg-green-700'>Add Todo</Button>
    </form>
  )
}

export default TodoForm;