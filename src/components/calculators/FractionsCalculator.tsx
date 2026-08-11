import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

export const FractionsCalculator: React.FC = () => {
  const [num1, setNum1] = useState('1');
  const [den1, setDen1] = useState('2');
  const [op, setOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [num2, setNum2] = useState('1');
  const [den2, setDen2] = useState('4');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const n1 = parseInt(num1, 10);
    const d1 = parseInt(den1, 10);
    const n2 = parseInt(num2, 10);
    const d2 = parseInt(den2, 10);

    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2)) return null;
    if (d1 === 0 || d2 === 0) return { error: 'المقام لا يمكن أن يكون صفراً!' };

    let resNum = 0;
    let resDen = 1;

    if (op === '+') {
      resNum = n1 * d2 + n2 * d1;
      resDen = d1 * d2;
    } else if (op === '-') {
      resNum = n1 * d2 - n2 * d1;
      resDen = d1 * d2;
    } else if (op === '*') {
      resNum = n1 * n2;
      resDen = d1 * d2;
    } else if (op === '/') {
      if (n2 === 0) return { error: 'لا يمكن القسمة على كسر بسطه صفر.' };
      resNum = n1 * d2;
      resDen = d1 * n2;
    }

    if (resDen < 0) {
      resNum = -resNum;
      resDen = -resDen;
    }

    const divisor = gcd(resNum, resDen);
    const simpNum = resNum / divisor;
    const simpDen = resDen / divisor;
    const decimal = (resNum / resDen).toLocaleString('ar-EG', { maximumFractionDigits: 4 });

    return {
      rawNum: resNum,
      rawDen: resDen,
      simpNum,
      simpDen,
      decimal
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res || 'error' in res) return;
    navigator.clipboard.writeText(`النتيجة: ${res.simpNum}/${res.simpDen} (العشري: ${res.decimal})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-3 flex-wrap bg-slate-50 p-4 rounded-2xl border border-slate-200">
        {/* Fraction 1 */}
        <div className="flex flex-col items-center w-20">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full text-center p-2 border border-slate-300 rounded-lg bg-white font-bold text-slate-800"
            placeholder="البسط"
          />
          <div className="w-full h-0.5 bg-slate-800 my-1.5" />
          <input
            type="number"
            value={den1}
            onChange={(e) => setDen1(e.target.value)}
            className="w-full text-center p-2 border border-slate-300 rounded-lg bg-white font-bold text-slate-800"
            placeholder="المقام"
          />
        </div>

        {/* Operator */}
        <select
          value={op}
          onChange={(e) => setOp(e.target.value as any)}
          className="p-3 border border-slate-300 rounded-xl bg-white font-extrabold text-indigo-700 text-lg cursor-pointer"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        {/* Fraction 2 */}
        <div className="flex flex-col items-center w-20">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full text-center p-2 border border-slate-300 rounded-lg bg-white font-bold text-slate-800"
            placeholder="البسط"
          />
          <div className="w-full h-0.5 bg-slate-800 my-1.5" />
          <input
            type="number"
            value={den2}
            onChange={(e) => setDen2(e.target.value)}
            className="w-full text-center p-2 border border-slate-300 rounded-lg bg-white font-bold text-slate-800"
            placeholder="المقام"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setNum1('1'); setDen1('2'); setOp('+'); setNum2('1'); setDen2('4'); }}
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
        <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">النتيجة المُبسطة</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-900 bg-indigo-200/80 hover:bg-indigo-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-100 text-center flex flex-col items-center shadow-xs">
            <div className="flex flex-col items-center text-3xl font-extrabold text-indigo-700">
              <span>{res.simpNum}</span>
              <div className="w-16 h-1 bg-indigo-600 my-1 rounded-full" />
              <span>{res.simpDen}</span>
            </div>
            <span className="text-xs font-medium text-slate-500 mt-3">المكافئ العشري: <strong className="text-slate-800">{res.decimal}</strong></span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
