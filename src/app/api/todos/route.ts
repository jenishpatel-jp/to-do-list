import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Todo from "@/models/Todo";

connectDB();

export async function GET(){
    try {
        const todos = await Todo.find();
        return NextResponse.json(todos);
    } catch (err){
        return NextResponse.json({message: "Todo not found", status: 404});
    }
};

export async function POST(request: Request){
    try{
        const { description, priority } = await request.json();
        const newTodo = new Todo({
            description, priority, completed: false,
        });
        await newTodo.save();
    } catch (err){
        return NextResponse.json({message: "Error creating todo", status: 500 })
    }
}