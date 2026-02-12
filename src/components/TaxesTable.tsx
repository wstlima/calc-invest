export default function TaxesTable({ taxes }: { taxes: any }) {
  if (!taxes) return null;
  return (
    <table className="w-full max-w-md mx-auto mb-6 bg-white rounded shadow text-sm">
      <tbody>
        <tr><td className="p-2 text-gray-500">IOF %</td><td className="p-2">{taxes.iofPercent}</td></tr>
        <tr><td className="p-2 text-gray-500">IOF</td><td className="p-2">{taxes.iof?.toFixed(2)}</td></tr>
        <tr><td className="p-2 text-gray-500">IR %</td><td className="p-2">{(taxes.irRate * 100)?.toFixed(2)}</td></tr>
        <tr><td className="p-2 text-gray-500">IR</td><td className="p-2">{taxes.ir?.toFixed(2)}</td></tr>
        <tr><td className="p-2 text-gray-500">Rendimento Líquido</td><td className="p-2">{taxes.netIncome?.toFixed(2)}</td></tr>
        <tr><td className="p-2 text-gray-500 font-bold">Final Líquido</td><td className="p-2 font-bold">{taxes.finalNet?.toFixed(2)}</td></tr>
      </tbody>
    </table>
  );
}