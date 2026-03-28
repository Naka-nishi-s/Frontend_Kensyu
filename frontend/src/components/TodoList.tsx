import { ListTodo } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <>
      <AnimatePresence initial={false}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </AnimatePresence>

      {todos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
            <ListTodo className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-500">No tasks yet. Add one above!</p>
        </motion.div>
      )}
    </>
  );
}
