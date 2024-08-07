import React from "react";
import { Todos } from '@/utils/listUtils'

//handleSbumit function to create a new todo
export const handleSubmit =  async(
    description: string,
    setDescription: (description: string) => void,
    priority: string,
    setPriority: (priority: string) => void,
    user: {id: string},
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
    ) =>  {

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( { 
          userId: user.id,
          description, 
          priority,
          completed: false 
        }),
      });

      if (!response.ok){
        throw new Error('Failed to create todo');
      }

      const newTodo = await response.json();

      setTodos(prevTodos => [...prevTodos, newTodo])
      setDescription('');
      setPriority('Medium');
    } catch(error: any){
        console.error('Error creating todo:', error.message);
    }
  }