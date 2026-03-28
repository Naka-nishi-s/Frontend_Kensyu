import { ListTodo } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-8 flex items-center gap-3">
      <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-200">
        <ListTodo className="text-white w-6 h-6" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-slate-800">My Tasks</h1>
    </header>
  );
}
