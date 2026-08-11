import React, { useState, useMemo } from 'react';
import { Search, X, ChevronLeft } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { PageRoute } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (route: PageRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return TOOLS.filter((tool) => {
      const titleMatch = tool.title.toLowerCase().includes(q);
      const engMatch = tool.englishTitle.toLowerCase().includes(q);
      const kwMatch = tool.keywords.some((kw) => kw.toLowerCase().includes(q));
      const descMatch = tool.shortDescription.toLowerCase().includes(q);
      return titleMatch || engMatch || kwMatch || descMatch;
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden space-y-0 text-right">
        {/* Search Input Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن اسم حاسبة أو أداة تحويل... (مثل: عمر، خصم، كيلو، راتب)"
            className="w-full bg-transparent border-none text-slate-900 focus:outline-hidden font-semibold text-base placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {query.trim().length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 space-y-2">
              <p className="font-bold text-slate-600">اكتب أي كلمة للبحث الفوري في قائمة الأقسام والأدوات.</p>
              <p>البحث يدعم الكلمات العربية والإنجليزية والكلمات المرادفة (مثل: تحويل الكيلو، حساب التخفيض، العمر).</p>
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  navigate({ type: 'tool', slug: tool.slug });
                  onClose();
                }}
                className="w-full p-4 text-right hover:bg-indigo-50/80 flex items-center justify-between transition-colors cursor-pointer group"
              >
                <div>
                  <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 flex items-center gap-2">
                    {tool.title}
                    <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                      {tool.categoryTitle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-1">{tool.shortDescription}</p>
                </div>
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-sm text-slate-500">
              لم نعثر على نتائج تطابق "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
