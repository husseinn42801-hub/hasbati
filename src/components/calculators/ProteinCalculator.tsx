import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Dumbbell } from 'lucide-react';

export const ProteinCalculator: React.FC = () => {
  const [weight, setWeight] = useState('75');
  const [goal, setGoal] = useState<'health' | 'fatloss' | 'muscle'>('muscle');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return null;

    let minRatio = 0.8;
    let maxRatio = 1.0;

    if (goal === 'fatloss') {
      minRatio = 1.6;
      maxRatio = 2.0;
    } else if (goal === 'muscle') {
      minRatio = 1.8;
      maxRatio = 2.2;
    }

    const minGrams = Math.round(w * minRatio);
    const maxGrams = Math.round(w * maxRatio);

    return {
      minGrams,
      maxGrams,
      avgGrams: Math.round((minGrams + maxGrams) / 2)
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`احتياجك اليومي من البروتين: بين ${res.minGrams} إلى ${res.maxGrams} جرام يومياً (متوسط ${res.avgGrams} جم). تم الحساب عبر حاسباتي.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="protein-weight-input" className="block text-sm font-semibold text-slate-700 mb-2">وزن الجسم (كيلوجرام)</label>
        <input
          id="protein-weight-input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white"
          placeholder="مثال: 75"
        />
      </div>

      <div>
        <label htmlFor="fitness-goal-select" className="block text-sm font-semibold text-slate-700 mb-2">الهدف الرياضي والصحي</label>
        <select
          id="fitness-goal-select"
          value={goal}
          onChange={(e) => setGoal(e.target.value as any)}
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white cursor-pointer"
        >
          <option value="health">صحة عامة وحفاظ على الوزن (0.8 - 1.0 جم/كجم)</option>
          <option value="fatloss">خسارة دهون مع المحافظة على العضلات (1.6 - 2.0 جم/كجم)</option>
          <option value="muscle">زيادة الكتلة العضلية وتضخيم (1.8 - 2.2 جم/كجم)</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setWeight('75'); setGoal('muscle'); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && (
        <div className="bg-gradient-to-br from-rose-500/10 via-rose-50 to-amber-50 border border-rose-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-900 font-bold">
              <Dumbbell className="w-5 h-5 text-rose-600" />
              الاحتياج المستهدف من البروتين
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-900 bg-rose-200/80 hover:bg-rose-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-rose-100 text-center shadow-xs">
            <span className="block text-xs font-bold text-slate-500 mb-1">الكمية اليومية الموصى بها</span>
            <span className="text-3xl font-extrabold text-rose-700">{res.minGrams} - {res.maxGrams} جرام</span>
            <span className="block text-xs font-bold text-emerald-700 mt-1">المتوسط المقترح: {res.avgGrams} جرام بروتين</span>
          </div>
        </div>
      )}
    </div>
  );
};
