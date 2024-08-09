import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Todo from '@/models/Todo';

export async function DELETE(request: Request){
    try{
        const { userId } = await request.json();

        if (!userId){
            return NextResponse.json({ error: 'User ID is required'}, { status: 400 })
        };

        await connectDB();
        await Todo.deleteMany({ userId });
        return NextResponse.json({ message: "All todos deleted" });
    } catch(error){
        return NextResponse.json({ message: "Error deleting all todos" });
    }
};