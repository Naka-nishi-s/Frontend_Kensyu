interface TaskCountProps {
  count: number;
}

export default function TaskCount({ count }: TaskCountProps) {
  return (
    <span className="text-sm font-medium text-slate-500">
      {count} {count === 1 ? 'task' : 'tasks'}
    </span>
  );
}
