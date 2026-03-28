interface CompletedCountProps {
  completedCount: number;
  totalCount: number;
}

export default function CompletedCount({ completedCount, totalCount }: CompletedCountProps) {
  if (totalCount === 0) return null;

  return (
    <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
      {completedCount} / {totalCount} done
    </span>
  );
}
