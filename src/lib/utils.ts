import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export interface Todos {
  _id: number;
  userId: string;
  description: string;
  priority: string;
  completed: boolean;
}

//Async function to retrieve todos from the database 
export const getTodos = async (
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
) => {
  const response = await fetch('/api/todos');
      if(!response.ok){
        throw new Error ('Failed to fetch todos');
      }
      const json = await response.json();
      setTodos(json);
};

//Updated the background colour of the todos based on thier priority
export const todoBgColor = (priority: string) => {
  switch (priority){
    case 'High':
      return 'bg-red-600';
    case 'Medium':
      return 'bg-orange-600';
    case 'Low':
      return 'bg-green-600';
    default:
      return 'bg-green-600';
  } 
}

//Function to update the priority of the todo
export const updatePriority = async (id: number, priority: string) => {
  
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({priority})
    });

    if (!response.ok){
      throw new Error('Failed to update priority');
    }

  } catch(error:any){
    console.error(error.message);
  }
}