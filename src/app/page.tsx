"use client";
import { useState, useEffect } from "react";
import SimulationForm from "../components/SimulationForm";
import ResultsCards from "../components/ResultsCards";
import ComparisonChart from "../components/ComparisonChart";
import TaxesTable from "../components/TaxesTable";
import HistoryList from "../components/HistoryList";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [taxes, setTaxes] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  async function handleSubmit(data: any, key: string) {
    const res = await fetch("/api/simulations", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Idempotency-Key": key },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setResult(json.data?.result);
    setTaxes(json.data?.result?.taxesJson ? JSON.parse(json.data.result.taxesJson) : null);
    fetchHistory();
  }

  async function fetchHistory() {
    const res = await fetch("/api/simulations");
    const json = await res.json();
    setHistory(json.data || []);
  }

  async function handleSelect(id: string) {
    const res = await fetch(`/api/simulations/${id}`);
    const json = await res.json();
    setSelected(json.data?.result);
    setTaxes(json.data?.result?.taxesJson ? JSON.parse(json.data.result.taxesJson) : null);
  }

  useEffect(() => { fetchHistory(); }, []);

  return (
    <div className="p-4">
      <h1>Calculadora de Investimentos</h1>
      <SimulationForm onSubmit={handleSubmit} />
      <ResultsCards
        fixedNet={result?.fixedFinalNet || selected?.fixedFinalNet}
        variableMean={result?.variableFinalMean || selected?.variableFinalMean}
        diffPercent={result?.metaJson ? JSON.parse(result.metaJson).diffPercent : selected?.metaJson ? JSON.parse(selected.metaJson).diffPercent : 0}
        p10={result?.metaJson ? JSON.parse(result.metaJson).p10 : selected?.metaJson ? JSON.parse(selected.metaJson).p10 : 0}
        p90={result?.metaJson ? JSON.parse(result.metaJson).p90 : selected?.metaJson ? JSON.parse(selected.metaJson).p90 : 0}
      />
      <ComparisonChart
        fixedSeries={result?.fixedSeriesJson ? JSON.parse(result.fixedSeriesJson) : selected?.fixedSeriesJson ? JSON.parse(selected.fixedSeriesJson) : []}
        variableSeries={result?.variableSeriesJson ? JSON.parse(result.variableSeriesJson) : selected?.variableSeriesJson ? JSON.parse(selected.variableSeriesJson) : []}
      />
      <TaxesTable taxes={taxes} />
      <h2>Histórico</h2>
      <HistoryList history={history} onSelect={handleSelect} />
    </div>
  );
}