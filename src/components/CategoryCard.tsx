import React from 'react';
import { Banknote, HeartPulse, Calculator, Calendar, ArrowLeftRight, Sparkles, ChevronLeft } from 'lucide-react';
import { CategoryItem, PageRoute } from '../types';

interface CategoryCardProps {
  category: CategoryItem;
  navigate: (route: PageRoute) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Banknote: <Banknote className="w-6 h-6 text-emerald-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600" />,
  Calculator: <Calculator className="w-6 h-6 text-indigo-600" />,
  Calendar: <Calendar className="w-6 h-6 text-amber-600" />,
  ArrowLeftRight: <ArrowLeftRight className="w-6 h-6 text-sky-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-600" />
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, navigate }) => {
  return (
    <div
      onClick={() => navigate({ type: 'all-tools', categoryFilter: category.id })}
      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
            {ICON_MAP[category.iconName] || <Calculator className="w-6 h-6 text-indigo-600" />}
          </div>
          <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
            {category.count} أدوات
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
          {category.title}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
        <span>استعرض قسم {category.title}</span>
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
