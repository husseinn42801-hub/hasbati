import React, { useState } from 'react';
import { Copy, Check, RotateCcw, AlertCircle, Heart } from 'lucide-react';

export const IdealWeightCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState('175');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return null;

    const heightInInches = h / 2.54;
    const inchesOver60 = Math.max(0, heightInInches - 60);

    let devine = 0;
    if (gender === 'male') {
      devine = 50 + 2.3 * inchesOver60;
    } else {
      devine = 45.5 + 2.3 * inchesOver60;
    }

    // Healthy BMI range (18.5 to 24.9)
    const hM = h / 100;
    const minWeight = 18.5 * (hM * hM);
    const maxWeight = 24.9 * (hM * hM);

    return {
      idealDevine: Math.round(devine),
      minRange: Math.round(minWeight),
      maxRange: Math.round(maxWeight)
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`الوزن المثالي التقديري للطول ${height} سم هو: ${res.idealDevine} كجم (النطاق الصحي: ${res.minRange} - ${res.maxRange} كجم). تم الحساب عبر حاسباتي.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex bg-slate-100 p-1.5 rounded-xl text-sm font-semibold text-slate-600 gap-1">
        <button
          onClick={() => setGender('male')}
          className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer ${gender === 'male' ? 'bg-white text-rose-700 shadow-xs' : 'hover:text-slate-900'}`}
        >
          رجل
        </button>
        <button
          onClick={() => setGender('female')}
          className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer ${gender === 'female' ? 'bg-white text-rose-700 shadow-xs' : 'hover:text-slate-900'}`}
        >
          أنثى
        </button>
      </div>

      <div>
        <label htmlFor="ideal-height-input" className="block text-sm font-semibold text-slate-700 mb-2">الطول بالسنتيمتر (سم)</label>
        <input
          id="ideal-height-input"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white"
          placeholder="مثال: 175"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setGender('male'); setHeight('175'); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && (
        <div className="bg-gradient-to-br from-rose-500/10 via-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-900 font-bold">
              <Heart className="w-5 h-5 text-rose-600" />
              تقدير الوزن المثالي والنطاق الصحي
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-900 bg-rose-200/80 hover:bg-rose-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl border border-rose-100">
              <span className="block text-xs font-bold text-slate-500 mb-1">الوزن المثالي النظري</span>
              <span className="text-3xl font-extrabold text-rose-700">{res.idealDevine} كجم</span>
              <span className="block text-[11px] text-slate-400 mt-1">حسب معادلة ديفين الطبية</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-rose-100">
              <span className="block text-xs font-bold text-slate-500 mb-1">النطاق الصحي الطبيعي للوزن</span>
              <span className="text-2xl font-extrabold text-emerald-700">{res.minRange} - {res.maxRange} كجم</span>
              <span className="block text-[11px] text-slate-400 mt-1">المعتمد لمؤشر كتلة الجسم 18.5-24.9</span>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 bg-white/80 rounded-xl text-xs text-slate-600 border border-rose-100">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span><strong>ملاحظة:</strong> هذه الأرقام هي معايير إرشادية وتختلف بين البشر بحسب نسبة العضلات، العظام، والعوامل الوراثية.</span>
          </div>
        </div>
      )}
    </div>
  );
};
