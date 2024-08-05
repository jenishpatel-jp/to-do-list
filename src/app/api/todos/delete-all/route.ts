import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Todo from '@/models/Todo';

connectDB();

export async function DELETE(){
    try{
        await Todo.deleteMany({});
        return NextResponse.json({ message: "All todos deleted" });
    } catch(error){
        return NextResponse.json({ message: "Error deleting all todos" })
    }
};