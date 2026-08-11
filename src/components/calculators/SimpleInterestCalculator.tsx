import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Landmark } from 'lucide-react';

export const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('3');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(years);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0) return null;

    const interest = (p * r * t) / 100;
    const total = p + interest;

    return {
      interest: interest.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      total: total.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      principal: p.toLocaleString('ar-EG', { maximumFractionDigits: 2 })
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`المبلغ الأصلي: ${res.principal} - ربح الفائدة البسيطة: ${res.interest} - المجموع الكلي: ${res.total}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="simple-principal-input" className="block text-sm font-semibold text-slate-700 mb-2">رأس المال / المبلغ الأصلي</label>
          <input
            id="simple-principal-input"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="simple-rate-input" className="block text-sm font-semibold text-slate-700 mb-2">نسبة الفائدة السنوية (%)</label>
          <input
            id="simple-rate-input"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="simple-years-input" className="block text-sm font-semibold text-slate-700 mb-2">المدة (بالسنوات)</label>
          <input
            id="simple-years-input"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setPrincipal('10000'); setRate('5'); setYears('3'); }}
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
              <Landmark className="w-5 h-5 text-emerald-600" />
              نتيجة حساب الفائدة البسيطة
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
              <span className="block text-xs font-bold text-slate-500 mb-1">صافي أرباح الفائدة</span>
              <span className="text-3xl font-extrabold text-emerald-700">{res.interest}</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
              <span className="block text-xs font-bold text-slate-500 mb-1">المبلغ الإجمالي المستحق</span>
              <span className="text-3xl font-extrabold text-teal-700">{res.total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
