//Todos interface
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
        return 'bg-orange-500';
      case 'Low':
        return 'bg-yellow-400';
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

//Updated the todo state and renders the todos
export const handlePriorityChange = async (
    id: number, 
    newPriority: string,
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
    todos: Todos[]
) => {
    await updatePriority(id, newPriority);
    setTodos(todos.map(todo => todo._id === id ? { ...todo, priority: newPriority } : todo));
  }

//Function to update the completed status 
export const updateStatus = async (
    id: number, 
    completed: boolean,

) => {
    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed })
        });

        if (!response.ok){
          throw new Error('Failed  to update priority');
        }
    } catch(error:any){
        console.error(error.message)
    }
}

//Update the todo list 
export const handleStatusChange = async (
  id: number, 
  updatedStatus: boolean, 
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
  todos: Todos[]
) => {
  await updateStatus(id, updatedStatus);
  setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: updatedStatus } : todo));
};


//Sort Object

export const priorityOrder: { [key in Todos['priority']]: number } = {
  'High':1, 
  'Medium':2,
  'Low':3
};

//Sort function 
export const comparePriority = (a:Todos, b:Todos) => {
  return priorityOrder[a.priority] - priorityOrder[b.priority];
}
