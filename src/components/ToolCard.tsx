import React from 'react';
import { ChevronLeft, Sparkles, ArrowLeftRight, Calculator } from 'lucide-react';
import { ToolItem, PageRoute } from '../types';

interface ToolCardProps {
  tool: ToolItem;
  navigate: (route: PageRoute) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, navigate }) => {
  const isConverter = tool.type === 'converter';

  return (
    <div
      onClick={() => navigate({ type: 'tool', slug: tool.slug })}
      className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isConverter ? 'bg-sky-50 text-sky-700 border border-sky-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>
            {isConverter ? <ArrowLeftRight className="w-3 h-3" /> : <Calculator className="w-3 h-3" />}
            {tool.categoryTitle}
          </span>
          {tool.popular && (
            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md">
              شائع
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
          {tool.title}
        </h3>

        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
        <span>افتح الأداة الآن</span>
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
