import React, { useState } from 'react';
import { Copy, Check, RotateCcw, CreditCard } from 'lucide-react';

export const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('100000');
  const [interestRate, setInterestRate] = useState('5');
  const [tenureYears, setTenureYears] = useState('5');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const p = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(tenureYears);

    if (isNaN(p) || isNaN(annualRate) || isNaN(years) || p <= 0 || annualRate < 0 || years <= 0) return null;

    const r = annualRate / 12 / 100; // Monthly rate
    const n = years * 12; // Total months

    let monthlyPayment = 0;
    if (r === 0) {
      monthlyPayment = p / n;
    } else {
      monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPayable = monthlyPayment * n;
    const totalInterest = totalPayable - p;

    return {
      monthlyPayment: Math.round(monthlyPayment).toLocaleString('ar-EG'),
      totalPayable: Math.round(totalPayable).toLocaleString('ar-EG'),
      totalInterest: Math.round(totalInterest).toLocaleString('ar-EG'),
      totalMonths: n
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`القسط الشهري للقرض: ${res.monthlyPayment} - إجمالي السداد: ${res.totalPayable} - إجمالي الفائدة: ${res.totalInterest}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="loan-amount-input" className="block text-sm font-semibold text-slate-700 mb-2">مبلغ القرض المطلوب</label>
          <input
            id="loan-amount-input"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 100000"
          />
        </div>
        <div>
          <label htmlFor="loan-interest-input" className="block text-sm font-semibold text-slate-700 mb-2">معدل الفائدة/المرابحة (%)</label>
          <input
            id="loan-interest-input"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 5"
          />
        </div>
        <div>
          <label htmlFor="loan-tenure-input" className="block text-sm font-semibold text-slate-700 mb-2">مدة السداد (بالسنوات)</label>
          <input
            id="loan-tenure-input"
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 5"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setLoanAmount('100000'); setInterestRate('5'); setTenureYears('5'); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && (
        <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-900 font-bold">
              <CreditCard className="w-5 h-5 text-emerald-600" />
              جدول الأقساط والتمويل
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-200/80 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-emerald-200 text-center shadow-xs">
            <span className="block text-xs font-bold text-slate-500 mb-1">القسط الشهري المستحق ({res.totalMonths} شهراً)</span>
            <span className="text-4xl font-extrabold text-emerald-700">{res.monthlyPayment}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">إجمالي المبلغ الذي ستسدده</span>
              <strong className="text-slate-900 text-lg">{res.totalPayable}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">إجمالي الفوائد والأرباح</span>
              <strong className="text-rose-700 text-lg">{res.totalInterest}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
