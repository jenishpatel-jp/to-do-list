import React from 'react'
import { Todos } from '@/utils/listUtils'
import { RotateCcw, Trash } from 'lucide-react';

interface CompletedTodos{
    todos: Todos[];
}

const Completed: React.FC<CompletedTodos> = ( {todos} ) => {

    const listCompleted = todos.map(todo => todo.completed ? (
    <div key={todo._id} className='bg-green-500 flex p-2 m-2 items-center justify-between'>
        <p className='flex' >{ todo.description }</p>
        <div className='flex w-16 h-9 items-center justify-between mr-5'>
            <RotateCcw className=''/>
            <Trash className=''/>
        </div>
    </div>
    ):
    (<></>)
    
    );

    return (
        <div>
            <h1 className='text-2xl p-2 m-2'>Completed</h1>
            <div className='border border-white p-2 m-2'>
                {listCompleted}
            </div>
        </div>
    )
}

export default Completed