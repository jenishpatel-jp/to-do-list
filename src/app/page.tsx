'use client'

import List from "@/components/list";
import TodoForm from "../components/todoForm";
import { useState, useEffect } from "react";

export default function Home() {

  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  return (
    <main className="flex flex-col flex-1 h-full">
      <h1 className="flex justify-center p-4 m-4 text-5xl">To-do List</h1>
      <TodoForm 
        description={description} 
        setDescription={setDescription} 
        priority={priority}
        setPriority={setPriority}
      />
      <List 
        priority={priority}
        setPriority={setPriority}
      />
    </main>
  );
}
