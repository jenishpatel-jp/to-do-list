import { Todos } from "./listUtils";

//Delete function
export const deleteTodo = async (id: number) => {

    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete todo');
        }

    } catch(error:any){
        console.error(error.message);
    }

}

//Handle deleting the todo
export const handleDeleteTodo = async (
    id: number, 
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
    todos: Todos[]
) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => id !== todo._id));
}