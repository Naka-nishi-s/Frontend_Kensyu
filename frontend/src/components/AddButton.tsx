import { Plus } from 'lucide-react';

export default function AddButton() {
  return (
    <button
      type="submit"
      className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl shadow-md shadow-indigo-100 transition-colors flex items-center justify-center"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
