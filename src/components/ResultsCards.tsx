export default function ResultsCards({ fixedNet, variableMean, diffPercent, p10, p90 }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500">Fixo Líquido</div>
        <div className="text-lg font-bold text-blue-700">{fixedNet?.toFixed(2)}</div>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500">Variável Média</div>
        <div className="text-lg font-bold text-green-700">{variableMean?.toFixed(2)}</div>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500">Diferença %</div>
        <div className="text-lg font-bold text-indigo-700">{diffPercent?.toFixed(2)}%</div>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500">P10</div>
        <div className="text-lg font-bold text-orange-700">{p10?.toFixed(2)}</div>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500">P90</div>
        <div className="text-lg font-bold text-orange-700">{p90?.toFixed(2)}</div>
      </div>
    </div>
  );
}