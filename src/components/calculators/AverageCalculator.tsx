import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';

export const AverageCalculator: React.FC = () => {
  const [input, setInput] = useState('10, 20, 30, 40, 50');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    if (!input.trim()) return null;
    const items = input.split(/[\s,\n]+/).map(x => x.trim()).filter(Boolean);
    const nums = items.map(Number).filter(n => !isNaN(n));

    if (nums.length === 0) return { error: 'يرجى إدخال أرقام صالحة تفصل بينها فواصل أو مسافات.' };

    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / nums.length;
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return {
      count: nums.length,
      sum: sum.toLocaleString('ar-EG', { maximumFractionDigits: 4 }),
      avg: avg.toLocaleString('ar-EG', { maximumFractionDigits: 4 }),
      min: min.toLocaleString('ar-EG', { maximumFractionDigits: 4 }),
      max: max.toLocaleString('ar-EG', { maximumFractionDigits: 4 })
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res || 'error' in res) return;
    navigator.clipboard.writeText(`المتوسط الحسابي: ${res.avg} (المجموع: ${res.sum}، العدد: ${res.count})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="average-input-text" className="block text-sm font-semibold text-slate-700 mb-2">
          أدخل سلسلة الأرقام (مفصولة بفاصلة أو مسافة):
        </label>
        <textarea
          id="average-input-text"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="مثال: 12, 45, 60, 88.5, 100"
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 bg-white"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setInput('10, 20, 30, 40, 50')}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && 'error' in res ? (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium">
          {res.error}
        </div>
      ) : res ? (
        <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">المتوسط والإحصائيات</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-900 bg-indigo-200/80 hover:bg-indigo-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-100 text-center shadow-xs">
            <span className="block text-xs font-semibold text-slate-500 mb-1">المتوسط الحسابي (Mean)</span>
            <span className="text-4xl font-extrabold text-indigo-700">{res.avg}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 bg-white/90 rounded-lg border border-indigo-100">
              <span className="block text-slate-500">عدد العناصر</span>
              <strong className="text-slate-800 text-sm">{res.count}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-indigo-100">
              <span className="block text-slate-500">المجموع الكلي</span>
              <strong className="text-slate-800 text-sm">{res.sum}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-indigo-100">
              <span className="block text-slate-500">أدنى قيمة</span>
              <strong className="text-slate-800 text-sm">{res.min}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-indigo-100">
              <span className="block text-slate-500">أعلى قيمة</span>
              <strong className="text-slate-800 text-sm">{res.max}</strong>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
