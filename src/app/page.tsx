'use client'

import List from "@/components/list";
import TodoForm from "../components/todoForm";
import { useState, useEffect } from "react";

export default function Home() {

  
  useEffect(() => {
    const fetchTestConnection = async () => {
      try {
        const response = await fetch('/api/connect');
        const result = await response.json();
        console.log(result)
      } catch (error){
        console.error(error)
      }
    }
    fetchTestConnection();
  }, [])



  return (
    <main>
      <h1 className="flex justify-center p-4 m-4 text-5xl">To-do List</h1>
      <TodoForm/>
      <List />
      {/* Table of completed Todos */}
    </main>
  );
}
