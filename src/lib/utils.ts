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