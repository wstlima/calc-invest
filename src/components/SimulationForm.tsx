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
    <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
      <div className="flex flex-col">
        <label className="font-medium mb-1">Nome</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Valor inicial</label>
        <input name="initialAmount" type="number" value={form.initialAmount} onChange={handleChange} placeholder="Valor inicial" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Aporte mensal</label>
        <input name="monthlyContribution" type="number" value={form.monthlyContribution} onChange={handleChange} placeholder="Aporte mensal" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Meses</label>
        <input name="months" type="number" value={form.months} onChange={handleChange} placeholder="Meses" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Taxa anual fixa (%)</label>
        <input name="fixedAnnualRate" type="number" step="0.01" value={form.fixedAnnualRate} onChange={handleChange} placeholder="Taxa anual fixa" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Retorno anual variável (%)</label>
        <input name="variableAnnualReturn" type="number" step="0.01" value={form.variableAnnualReturn} onChange={handleChange} placeholder="Retorno anual variável" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Volatilidade anual (%)</label>
        <input name="variableVolatility" type="number" step="0.01" value={form.variableVolatility} onChange={handleChange} placeholder="Volatilidade anual" className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="flex items-end">
        <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 disabled:opacity-50 w-full transition">{submitting ? "Simulando..." : "Simular"}</button>
      </div>
    </form>
  );
}