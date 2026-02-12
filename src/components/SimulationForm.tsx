import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function SimulationForm({ onSubmit }: { onSubmit: (data: any, key: string) => void }) {
  const [form, setForm] = useState({
    name: "",
    initialAmount: 1000,
    monthlyContribution: 100,
    months: 12,
    fixedAnnualRate: 0.12,
    variableAnnualReturn: 0.12,
    variableVolatility: 0.25,
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: Number(e.target.value) || e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const key = uuidv4();
    await onSubmit(form, key);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-8">Simulação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Valor inicial</label>
            <input name="initialAmount" type="number" value={form.initialAmount} onChange={handleChange} placeholder="Valor inicial" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Aporte mensal</label>
            <input name="monthlyContribution" type="number" value={form.monthlyContribution} onChange={handleChange} placeholder="Aporte mensal" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Meses</label>
            <input name="months" type="number" value={form.months} onChange={handleChange} placeholder="Meses" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Taxa anual fixa (%)</label>
            <input name="fixedAnnualRate" type="number" step="0.01" value={form.fixedAnnualRate} onChange={handleChange} placeholder="Taxa anual fixa" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Retorno anual variável (%)</label>
            <input name="variableAnnualReturn" type="number" step="0.01" value={form.variableAnnualReturn} onChange={handleChange} placeholder="Retorno anual variável" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Volatilidade anual (%)</label>
            <input name="variableVolatility" type="number" step="0.01" value={form.variableVolatility} onChange={handleChange} placeholder="Volatilidade anual" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm" />
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition disabled:opacity-50 text-lg tracking-wide">{submitting ? "Simulando..." : "Simular"}</button>
        </div>
      </div>
    </form>
  );
}