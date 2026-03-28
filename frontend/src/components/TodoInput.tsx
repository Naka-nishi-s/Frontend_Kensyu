interface TodoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TodoInput({ value, onChange }: TodoInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Add a new task..."
      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
    />
  );
}
