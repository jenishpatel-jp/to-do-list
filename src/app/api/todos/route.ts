import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Todo from "@/models/Todo";

export async function GET(){
    try {
        await connectDB();
        const todos = await Todo.find();
        return NextResponse.json(todos);
    } catch (err){
        return NextResponse.json({message: "Todo not found", status: 404});
    }
};

export async function POST(request: Request){
    try{
        await connectDB();
        const { userId, description, priority } = await request.json();
        const newTodo = new Todo({
            userId,
            description, 
            priority, 
            completed: false,
        });
        const savedTodo = await newTodo.save();
        return NextResponse.json(savedTodo, { status: 201 });
    } catch (err){
        return NextResponse.json({message: "Error creating todo", status: 500 });
    }
}