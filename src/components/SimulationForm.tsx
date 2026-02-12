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
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" />
      <input name="initialAmount" type="number" value={form.initialAmount} onChange={handleChange} placeholder="Valor inicial" />
      <input name="monthlyContribution" type="number" value={form.monthlyContribution} onChange={handleChange} placeholder="Aporte mensal" />
      <input name="months" type="number" value={form.months} onChange={handleChange} placeholder="Meses" />
      <input name="fixedAnnualRate" type="number" step="0.01" value={form.fixedAnnualRate} onChange={handleChange} placeholder="Taxa anual fixa" />
      <input name="variableAnnualReturn" type="number" step="0.01" value={form.variableAnnualReturn} onChange={handleChange} placeholder="Retorno anual variável" />
      <input name="variableVolatility" type="number" step="0.01" value={form.variableVolatility} onChange={handleChange} placeholder="Volatilidade anual" />
      <button type="submit" disabled={submitting}>Simular</button>
    </form>
  );
}