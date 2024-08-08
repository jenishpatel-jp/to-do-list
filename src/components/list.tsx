import React from 'react'
import { Todos, todoBgColor, handlePriorityChange, handleStatusChange, comparePriority } from '../utils/listUtils';
import { CircleCheckBig } from 'lucide-react'
import { useUser } from '@clerk/nextjs';

interface ListProps{
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

const List: React.FC<ListProps> = ( {todos, setTodos} ) => {

  const { user } = useUser();

  const sortedTodos = todos.sort(comparePriority);

  const listTodos = sortedTodos.map(todo => !todo.completed && user?.id === todo.userId ? (
    <div key={todo._id} className={`flex ${todoBgColor(todo.priority)} m-2 rounded-lg opacity-85 shadow-lg`}>
      <p className='flex flex-1 m-2 p-2 font-semibold' >{todo.description}</p> 
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
        onClick={()=> handleStatusChange(todo._id, !todo.completed, setTodos, todos)}
        >
        <CircleCheckBig size={28} className='hover:w-8 hover:h-8'/>
      </button>
    </div>
  ):(<></>));

  return (
    <div className='justify-center p-2 m-2 flex-1 shadow-lg border-2 border-gray-200 rounded-lg'>
        {listTodos}
    </div>
  )
}

export default List