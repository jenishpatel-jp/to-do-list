import React from 'react'
import { Todos, handleStatusChange } from '@/utils/listUtils'
import { RotateCcw, Trash } from 'lucide-react';
import { handleDeleteTodo } from '@/utils/completedUtils';
import { useUser } from '@clerk/nextjs'

interface CompletedTodos{
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
};

const Completed: React.FC<CompletedTodos> = ( {todos, setTodos} ) => {

    const { user } = useUser();

    const listCompleted = todos.map(todo => todo.completed && user?.id === todo.userId ? (
    <div key={todo._id} className='bg-green-500 flex p-2 m-2 items-center justify-between rounded-lg shadow-lg'>
        <p className='flex font-semibold' >{ todo.description }</p>
        <div className='flex w-16 h-9 items-center justify-between mr-5'>
            <button
                onClick={()=> handleStatusChange(todo._id, !todo.completed, setTodos, todos)}
            >
                <RotateCcw className='hover:w-10 hover:h-10'/>
            </button>
            <button
                onClick={()=> handleDeleteTodo(todo._id, setTodos, todos)}
            >
                <Trash className='hover:w-8 hover:h-8'/>
            </button>
        </div>
    </div>
    ):
    (<></>)
    );

    return (
        <div className='border border-gray-200 shadow-lg p-2 m-2 rounded-lg'>
            <h1 className='text-2xl p-2 m-2'>Completed</h1>
            <div className='p-2 m-2'>
                {listCompleted}
            </div>
        </div>
    )
}

export default Completed