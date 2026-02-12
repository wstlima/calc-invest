    export default function ResultsCards({ fixedNet, variableMean, diffPercent, p10, p90 }: any) {
      return (
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Fixo Líquido</h3>
              <div className="text-3xl font-bold text-blue-900">{fixedNet?.toFixed(2)}</div>
            </div>
            <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Variável Média</h3>
              <div className="text-3xl font-bold text-green-900">{variableMean?.toFixed(2)}</div>
            </div>
            <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">Diferença %</h3>
              <div className="text-3xl font-bold text-indigo-900">{diffPercent?.toFixed(2)}%</div>
            </div>
            <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">P10</h3>
              <div className="text-3xl font-bold text-orange-900">{p10?.toFixed(2)}</div>
            </div>
            <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">P90</h3>
              <div className="text-3xl font-bold text-orange-900">{p90?.toFixed(2)}</div>
            </div>
          </div>
        </section>
      );
    }