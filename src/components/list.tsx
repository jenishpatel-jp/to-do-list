import React, { useState, useEffect } from 'react'
import { Todos, getTodos, todoBgColor, updatePriority } from '../lib/utils';

interface ListProps{
  priority: string;
  setPriority: (priority: string) => void;
}

const List: React.FC<ListProps> = ( {priority, setPriority} ) => {

  const [todos, setTodos] = useState<Todos[]> ([]);
  
  useEffect(() => {
    getTodos(setTodos);
  }, []);

  const handlePriorityChange = async (id: number, newPriority: string) => {
    await updatePriority(id, newPriority);
    setTodos(todos.map(todo => todo._id === id ? { ...todo, priority: newPriority } : todo));
  }

  const listTodos = todos.map(todo =>
    <div className={`flex border ${todoBgColor(todo.priority)} m-2 rounded-lg`}>
      <p className='flex flex-1 m-2 p-2' >{todo.description}</p> 
      <select 
        id='priority'
        value={todo.priority}
        onChange={(e) => handlePriorityChange(todo._id, e.target.value)}
        className={`${todoBgColor(todo.priority)}`}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
      </select>
      <input type='checkbox' className='w-5 p-2 mr-2'/>
    </div>
  )

  return (
    <div className='justify-center border border-white p-2 m-2 flex-1'>
        {listTodos}
    </div>
  )
}

export default List