import { useUser } from "@clerk/nextjs";
const { user } = useUser();

//handleSbumit function to create a new todo
export const handleSubmit =  (
    description: string,
    setDescription: (description: string) => void,
    priority: string,
    setPriority: (priority: string) => void
    ) => async (e: React.FormEvent) => {

    e.preventDefault();

    if (!user) {
      return;
    }

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( { 
          userId: user.id,
          description, 
          priority }),
      });

      if (!response.ok){
        throw new Error('Failed to create todo');
      }
      setDescription('');
      setPriority('Medium');
    } catch(error: any){
        console.error(error.message);
    }
  }