export default function ResultsCards({ fixedNet, variableMean, diffPercent, p10, p90 }: any) {
  return (
    <div className="flex gap-2">
      <div>Fixo Líquido: {fixedNet?.toFixed(2)}</div>
      <div>Variável Média: {variableMean?.toFixed(2)}</div>
      <div>Diferença %: {diffPercent?.toFixed(2)}%</div>
      <div>P10: {p10?.toFixed(2)}</div>
      <div>P90: {p90?.toFixed(2)}</div>
    </div>
  );
}