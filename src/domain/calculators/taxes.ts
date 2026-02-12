import { FixedIncomeTaxes } from "../types";

export function getIofPercent(days: number): number {
	if (days > 30) return 0;
	// Tabela oficial: Dia 1 = 96%, Dia 2 = 93%, ..., Dia 10 = 70%, ..., Dia 30 = 0%
	const table = [96, 93, 90, 86, 83, 80, 76, 73, 70, 70, 63, 60, 56, 53, 50, 46, 43, 40, 36, 33, 30, 26, 23, 20, 16, 13, 10, 6, 3, 0];
	return table[days - 1] ?? 0;
}

export function getIrRate(days: number): number {
	if (days <= 180) return 0.225;
	if (days <= 360) return 0.20;
	if (days <= 720) return 0.175;
	return 0.15;
}

export function applyFixedIncomeTaxes({ finalGross, totalContributed, days }: {
	finalGross: number;
	totalContributed: number;
	days: number;
}): FixedIncomeTaxes {
	const grossIncome = finalGross - totalContributed;
	const iofPercent = getIofPercent(days);
	const iof = grossIncome * (iofPercent / 100);
	const irRate = getIrRate(days);
	const ir = (grossIncome - iof) * irRate;
	const netIncome = grossIncome - iof - ir;
	const finalNet = totalContributed + netIncome;
	return {
		days,
		grossIncome,
		iofPercent,
		iof,
		irRate,
		ir,
		netIncome,
		finalNet,
	};
}
