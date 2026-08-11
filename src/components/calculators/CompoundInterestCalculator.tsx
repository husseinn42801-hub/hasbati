import React, { useState } from 'react';
import { Copy, Check, RotateCcw, TrendingUp } from 'lucide-react';

export const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('6');
  const [years, setYears] = useState('5');
  const [frequency, setFrequency] = useState('12'); // Monthly compounding
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(frequency);

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n) || p < 0 || r < 0 || t < 0) return null;

    // A = P(1 + r/n)^(nt)
    const total = p * Math.pow(1 + r / n, n * t);
    const earnedInterest = total - p;

    return {
      principal: p.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      earnedInterest: earnedInterest.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      total: total.toLocaleString('ar-EG', { maximumFractionDigits: 2 })
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`المبلغ الأولي: ${res.principal} - أرباح الفائدة المركبة: ${res.earnedInterest} - القيمة المستقبلية الإجمالية: ${res.total}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="compound-principal-input" className="block text-sm font-semibold text-slate-700 mb-2">المبلغ الأولي المستثمر</label>
          <input
            id="compound-principal-input"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="compound-rate-input" className="block text-sm font-semibold text-slate-700 mb-2">معدل الفائدة السنوي (%)</label>
          <input
            id="compound-rate-input"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="compound-years-input" className="block text-sm font-semibold text-slate-700 mb-2">مد الاستثمار (بالسنوات)</label>
          <input
            id="compound-years-input"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="compounding-frequency-select" className="block text-sm font-semibold text-slate-700 mb-2">دورية تركيز الأرباح (Compounding)</label>
          <select
            id="compounding-frequency-select"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white cursor-pointer"
          >
            <option value="12">شهرياً (12 مرة في السنة)</option>
            <option value="4">ربع سنوياً (4 مرات في السنة)</option>
            <option value="1">سنوياً (مرة واحدة)</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setPrincipal('10000'); setRate('6'); setYears('5'); setFrequency('12'); }}
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
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              النمو المستقبلي بالفائدة المركبة
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-200/80 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
              <span className="block text-xs font-bold text-slate-500 mb-1">القيمة الإجمالية المستقبلية</span>
              <span className="text-3xl font-extrabold text-emerald-700">{res.total}</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
              <span className="block text-xs font-bold text-slate-500 mb-1">صافي أرباح الفائدة المركبة</span>
              <span className="text-3xl font-extrabold text-teal-700">{res.earnedInterest}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
