import { useState, useEffect, FormEvent } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import AddButton from './components/AddButton';
import TaskCount from './components/TaskCount';
import CompletedCount from './components/CompletedCount';
import TodoList from './components/TodoList';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <Header />

        <form onSubmit={addTodo} className="mb-8 flex gap-2">
          <TodoInput value={inputValue} onChange={setInputValue} />
          <AddButton />
        </form>

        <div className="space-y-3">
          <div className="flex justify-between items-center px-1 mb-2">
            <TaskCount count={todos.length} />
            <CompletedCount completedCount={completedCount} totalCount={todos.length} />
          </div>

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
