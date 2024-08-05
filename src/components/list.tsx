import React, { useState } from 'react'

interface Todos {
  _id: number;
  userId: string;
  descrpition: string;
  priority: string, 
  completed: boolean,
}

const List = () => {

  const [todos, setTodos] = useState<Todos | []> ([]);

  const getTodos = async () => {
    const response = await fetch('/api/todos');
    if(!response.ok){
      throw new Error ('Failed to fetch todos');
    } 
    const json = await response.json();
    console.log(json);
    setTodos(json);
  }

  getTodos();

  return (
    <div className='justify-center'>

    </div>
  )
}

export default List