export default function HistoryList({ history, onSelect }: { history: any[]; onSelect: (id: string) => void }) {
  return (
    <ul>
      {history?.map(h => (
        <li key={h.id}>
          <button onClick={() => onSelect(h.id)}>{h.name} - {new Date(h.createdAt).toLocaleDateString()}</button>
        </li>
      ))}
    </ul>
  );
}