'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { useUser } from '@clerk/nextjs';

interface TodoFormProps{
  description: string;
  setDescription: (description: string) => void;
  priority: string;
  setPriority: (priority: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ( {description, setDescription} ) => {

  const { isSignedIn, user } = useUser();
  const [priority, setPriority] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!user) {
      setError('You must be logged in to add a todo');
      return;
    }

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( { 
          userId: user.id,
          description, 
          priority }),
      });

      if (!response.ok){
        throw new Error('Failed to create todo');
      }

      setDescription('');
      setPriority('Medium');
      setSuccess(true);
    } catch(error: any){
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='border border-white p-2 m-2 flex justify-center'>
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