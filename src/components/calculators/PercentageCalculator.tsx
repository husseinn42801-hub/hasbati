import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Percent, Calculator } from 'lucide-react';

export const PercentageCalculator: React.FC = () => {
  const [mode, setMode] = useState<'of' | 'ratio' | 'change'>('of');
  const [val1, setVal1] = useState<string>('15');
  const [val2, setVal2] = useState<string>('500');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) return null;

    if (mode === 'of') {
      const res = (num1 / 100) * num2;
      return {
        label: `قيمة ${num1}% من العدد ${num2}`,
        result: res.toLocaleString('ar-EG', { maximumFractionDigits: 4 }),
        explanation: `(${num1} ÷ 100) × ${num2} = ${res}`
      };
    } else if (mode === 'ratio') {
      if (num2 === 0) return { error: 'لا يمكن القسمة على الصفر.' };
      const res = (num1 / num2) * 100;
      return {
        label: `النسبة المئوية للعدد ${num1} من العدد ${num2}`,
        result: `${res.toLocaleString('ar-EG', { maximumFractionDigits: 2 })}%`,
        explanation: `(${num1} ÷ ${num2}) × 100 = ${res}%`
      };
    } else {
      const diff = num2 - num1;
      if (num1 === 0) return { error: 'لا يمكن التقدير عندما تكون القيمة الأولى صفراً.' };
      const pctChange = (diff / num1) * 100;
      const isIncrease = diff >= 0;
      return {
        label: isIncrease ? `مقدار الزيادة المئوية من ${num1} إلى ${num2}` : `مقدار النقصان المئوي من ${num1} إلى ${num2}`,
        result: `${Math.abs(pctChange).toLocaleString('ar-EG', { maximumFractionDigits: 2 })}% ${isIncrease ? 'زيادة' : 'نقصان'}`,
        explanation: `((${num2} - ${num1}) ÷ ${num1}) × 100 = ${pctChange}%`
      };
    }
  };

  const output = calculate();

  const handleCopy = () => {
    if (!output || 'error' in output) return;
    navigator.clipboard.writeText(`${output.label}: ${output.result}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setVal1('15');
    setVal2('500');
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector Tabs */}
      <div className="flex bg-slate-100 p-1.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 gap-1">
        <button
          onClick={() => { setMode('of'); setVal1('15'); setVal2('500'); }}
          className={`flex-1 py-2.5 px-3 rounded-lg transition-all cursor-pointer ${mode === 'of' ? 'bg-white text-indigo-700 shadow-xs' : 'hover:text-slate-900'}`}
        >
          نسبة مئوية من رقم
        </button>
        <button
          onClick={() => { setMode('ratio'); setVal1('50'); setVal2('200'); }}
          className={`flex-1 py-2.5 px-3 rounded-lg transition-all cursor-pointer ${mode === 'ratio' ? 'bg-white text-indigo-700 shadow-xs' : 'hover:text-slate-900'}`}
        >
          النسبة بين رقمين
        </button>
        <button
          onClick={() => { setMode('change'); setVal1('100'); setVal2('125'); }}
          className={`flex-1 py-2.5 px-3 rounded-lg transition-all cursor-pointer ${mode === 'change' ? 'bg-white text-indigo-700 shadow-xs' : 'hover:text-slate-900'}`}
        >
          الزيادة أو النقصان
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="percentage-val1-input" className="block text-sm font-semibold text-slate-700 mb-2">
            {mode === 'of' ? 'النسبة المئوية (%)' : mode === 'ratio' ? 'الرقم الجزئي' : 'القيمة الأولى (الأصلية)'}
          </label>
          <div className="relative">
            <input
              id="percentage-val1-input"
              type="number"
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
              placeholder="أدخل الرقم"
              className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="percentage-val2-input" className="block text-sm font-semibold text-slate-700 mb-2">
            {mode === 'of' ? 'من العدد الإجمالي' : mode === 'ratio' ? 'من العدد الكلي' : 'القيمة الجديدة'}
          </label>
          <div className="relative">
            <input
              id="percentage-val2-input"
              type="number"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="أدخل الرقم"
              className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {output && 'error' in output ? (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium">
          {output.error}
        </div>
      ) : output ? (
        <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-800">
              {output.label}
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-900 bg-indigo-200/80 hover:bg-indigo-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-100 text-center shadow-xs">
            <span className="block text-3xl font-extrabold text-indigo-700">{output.result}</span>
            <span className="block text-xs font-medium text-slate-500 mt-2">خطوة الحساب: {output.explanation}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
