import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Flame, Dumbbell } from 'lucide-react';

export const CaloriesCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('28');
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('175');
  const [activity, setActivity] = useState('1.375');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const act = parseFloat(activity);

    if (isNaN(a) || isNaN(w) || isNaN(h) || a <= 0 || w <= 0 || h <= 0) return null;

    let bmr = 10 * w + 6.25 * h - 5 * a;
    if (gender === 'male') bmr += 5;
    else bmr -= 161;

    const tdee = bmr * act;

    return {
      maintenance: Math.round(tdee),
      mildLoss: Math.round(tdee - 250),
      weightLoss: Math.round(tdee - 500),
      weightGain: Math.round(tdee + 500)
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`سعرات ثبات الوزن: ${res.maintenance} ك.كالوري - سعرات إنقاص الوزن: ${res.weightLoss} ك.كالوري. تم الحساب عبر حاسباتي.`);
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
          <label htmlFor="cal-age-input" className="block text-sm font-semibold text-slate-700 mb-2">العمر</label>
          <input
            id="cal-age-input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="cal-weight-input" className="block text-sm font-semibold text-slate-700 mb-2">الوزن (كجم)</label>
          <input
            id="cal-weight-input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white"
          />
        </div>
        <div>
          <label htmlFor="cal-height-input" className="block text-sm font-semibold text-slate-700 mb-2">الطول (سم)</label>
          <input
            id="cal-height-input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="activity-select" className="block text-sm font-semibold text-slate-700 mb-2">مستوى النشاط البدني</label>
        <select
          id="activity-select"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 text-slate-800 bg-white cursor-pointer"
        >
          <option value="1.2">قليل النشاط (عمل مكتبي بدون تمارين)</option>
          <option value="1.375">نشاط خفيف (تمارين 1-3 أيام أسبوعياً)</option>
          <option value="1.55">نشاط متوسط (تمارين 3-5 أيام أسبوعياً)</option>
          <option value="1.725">نشاط مكثف (تمارين 6-7 أيام أسبوعياً)</option>
          <option value="1.9">نشاط عالي جداً (تمارين شاقة مرتين يومياً)</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setGender('male'); setAge('28'); setWeight('75'); setHeight('175'); setActivity('1.375'); }}
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
              تقدير الاحتياج اليومي من السعرات الحرارية
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-900 bg-rose-200/80 hover:bg-rose-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-4 bg-white rounded-xl border border-rose-100">
              <span className="block text-xs font-bold text-slate-500 mb-1">ثبات الوزن الحالي</span>
              <span className="text-2xl font-extrabold text-slate-800">{res.maintenance.toLocaleString()}</span>
              <span className="block text-[11px] text-slate-400">سعرة/يومياً</span>
            </div>
            <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-200">
              <span className="block text-xs font-bold text-emerald-800 mb-1">تخسيس وإنقاص وزن</span>
              <span className="text-2xl font-extrabold text-emerald-700">{res.weightLoss.toLocaleString()}</span>
              <span className="block text-[11px] text-emerald-600">عجز 500 سعرة</span>
            </div>
            <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-200">
              <span className="block text-xs font-bold text-blue-800 mb-1">تضخيم وبناء عضلات</span>
              <span className="text-2xl font-extrabold text-blue-700">{res.weightGain.toLocaleString()}</span>
              <span className="block text-[11px] text-blue-600">فائض 500 سعرة</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
