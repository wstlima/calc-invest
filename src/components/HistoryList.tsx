  export default function HistoryList({ history, onSelect }: { history: any[]; onSelect: (id: string) => void }) {
    return (
      <section className="mb-10">
        <ul className="space-y-4 max-w-2xl mx-auto">
          {history?.map(h => (
            <li key={h.id}>
              <button
                onClick={() => onSelect(h.id)}
                className="w-full text-left bg-white rounded-xl border border-gray-200 shadow-lg px-6 py-4 hover:bg-blue-50 transition flex items-center justify-between"
              >
                <span className="font-semibold text-blue-800 text-lg">{h.name}</span>
                <span className="text-xs text-gray-500 font-medium">{new Date(h.createdAt).toLocaleDateString()}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }