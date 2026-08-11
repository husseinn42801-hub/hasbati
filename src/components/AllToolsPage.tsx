import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { CategoryId, ToolType, PageRoute } from '../types';
import { ToolCard } from './ToolCard';
import { Calculator, ArrowLeftRight, Filter, Search } from 'lucide-react';

interface AllToolsPageProps {
  initialCategory?: CategoryId;
  initialType?: ToolType;
  navigate: (route: PageRoute) => void;
}

export const AllToolsPage: React.FC<AllToolsPageProps> = ({ initialCategory, initialType, navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory || 'all');
  const [selectedType, setSelectedType] = useState<ToolType | 'all'>(initialType || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS.filter((tool) => {
    if (selectedCategory !== 'all' && tool.categoryId !== selectedCategory) return false;
    if (selectedType !== 'all' && tool.type !== selectedType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const titleMatch = tool.title.toLowerCase().includes(q);
      const engMatch = tool.englishTitle.toLowerCase().includes(q);
      const kwMatch = tool.keywords.some((kw) => kw.toLowerCase().includes(q));
      return titleMatch || engMatch || kwMatch;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          جميع الحاسبات وأدوات التحويل
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          تصفح دليل الحاسبات الكامل المصنف حسب المجالات، أو تصفح أدوات التحويل السريعة.
        </p>
      </div>

      {/* Filter controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-bold text-slate-600">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
            >
              الكل ({TOOLS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${selectedCategory === cat.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
              >
                {cat.title} ({cat.count})
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold shrink-0">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedType === 'all' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'}`}
            >
              الجميع
            </button>
            <button
              onClick={() => setSelectedType('calculator')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedType === 'calculator' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'}`}
            >
              حاسبات فقط
            </button>
            <button
              onClick={() => setSelectedType('converter')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedType === 'converter' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'}`}
            >
              تحويلات فقط
            </button>
          </div>
        </div>

        {/* Search inside catalog */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="تصفية حسب الاسم أو الكلمات المفتاحية..."
            className="w-full p-3 pr-10 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-slate-50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
        </div>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} navigate={navigate} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl text-slate-500">
          لا توجد أدوات تطابق الفلتر أو كلمة البحث المحددة.
        </div>
      )}
    </div>
  );
};
