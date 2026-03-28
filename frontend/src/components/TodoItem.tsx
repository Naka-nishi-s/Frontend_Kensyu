import { Trash2, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <motion.div
      key={todo.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      className={`group flex items-center gap-3 p-4 rounded-xl border transition-all ${
        todo.completed
          ? 'bg-slate-50 border-slate-100 opacity-75'
          : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200'
      }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`transition-colors ${todo.completed ? 'text-indigo-500' : 'text-slate-300 hover:text-indigo-400'}`}
      >
        {todo.completed ? (
          <CheckCircle2 className="w-6 h-6 fill-indigo-50" />
        ) : (
          <Circle className="w-6 h-6" />
        )}
      </button>

      <span className={`flex-1 text-base transition-all ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all p-1"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
