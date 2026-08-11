import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Copy, Check, RotateCcw, ArrowUpDown } from 'lucide-react';

export interface ConverterConfig {
  unit1Label: string;
  unit2Label: string;
  unit1Symbol: string;
  unit2Symbol: string;
  toUnit2: (val: number) => number;
  toUnit1: (val: number) => number;
  defaultVal1?: number;
}

export const CONVERTER_CONFIGS: Record<string, ConverterConfig> = {
  'kg-to-pound': {
    unit1Label: 'الكيلوجرام',
    unit2Label: 'الباوند (الرطل)',
    unit1Symbol: 'kg',
    unit2Symbol: 'lbs',
    toUnit2: (v) => v * 2.20462262,
    toUnit1: (v) => v / 2.20462262,
    defaultVal1: 10
  },
  'pound-to-kg': {
    unit1Label: 'الباوند (الرطل)',
    unit2Label: 'الكيلوجرام',
    unit1Symbol: 'lbs',
    unit2Symbol: 'kg',
    toUnit2: (v) => v / 2.20462262,
    toUnit1: (v) => v * 2.20462262,
    defaultVal1: 22
  },
  'meter-to-feet': {
    unit1Label: 'المتر',
    unit2Label: 'القدم',
    unit1Symbol: 'm',
    unit2Symbol: 'ft',
    toUnit2: (v) => v * 3.2808399,
    toUnit1: (v) => v / 3.2808399,
    defaultVal1: 5
  },
  'feet-to-meter': {
    unit1Label: 'القدم',
    unit2Label: 'المتر',
    unit1Symbol: 'ft',
    unit2Symbol: 'm',
    toUnit2: (v) => v / 3.2808399,
    toUnit1: (v) => v * 3.2808399,
    defaultVal1: 15
  },
  'cm-to-inch': {
    unit1Label: 'السنتيمتر',
    unit2Label: 'البوصة (الإنش)',
    unit1Symbol: 'cm',
    unit2Symbol: 'in',
    toUnit2: (v) => v / 2.54,
    toUnit1: (v) => v * 2.54,
    defaultVal1: 100
  },
  'inch-to-cm': {
    unit1Label: 'البوصة (الإنش)',
    unit2Label: 'السنتيمتر',
    unit1Symbol: 'in',
    unit2Symbol: 'cm',
    toUnit2: (v) => v * 2.54,
    toUnit1: (v) => v / 2.54,
    defaultVal1: 55
  },
  'km-to-mile': {
    unit1Label: 'الكيلومتر',
    unit2Label: 'الميل',
    unit1Symbol: 'km',
    unit2Symbol: 'mi',
    toUnit2: (v) => v * 0.621371192,
    toUnit1: (v) => v / 0.621371192,
    defaultVal1: 100
  },
  'mile-to-km': {
    unit1Label: 'الميل',
    unit2Label: 'الكيلومتر',
    unit1Symbol: 'mi',
    unit2Symbol: 'km',
    toUnit2: (v) => v / 0.621371192,
    toUnit1: (v) => v * 0.621371192,
    defaultVal1: 60
  },
  'celsius-to-fahrenheit': {
    unit1Label: 'المئوي (سيليزيوس)',
    unit2Label: 'الفهرنهايت',
    unit1Symbol: '°C',
    unit2Symbol: '°F',
    toUnit2: (v) => (v * 9) / 5 + 32,
    toUnit1: (v) => ((v - 32) * 5) / 9,
    defaultVal1: 25
  },
  'fahrenheit-to-celsius': {
    unit1Label: 'الفهرنهايت',
    unit2Label: 'المئوي (سيليزيوس)',
    unit1Symbol: '°F',
    unit2Symbol: '°C',
    toUnit2: (v) => ((v - 32) * 5) / 9,
    toUnit1: (v) => (v * 9) / 5 + 32,
    defaultVal1: 98.6
  },
  'liter-to-gallon': {
    unit1Label: 'اللتر',
    unit2Label: 'الجالون (الأمريكي)',
    unit1Symbol: 'L',
    unit2Symbol: 'gal',
    toUnit2: (v) => v * 0.264172052,
    toUnit1: (v) => v / 0.264172052,
    defaultVal1: 10
  },
  'mb-to-gb': {
    unit1Label: 'ميجابايت',
    unit2Label: 'جيجابايت',
    unit1Symbol: 'MB',
    unit2Symbol: 'GB',
    toUnit2: (v) => v / 1024,
    toUnit1: (v) => v * 1024,
    defaultVal1: 2048
  },
  'gb-to-tb': {
    unit1Label: 'جيجابايت',
    unit2Label: 'تيرابايت',
    unit1Symbol: 'GB',
    unit2Symbol: 'TB',
    toUnit2: (v) => v / 1024,
    toUnit1: (v) => v * 1024,
    defaultVal1: 1024
  }
};

interface GenericUnitConverterProps {
  toolId: string;
}

export const GenericUnitConverter: React.FC<GenericUnitConverterProps> = ({ toolId }) => {
  const config = CONVERTER_CONFIGS[toolId] || CONVERTER_CONFIGS['kg-to-pound'];

  const [val1, setVal1] = useState<string>(String(config.defaultVal1 ?? 1));
  const [val2, setVal2] = useState<string>('');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [copied, setCopied] = useState(false);

  // Recalculate whenever inputs or direction change
  useEffect(() => {
    const defaultStart = String(config.defaultVal1 ?? 1);
    setVal1(defaultStart);
    const parsed = parseFloat(defaultStart);
    if (!isNaN(parsed)) {
      setVal2(config.toUnit2(parsed).toLocaleString('ar-EG', { maximumFractionDigits: 4 }));
    }
    setDirection('forward');
  }, [toolId]);

  const handleVal1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setVal1(raw);
    const parsed = parseFloat(raw);
    if (isNaN(parsed)) {
      setVal2('');
    } else {
      const converted = direction === 'forward' ? config.toUnit2(parsed) : config.toUnit1(parsed);
      setVal2(converted.toLocaleString('ar-EG', { maximumFractionDigits: 4 }));
    }
  };

  const handleSwap = () => {
    setDirection(prev => (prev === 'forward' ? 'backward' : 'forward'));
    // Swap values
    const tempVal1 = val1;
    setVal1(val2.replace(/,/g, ''));
    setVal2(tempVal1);
  };

  const handleReset = () => {
    const defaultStart = String(config.defaultVal1 ?? 1);
    setVal1(defaultStart);
    const parsed = parseFloat(defaultStart);
    setVal2(config.toUnit2(parsed).toLocaleString('ar-EG', { maximumFractionDigits: 4 }));
    setDirection('forward');
  };

  const handleCopy = () => {
    const currentUnit1 = direction === 'forward' ? config.unit1Label : config.unit2Label;
    const currentUnit2 = direction === 'forward' ? config.unit2Label : config.unit1Label;
    const text = `${val1} ${currentUnit1} تساوي ${val2} ${currentUnit2}. تم التحويل عبر حاسباتي.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeUnit1 = direction === 'forward' ? config.unit1Label : config.unit2Label;
  const activeUnit2 = direction === 'forward' ? config.unit2Label : config.unit1Label;
  const activeSymbol1 = direction === 'forward' ? config.unit1Symbol : config.unit2Symbol;
  const activeSymbol2 = direction === 'forward' ? config.unit2Symbol : config.unit1Symbol;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-sky-50 p-3 rounded-xl border border-sky-200 text-sm font-semibold text-sky-900">
        <span>اتجاه التحويل الحالي: <strong>{activeUnit1}</strong> ← إلى → <strong>{activeUnit2}</strong></span>
        <button
          onClick={handleSwap}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors cursor-pointer text-xs font-bold shadow-xs"
        >
          <ArrowUpDown className="w-3.5 h-3.5" />
          تبديل الاتجاه
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <label htmlFor="unit1-input" className="block text-sm font-semibold text-slate-700 mb-2">
            القيمة بـ {activeUnit1} ({activeSymbol1})
          </label>
          <input
            id="unit1-input"
            type="number"
            value={val1}
            onChange={handleVal1Change}
            className="w-full p-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-800 bg-white font-bold text-lg"
            placeholder="أدخل الرقم للتحويل"
          />
        </div>

        <div>
          <label htmlFor="unit2-input" className="block text-sm font-semibold text-slate-700 mb-2">
            النتيجة بـ {activeUnit2} ({activeSymbol2})
          </label>
          <input
            id="unit2-input"
            type="text"
            readOnly
            value={val2}
            className="w-full p-3.5 border border-sky-200 rounded-xl bg-sky-50 text-sky-900 font-extrabold text-lg cursor-default"
          />
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 pt-2">
        <button
          onClick={handleCopy}
          disabled={!val2}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-sky-900 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          {copied ? 'تم نسخ النتيجة!' : 'نسخ النتيجة'}
        </button>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة تعيين
        </button>
      </div>
    </div>
  );
};
