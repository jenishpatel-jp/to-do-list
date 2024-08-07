import React from 'react'
import { Todos, todoBgColor, handlePriorityChange } from '../utils/listUtils';

interface ListProps{
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const List: React.FC<ListProps> = ( {todos, setTodos} ) => {
  const listTodos = todos.map(todo =>
    <div key={todo._id} className={`flex border ${todoBgColor(todo.priority)} m-2 rounded-lg`}>
      <p className='flex flex-1 m-2 p-2' >{todo.description}</p> 
      <select 
        id='priority'
        value={todo.priority}
        onChange={(e) => handlePriorityChange(todo._id, e.target.value, setTodos, todos)}
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