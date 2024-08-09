'use client'

import List from "@/components/list";
import TodoForm from "../components/todoForm";
import { useState, useEffect } from "react";
import { Todos, getTodos } from '../utils/listUtils';
import Completed from "@/components/completed";
export default function Home() {

  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]> ([]);

  useEffect(() => {
    getTodos(setTodos)
  }, []);

  return (
    <main className="flex flex-col flex-1 h-full">
      <h1 className="flex justify-center p-4 m-4 text-5xl text-blue-500 font-semibold drop-shadow-lg">Your To-do's</h1>
      <TodoForm 
        description={description} 
        setDescription={setDescription} 
        priority={priority}
        setPriority={setPriority}
        setTodos={setTodos}
        todos={todos}
      />
      <List 
        todos={todos}
        setTodos={setTodos}
      />
      <Completed 
        todos={todos}
        setTodos={setTodos}
      />
    </main>
  );
}
