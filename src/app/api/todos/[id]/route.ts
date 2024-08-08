import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Todo from '@/models/Todo';


export async function PATCH(request: Request, { params }: { params: { id: string} }){
    const { id } = params;

    try {
        await connectDB();
        const todo = await Todo.findById(id);
        if (!todo){
            return NextResponse.json({ message: "Todo not found", error: 500 })
        }
        
        const body = await request.json();
        const { priority, completed } = body;

        if (priority !== undefined){
            todo.priority = priority;
        }

        if (completed !== undefined){
            todo.completed = completed;
        }

        await todo.save();

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json({ message: "Error updateing todo", error: 500 })
    }
};

export async function DELETE(request: Request, {params}: { params: {id: string} } ){
    const { id } = params;
    
    try {
        await connectDB();
        await Todo.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Todo deleted' })
    }catch (error){
        return NextResponse.json( { message: 'Error deleteing todo' });
    }
};