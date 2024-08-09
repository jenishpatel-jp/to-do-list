import React from "react";
import { Todos } from '@/utils/listUtils';

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
  };

//Delete all todo function 
export const deleteAllTodo = async () => {

  try {
    const response = await fetch('/api/todos/delete-all', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok){
      throw new Error('Failed to delete all the todos')
    }

  }catch(error: any){
    console.error(error.message)
  }
}

//Handle deleting all the todos

export const handleDeleteAll = async (
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
  todos: Todos[],
  user: {
    id: string
  }
) => {
  if (user){
    await deleteAllTodo();
    setTodos(todos.filter(todo => todo.userId !== user?.id));
  }
};