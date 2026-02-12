  export default function TaxesTable({ taxes }: { taxes: any }) {
    if (!taxes) return null;
    return (
      <section className="mb-10">
        <div className="max-w-md mx-auto">
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-8">
            <table className="w-full text-base">
              <tbody>
                <tr>
                  <td className="py-2 px-3 text-gray-600 font-medium">IOF %</td>
                  <td className="py-2 px-3 text-right text-gray-900">{taxes.iofPercent}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-gray-600 font-medium">IOF</td>
                  <td className="py-2 px-3 text-right text-gray-900">{taxes.iof?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-gray-600 font-medium">IR %</td>
                  <td className="py-2 px-3 text-right text-gray-900">{(taxes.irRate * 100)?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-gray-600 font-medium">IR</td>
                  <td className="py-2 px-3 text-right text-gray-900">{taxes.ir?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-gray-600 font-medium">Rendimento Líquido</td>
                  <td className="py-2 px-3 text-right text-gray-900">{taxes.netIncome?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-blue-700 font-bold">Final Líquido</td>
                  <td className="py-2 px-3 text-right font-bold text-blue-700">{taxes.finalNet?.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }