import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Todo from '@/models/Todo';

connectDB();

export async function PATCH(request: Request, { params }: { params: { id: string} }){
    const { id } = params;

    try {
        const todo = await Todo.findById(id);
        if (!todo){
            return NextResponse.json({ message: "Todo not found", error: 500 })
        }

        todo.completed = !todo.completed;
        await todo.save();

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json({ message: "Error updateing todo", error: 500 })
    }
};

export async function DELETE(request: Request, {params}: { params: {id: string} } ){
    const { id } = params;

    try {
        await Todo.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Todo deleted' })
    }catch (error){
        return NextResponse.json( { message: 'Error deleteing todo' });
    }
};