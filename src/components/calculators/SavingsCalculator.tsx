import React, { useState } from 'react';
import { Copy, Check, RotateCcw, PiggyBank } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [initial, setInitial] = useState('1000');
  const [monthlyDeposit, setMonthlyDeposit] = useState('500');
  const [rate, setRate] = useState('4');
  const [years, setYears] = useState('10');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const init = parseFloat(initial) || 0;
    const dep = parseFloat(monthlyDeposit) || 0;
    const r = (parseFloat(rate) || 0) / 100 / 12;
    const t = (parseFloat(years) || 0) * 12;

    if (t <= 0) return null;

    let balance = init;
    let totalDeposited = init + dep * t;

    for (let i = 0; i < t; i++) {
      balance = (balance + dep) * (1 + r);
    }

    const interestEarned = balance - totalDeposited;

    return {
      finalBalance: Math.round(balance).toLocaleString('ar-EG'),
      totalDeposited: Math.round(totalDeposited).toLocaleString('ar-EG'),
      interestEarned: Math.round(interestEarned).toLocaleString('ar-EG')
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`القيمة المستقبلية للمدخرات: ${res.finalBalance} (إجمالي مدفوعاتك: ${res.totalDeposited}، الأرباح المتراكمة: ${res.interestEarned})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="savings-initial-input" className="block text-sm font-semibold text-slate-700 mb-2">مبلغ الادخار الحالي الأول</label>
          <input
            id="savings-initial-input"
            type="number"
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="savings-deposit-input" className="block text-sm font-semibold text-slate-700 mb-2">الإيداع الشهري المضاف</label>
          <input
            id="savings-deposit-input"
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="savings-rate-input" className="block text-sm font-semibold text-slate-700 mb-2">معدل الربح/العائد السنوي (%)</label>
          <input
            id="savings-rate-input"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="savings-years-input" className="block text-sm font-semibold text-slate-700 mb-2">مدة الادخار (بالسنوات)</label>
          <input
            id="savings-years-input"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setInitial('1000'); setMonthlyDeposit('500'); setRate('4'); setYears('10'); }}
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
              <PiggyBank className="w-5 h-5 text-emerald-600" />
              تقدير القيمة المستقبلية لمدخراتك
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
            <span className="block text-xs font-bold text-slate-500 mb-1">المبلغ النهائي المتراكم</span>
            <span className="text-4xl font-extrabold text-emerald-700">{res.finalBalance}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">إجمالي مدفوعاتك من جيبك</span>
              <strong className="text-slate-800 text-base">{res.totalDeposited}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">أرباح العائد والفوائد</span>
              <strong className="text-teal-700 text-base">{res.interestEarned}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
