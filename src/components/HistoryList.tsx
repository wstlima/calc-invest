export default function HistoryList({ history, onSelect }: { history: any[]; onSelect: (id: string) => void }) {
  return (
    <ul className="space-y-2 max-w-2xl mx-auto">
      {history?.map(h => (
        <li key={h.id}>
          <button
            onClick={() => onSelect(h.id)}
            className="w-full text-left bg-white rounded shadow px-4 py-2 hover:bg-blue-50 transition border border-gray-200"
          >
            <span className="font-medium text-blue-700">{h.name}</span>
            <span className="ml-2 text-xs text-gray-500">{new Date(h.createdAt).toLocaleDateString()}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}