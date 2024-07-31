import List from "@/components/list";
import Input from "../components/input";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center p-4 m-4 text-5xl">To-do List</h1>
      <Input />
      <List />
      {/* Table of completed Todos */}
    </main>
  );
}
