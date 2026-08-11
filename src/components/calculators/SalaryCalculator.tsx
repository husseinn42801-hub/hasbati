import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Wallet } from 'lucide-react';

export const SalaryCalculator: React.FC = () => {
  const [baseSalary, setBaseSalary] = useState('8000');
  const [allowances, setAllowances] = useState('2000');
  const [deductions, setDeductions] = useState('720');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const base = parseFloat(baseSalary) || 0;
    const allow = parseFloat(allowances) || 0;
    const ded = parseFloat(deductions) || 0;

    const gross = base + allow;
    const net = Math.max(0, gross - ded);

    return {
      baseSalary: base.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      allowances: allow.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      deductions: ded.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      grossSalary: gross.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      netSalary: net.toLocaleString('ar-EG', { maximumFractionDigits: 2 })
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`الراتب الأساسي: ${res.baseSalary} - البدلات: ${res.allowances} - الخصومات: ${res.deductions} - صافي الراتب النهائي: ${res.netSalary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="base-salary-input" className="block text-sm font-semibold text-slate-700 mb-2">الراتب الأساسي</label>
          <input
            id="base-salary-input"
            type="number"
            value={baseSalary}
            onChange={(e) => setBaseSalary(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 8000"
          />
        </div>
        <div>
          <label htmlFor="allowances-input" className="block text-sm font-semibold text-slate-700 mb-2">إجمالي البدلات والمكافآت</label>
          <input
            id="allowances-input"
            type="number"
            value={allowances}
            onChange={(e) => setAllowances(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 2000"
          />
        </div>
        <div>
          <label htmlFor="salary-deductions-input" className="block text-sm font-semibold text-slate-700 mb-2">الخصومات والتأمينات</label>
          <input
            id="salary-deductions-input"
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 720"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setBaseSalary('8000'); setAllowances('2000'); setDeductions('720'); }}
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
              <Wallet className="w-5 h-5 text-emerald-600" />
              تفصيل صافي الراتب المستلم
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
            <span className="block text-xs font-bold text-slate-500 mb-1">صافي الراتب النهائى المودع بالحساب</span>
            <span className="text-4xl font-extrabold text-emerald-700">{res.netSalary}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">إجمالي الراتب القائم</span>
              <strong className="text-slate-800 text-sm">{res.grossSalary}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100">
              <span className="block text-xs text-slate-500">مجموع البدلات</span>
              <strong className="text-emerald-800 text-sm">{res.allowances}</strong>
            </div>
            <div className="p-3 bg-white/90 rounded-lg border border-emerald-100 col-span-2 sm:col-span-1">
              <span className="block text-xs text-slate-500">الاستقطاعات والخصم</span>
              <strong className="text-rose-700 text-sm">{res.deductions}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
