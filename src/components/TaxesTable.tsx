export default function TaxesTable({ taxes }: { taxes: any }) {
  if (!taxes) return null;
  return (
    <table>
      <tbody>
        <tr><td>IOF %</td><td>{taxes.iofPercent}</td></tr>
        <tr><td>IOF</td><td>{taxes.iof?.toFixed(2)}</td></tr>
        <tr><td>IR %</td><td>{(taxes.irRate * 100)?.toFixed(2)}</td></tr>
        <tr><td>IR</td><td>{taxes.ir?.toFixed(2)}</td></tr>
        <tr><td>Rendimento Líquido</td><td>{taxes.netIncome?.toFixed(2)}</td></tr>
        <tr><td>Final Líquido</td><td>{taxes.finalNet?.toFixed(2)}</td></tr>
      </tbody>
    </table>
  );
}