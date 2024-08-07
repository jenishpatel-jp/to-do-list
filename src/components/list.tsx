import React from 'react'
import { Todos, todoBgColor, handlePriorityChange, handleStatusChange } from '../utils/listUtils';
import { CircleCheckBig } from 'lucide-react'

interface ListProps{
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const List: React.FC<ListProps> = ( {todos, setTodos} ) => {
  const listTodos = todos.map(todo =>
    <div key={todo._id} className={`flex border ${todoBgColor(todo.priority)} m-2 rounded-lg opacity-85`}>
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
      <button 
        className={`mx-7`} 
        onClick={()=> handleStatusChange(todo._id, todo.completed, setTodos, todos)}
        >
        <CircleCheckBig size={28} className='hover:w-10 hover:h-10'/>
      </button>
    </div>
  )

  return (
    <div className='justify-center border border-white p-2 m-2 flex-1'>
        {listTodos}
    </div>
  )
}

export default List