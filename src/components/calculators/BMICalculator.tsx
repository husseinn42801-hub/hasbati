import React, { useState } from 'react';
import { Copy, Check, RotateCcw, AlertTriangle, Activity } from 'lucide-react';

export const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('175');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const w = parseFloat(weight);
    const hCm = parseFloat(height);

    if (isNaN(w) || isNaN(hCm) || w <= 0 || hCm <= 0) return null;

    const hM = hCm / 100;
    const bmi = w / (hM * hM);

    let category = '';
    let colorClass = '';
    let bgClass = '';

    if (bmi < 18.5) {
      category = 'نحافة (أقل من الطبيعي)';
      colorClass = 'text-amber-700 border-amber-300';
      bgClass = 'bg-amber-50';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'وزن طبيعي وصحي';
      colorClass = 'text-emerald-700 border-emerald-300';
      bgClass = 'bg-emerald-50';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'زيادة في الوزن';
      colorClass = 'text-orange-700 border-orange-300';
      bgClass = 'bg-orange-50';
    } else {
      category = 'سمنة (مؤشر مرتفع)';
      colorClass = 'text-rose-700 border-rose-300';
      bgClass = 'bg-rose-50';
    }

    return {
      bmiValue: bmi.toFixed(1),
      category,
      colorClass,
      bgClass
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`مؤشر كتلة الجسم BMI: ${res.bmiValue} (${res.category}). تم الحساب عبر حاسباتي.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bmi-weight-input" className="block text-sm font-semibold text-slate-700 mb-2">الوزن (كيلوجرام)</label>
          <input
            id="bmi-weight-input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-800 bg-white"
            placeholder="مثال: 75"
          />
        </div>

        <div>
          <label htmlFor="bmi-height-input" className="block text-sm font-semibold text-slate-700 mb-2">الطول (سنتيمتر)</label>
          <input
            id="bmi-height-input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-800 bg-white"
            placeholder="مثال: 175"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setWeight('75'); setHeight('175'); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && (
        <div className={`border rounded-2xl p-6 space-y-4 ${res.bgClass} ${res.colorClass.split(' ')[1]}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Activity className="w-5 h-5 text-rose-600" />
              مؤشر كتلة الجسم الخاص بك
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-900 bg-rose-200/80 hover:bg-rose-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
            <span className="block text-xs font-semibold text-slate-500 mb-1">القيمية الحسابية لـ BMI</span>
            <span className="text-4xl font-black text-slate-900">{res.bmiValue}</span>
            <div className={`mt-2 inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${res.colorClass}`}>
              التصنيف: {res.category}
            </div>
          </div>

          {/* Medical disclaimer note as required */}
          <div className="flex items-start gap-2 p-3 bg-amber-500/10 border border-amber-200 rounded-xl text-xs text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>تنبيه طبي مهم:</strong> هذه النتيجة تعتبر مؤشراً تقديرياً للأغراض الاسترشادية والتثقيفية فقط ولا تعوض عن الكشف الفعلي أو الاستشارة الطبية المتخصصة.</span>
          </div>
        </div>
      )}
    </div>
  );
};
