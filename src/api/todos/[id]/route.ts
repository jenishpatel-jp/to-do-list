import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Todo from '@/models/Todo';

connectDB();

export async function PATCH(request: Request, { params }: { params: { id: string} }){
    const { id } = params;

    try {
        const todo = await Todo.findById(id);
        if (!todo){
            return console.error("error")
        }

        todo.completed = !todo.completed;
        await todo.save();

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.error()
    }
};

export async function DELETE(request: Request, {params}: { params: {id:string} } ){
    const { id } = params;

    try {
        await Todo.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Todo deleted' })
    }catch (error){
        return NextResponse.error();
    }
};