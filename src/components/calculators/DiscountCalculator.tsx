import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Tag } from 'lucide-react';

export const DiscountCalculator: React.FC = () => {
  const [originalPrice, setOriginalPrice] = useState('250');
  const [discountPercent, setDiscountPercent] = useState('20');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const price = parseFloat(originalPrice);
    const pct = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(pct) || price < 0 || pct < 0) return null;

    const savings = (price * pct) / 100;
    const finalPrice = price - savings;

    return {
      originalPrice: price.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      discountPercent: pct,
      savings: savings.toLocaleString('ar-EG', { maximumFractionDigits: 2 }),
      finalPrice: Math.max(0, finalPrice).toLocaleString('ar-EG', { maximumFractionDigits: 2 })
    };
  };

  const res = calculate();

  const handleCopy = () => {
    if (!res) return;
    navigator.clipboard.writeText(`السعر الأصلي: ${res.originalPrice} - الخصم: ${res.discountPercent}% - التوفير: ${res.savings} - السعر بعد الخصم: ${res.finalPrice}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="original-price-input" className="block text-sm font-semibold text-slate-700 mb-2">السعر الأصلي قبل الخصم</label>
          <input
            id="original-price-input"
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 250"
          />
        </div>

        <div>
          <label htmlFor="discount-percent-input" className="block text-sm font-semibold text-slate-700 mb-2">نسبة الخصم (%)</label>
          <input
            id="discount-percent-input"
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
            placeholder="مثال: 20"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => { setOriginalPrice('250'); setDiscountPercent('20'); }}
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
              <Tag className="w-5 h-5 text-emerald-600" />
              تفاصيل التخفيض والتوفير
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-200/80 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'تم النسخ!' : 'نسخ النتيجة'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-emerald-200 text-center shadow-xs">
              <span className="block text-xs font-semibold text-slate-500 mb-1">السعر النهائي بعد الخصم</span>
              <span className="text-3xl font-extrabold text-emerald-700">{res.finalPrice}</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-emerald-200 text-center shadow-xs">
              <span className="block text-xs font-semibold text-slate-500 mb-1">مقدار المال التوفيري المصون</span>
              <span className="text-3xl font-extrabold text-teal-600">{res.savings}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
