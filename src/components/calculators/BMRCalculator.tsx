import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Flame } from 'lucide-react';

export const BMRCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('28');
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('175');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(a) || isNaN(w) || isNaN(h) || a <= 0 || w <= 0 || h <= 0) return null;

    // Mifflin-St Jeor Equation
    let bmr = 10 * w + 6.25 * h - 5 * a;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    return {
      bmrValue: Math.round(bmr),
      genderLabel: gender === 'male' ? 'رجل' : 'أنثى'
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`معدل الأيض الأساسي BMR: ${res.bmrValue} سعرة حرارية يومياً. تم الحساب عبر منصة حاسباتي.`);
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="bmr-age-input" className="block text-sm font-semibold text-slate-700 mb-2">العمر (سنة)</label>
          <input
            id="bmr-age-input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="bmr-weight-input" className="block text-sm font-semibold text-slate-700 mb-2">الوزن (كجم)</label>
          <input
            id="bmr-weight-input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="bmr-height-input" className="block text-sm font-semibold text-slate-700 mb-2">الطول (سم)</label>
          <input
            id="bmr-height-input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setGender('male'); setAge('28'); setWeight('75'); setHeight('175'); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>

      {res && (
        <div className="bg-gradient-to-br from-rose-500/10 via-rose-50 to-orange-50 border border-rose-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-900 font-bold">
              <Flame className="w-5 h-5 text-rose-600" />
              حرق الجسم في الراحة التامة (BMR)
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
            <span className="text-4xl font-black text-rose-700">{res.bmrValue.toLocaleString()}</span>
            <span className="block text-sm font-bold text-slate-600 mt-1">سعرة حرارية / يومياً</span>
          </div>

          <p className="text-xs text-slate-600 bg-white/70 p-3 rounded-lg border border-rose-100">
            <strong>المعادلة المستخدمة:</strong> تم الحساب بناءً على صيغة <em>Mifflin-St Jeor</em> المعيارية، وهي أحدث وأدق معادلة طبية مقبولة لحساب طاقة الاستقلاب الأساسي.
          </p>
        </div>
      )}
    </div>
  );
};
