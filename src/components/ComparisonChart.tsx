export default function ComparisonChart({ fixedSeries, variableSeries }: { fixedSeries: any[]; variableSeries: any[] }) {
  // Placeholder: exibe valores finais
  return (
    <div>
      <h3>Gráfico (placeholder)</h3>
      <div>Fixo: {fixedSeries?.[fixedSeries.length - 1]?.balance?.toFixed(2)}</div>
      <div>Variável: {variableSeries?.[variableSeries.length - 1]?.balance?.toFixed(2)}</div>
    </div>
  );
}