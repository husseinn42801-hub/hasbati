import React, { useState } from 'react';
import { Calendar, Copy, Check, RotateCcw, Clock, Sparkles } from 'lucide-react';

export const AgeCalculator: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [birthDate, setBirthDate] = useState('1998-05-15');
  const [targetDate, setTargetDate] = useState(todayStr);
  const [copied, setCopied] = useState(false);

  const calculateAge = () => {
    if (!birthDate || !targetDate) return null;

    const bDate = new Date(birthDate);
    const tDate = new Date(targetDate);

    if (isNaN(bDate.getTime()) || isNaN(tDate.getTime())) return null;
    if (bDate > tDate) {
      return { error: 'تاريخ الميلاد يجب أن يكون قبل تاريخ الحساب.' };
    }

    let years = tDate.getFullYear() - bDate.getFullYear();
    let months = tDate.getMonth() - bDate.getMonth();
    let days = tDate.getDate() - bDate.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month of target date
      const prevMonth = new Date(tDate.getFullYear(), tDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total calculations
    const diffTime = Math.abs(tDate.getTime() - bDate.getTime());
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMonths = years * 12 + months;

    // Next birthday calculation
    let nextBdayYear = tDate.getFullYear();
    let nextBday = new Date(nextBdayYear, bDate.getMonth(), bDate.getDate());
    if (nextBday < tDate) {
      nextBdayYear++;
      nextBday = new Date(nextBdayYear, bDate.getMonth(), bDate.getDate());
    }

    const diffNextBday = nextBday.getTime() - tDate.getTime();
    const daysToNextBday = Math.ceil(diffNextBday / (1000 * 60 * 60 * 24));
    const monthsToNextBday = Math.floor(daysToNextBday / 30.4375);
    const remDaysToNextBday = Math.round(daysToNextBday % 30.4375);

    // Day of the week born
    const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const bornDayName = daysOfWeek[bDate.getDay()];

    return {
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      totalDays,
      totalHours,
      bornDayName,
      daysToNextBday,
      monthsToNextBday,
      remDaysToNextBday,
      nextBdayDayName: daysOfWeek[nextBday.getDay()]
    };
  };

  const result = calculateAge();

  const handleCopy = () => {
    if (!result || 'error' in result) return;
    const text = `عُمري الحالي: ${result.years} سنة، و${result.months} شهر، و${result.days} يوم (إجمالي الأيام: ${result.totalDays.toLocaleString('ar-EG')} يومًا). تم الحساب عبر منصة حاسباتي.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setBirthDate('1998-05-15');
    setTargetDate(todayStr);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="birth-date-input" className="block text-sm font-semibold text-slate-700 mb-2">تاريخ الميلاد</label>
          <div className="relative">
            <input
              id="birth-date-input"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 pl-10 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 bg-white"
            />
            <Calendar className="w-5 h-5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="target-date-input" className="block text-sm font-semibold text-slate-700 mb-2">تاريخ الحساب (تاريخ اليوم عادةً)</label>
          <div className="relative">
            <input
              id="target-date-input"
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full p-3 pl-10 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 bg-white"
            />
            <Clock className="w-5 h-5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
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

      {result && 'error' in result ? (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium">
          {result.error}
        </div>
      ) : result ? (
        <div className="bg-gradient-to-br from-amber-500/10 via-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/60 pb-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
              <Sparkles className="w-5 h-5 text-amber-600" />
              النتيجة والتفاصيل
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-200/80 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          {/* Main Big Result Cards */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-700">{result.years}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">سنة</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-700">{result.months}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">شهر</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-700">{result.days}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">يوم</div>
            </div>
          </div>

          {/* Total stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white/80 rounded-lg text-center">
              <span className="block text-xs text-slate-500">إجمالي الأشهر</span>
              <span className="font-bold text-slate-800">{result.totalMonths.toLocaleString()} شهر</span>
            </div>
            <div className="p-3 bg-white/80 rounded-lg text-center">
              <span className="block text-xs text-slate-500">إجمالي الأسابيع</span>
              <span className="font-bold text-slate-800">{result.totalWeeks.toLocaleString()} أسبوع</span>
            </div>
            <div className="p-3 bg-white/80 rounded-lg text-center">
              <span className="block text-xs text-slate-500">إجمالي الأيام</span>
              <span className="font-bold text-slate-800">{result.totalDays.toLocaleString()} يوم</span>
            </div>
            <div className="p-3 bg-white/80 rounded-lg text-center">
              <span className="block text-xs text-slate-500">يوم الميلاد</span>
              <span className="font-bold text-slate-800">يوم {result.bornDayName}</span>
            </div>
          </div>

          {/* Next Birthday Banner */}
          <div className="p-4 bg-white border border-amber-200/80 rounded-xl flex items-center justify-between flex-wrap gap-2 text-sm text-slate-700">
            <div>
              <span className="font-semibold text-amber-900 block">عيد الميلاد القادم:</span>
              <span className="text-slate-600">
                متبقي {result.monthsToNextBday > 0 ? `${result.monthsToNextBday} شهر و ` : ''}{result.remDaysToNextBday} يومًا ({result.daysToNextBday} يوم إجمالاً).
              </span>
            </div>
            <div className="px-3 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs">
              سيصادف يوم {result.nextBdayDayName}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
