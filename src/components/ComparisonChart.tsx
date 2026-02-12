"use client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";

type Point = { month: number; fixed: number; variable: number };

export default function ComparisonChart({ fixedSeries, variableSeries }: { fixedSeries: any[]; variableSeries: any[] }) {
  // Monta dados para o gráfico: um ponto por mês
  const data: Point[] = (fixedSeries || []).map((f, i) => ({
    month: i,
    fixed: f.balance,
    variable: variableSeries?.[i]?.balance ?? null,
  }));

  return (
    <section className="mb-10">
      <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-8">
        <h3 className="text-xl font-bold text-blue-800 mb-6">Evolução dos Saldos</h3>
        <div className="w-full">
          <ResponsiveContainer width="100%" aspect={2} minWidth={0} minHeight={0}>
            <LineChart data={data} margin={{ top: 16, right: 24, left: 0, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} label={{ value: 'Mês', position: 'insideBottom', offset: -4 }} />
              <YAxis tick={{ fontSize: 12 }} label={{ value: 'Saldo', angle: -90, position: 'insideLeft', offset: 10 }} />
              <Tooltip formatter={(v: number) => v?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="fixed" name="Fixo" stroke="#2563eb" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="variable" name="Variável" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}