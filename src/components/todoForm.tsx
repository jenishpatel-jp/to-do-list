'use client'
import { useUser } from "@clerk/nextjs";
import React from 'react';
import { Button } from './ui/button';
import { handleSubmit } from '@/utils/todoUtils';
import { Todos } from '@/utils/listUtils'
import { handleDeleteAll } from "@/utils/todoUtils";

interface TodoFormProps{
  description: string;
  setDescription: (description: string) => void;
  priority: string;
  setPriority: (priority: string) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  todos: Todos[];
}

const TodoForm: React.FC<TodoFormProps> = ({
  description, 
  setDescription, 
  priority, 
  setPriority, 
  setTodos,
  todos
}) => {

  const { user } = useUser();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user){
      handleSubmit(description, setDescription, priority, setPriority, user, setTodos)
    } else {
      throw new Error("Please login to create a todo");
    }
  }

  const handleReset = () => {
    if (user && user.id) {
      handleDeleteAll(setTodos, todos, { id: user.id });
    } else {
      throw new Error("Please login to reset todos");
    }
  };

  
  return (
    <form onSubmit={onSubmit} className= 'p-2 m-2 flex justify-center border-4 border-gray-200 shadow-lg rounded-lg'>
      <div className='flex items-center p-2 w-3/4'>
        <label htmlFor='description' className='p-2'>Description:</label>
        <input
          type='text'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className='text-black w-full border border-gray-400'
        />
      </div>
      <div className='flex items-center space-x-2'>
        <label htmlFor='priority' className='p-2'>Priority:</label>
        <select
          id='priority'
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className='text-black p-1 m-2 rounded-md'
          required
        >
          <option>--Select--</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
          
        </select>
      </div>
      <Button type='submit' className='m-2 p-2 bg-green-400 hover:bg-green-700 rounded-lg'>Add Todo</Button>
      <Button 
        className='m-2 p-2 bg-red-400 hover:bg-red-700 rounded-lg'
        onClick={handleReset}
        >Reset
      </Button>
    </form>
  )
}

export default TodoForm;