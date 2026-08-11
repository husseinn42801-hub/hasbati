import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ArrowLeft, ChevronLeft } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { ToolItem, PageRoute } from '../types';

interface HeroProps {
  navigate: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return TOOLS.filter((tool) => {
      const titleMatch = tool.title.toLowerCase().includes(q);
      const engMatch = tool.englishTitle.toLowerCase().includes(q);
      const kwMatch = tool.keywords.some((kw) => kw.toLowerCase().includes(q));
      const descMatch = tool.shortDescription.toLowerCase().includes(q);
      return titleMatch || engMatch || kwMatch || descMatch;
    }).slice(0, 6);
  }, [query]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-800/60 border border-indigo-700/60 text-indigo-200 text-xs font-semibold backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          منصة عربية سريعة 100% مجانية ودقيقة
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          حاسبات وأدوات مجانية
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          احسب، حوّل، واكتشف النتائج بسرعة باستخدام مجموعة مجانية من الحاسبات والأدوات.
        </p>

        {/* Real Live Interactive Search Box */}
        <div className="relative max-w-2xl mx-auto pt-2">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="ابحث عن حاسبة أو أداة... (مثال: عمر، خصم، كيلو، BMI، قروض)"
              className="w-full p-4 pr-12 pl-12 bg-white text-slate-900 rounded-2xl shadow-xl border-2 border-indigo-300/40 focus:border-indigo-400 focus:outline-hidden text-base sm:text-lg font-medium placeholder:text-slate-400 transition-all"
            />
            <Search className="w-6 h-6 text-indigo-600 absolute right-4 top-4.5 pointer-events-none" />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute left-4 top-4.5 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>

          {/* Live Search Autocomplete Dropdown Results */}
          {isFocused && query.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-right">
              {searchResults.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  <div className="px-4 py-2 bg-slate-50 text-xs font-bold text-slate-500">
                    نتائج البحث الحية ({searchResults.length}):
                  </div>
                  {searchResults.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        navigate({ type: 'tool', slug: tool.slug });
                        setQuery('');
                        setIsFocused(false);
                      }}
                      className="w-full px-4 py-3 text-right hover:bg-indigo-50 flex items-center justify-between transition-colors cursor-pointer group"
                    >
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 flex items-center gap-2">
                          {tool.title}
                          <span className="text-[10px] font-medium text-slate-400">({tool.englishTitle})</span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{tool.shortDescription}</p>
                      </div>
                      <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-slate-500">
                  لم نجد أي أدوات تطابق كلمة البحث "{query}". يمكنك استعراض <button onClick={() => navigate({ type: 'all-tools' })} className="text-indigo-600 underline font-bold cursor-pointer">جميع الأدوات هنا</button>.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-indigo-200 pt-2">
          <span className="font-semibold text-slate-400">الأكثر بحثاً:</span>
          <button onClick={() => navigate({ type: 'tool', slug: '/calculators/age' })} className="px-2.5 py-1 bg-indigo-900/60 hover:bg-indigo-800 rounded-lg border border-indigo-700/50 transition-colors cursor-pointer">حاسبة العمر</button>
          <button onClick={() => navigate({ type: 'tool', slug: '/calculators/percentage' })} className="px-2.5 py-1 bg-indigo-900/60 hover:bg-indigo-800 rounded-lg border border-indigo-700/50 transition-colors cursor-pointer">النسبة المئوية</button>
          <button onClick={() => navigate({ type: 'tool', slug: '/calculators/discount' })} className="px-2.5 py-1 bg-indigo-900/60 hover:bg-indigo-800 rounded-lg border border-indigo-700/50 transition-colors cursor-pointer">الخصم</button>
          <button onClick={() => navigate({ type: 'tool', slug: '/calculators/bmi' })} className="px-2.5 py-1 bg-indigo-900/60 hover:bg-indigo-800 rounded-lg border border-indigo-700/50 transition-colors cursor-pointer">BMI</button>
          <button onClick={() => navigate({ type: 'tool', slug: '/converters/kg-to-pound' })} className="px-2.5 py-1 bg-indigo-900/60 hover:bg-indigo-800 rounded-lg border border-indigo-700/50 transition-colors cursor-pointer">كيلو إلى باوند</button>
        </div>
      </div>
    </section>
  );
};
