import React, { useState } from 'react';
import { ChevronLeft, Home, HelpCircle, BookOpen, Calculator, ArrowLeftRight, ChevronDown, Sparkles } from 'lucide-react';
import { ToolItem, PageRoute } from '../types';
import { TOOLS } from '../data/tools';
import { AdSpace } from './AdSpace';
import { ToolCard } from './ToolCard';

// Calculator components
import { AgeCalculator } from './calculators/AgeCalculator';
import { PercentageCalculator } from './calculators/PercentageCalculator';
import { DiscountCalculator } from './calculators/DiscountCalculator';
import { FractionsCalculator } from './calculators/FractionsCalculator';
import { AverageCalculator } from './calculators/AverageCalculator';
import { BMICalculator } from './calculators/BMICalculator';
import { BMRCalculator } from './calculators/BMRCalculator';
import { CaloriesCalculator } from './calculators/CaloriesCalculator';
import { IdealWeightCalculator } from './calculators/IdealWeightCalculator';
import { ProteinCalculator } from './calculators/ProteinCalculator';
import { SimpleInterestCalculator } from './calculators/SimpleInterestCalculator';
import { CompoundInterestCalculator } from './calculators/CompoundInterestCalculator';
import { LoanCalculator } from './calculators/LoanCalculator';
import { SavingsCalculator } from './calculators/SavingsCalculator';
import { SalaryCalculator } from './calculators/SalaryCalculator';
import { GenericUnitConverter } from './calculators/GenericUnitConverter';

interface ToolPageLayoutProps {
  tool: ToolItem;
  navigate: (route: PageRoute) => void;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ tool, navigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find related tools objects
  const relatedTools = TOOLS.filter((t) => tool.relatedIds.includes(t.id) || (t.categoryId === tool.categoryId && t.id !== tool.id)).slice(0, 3);

  const renderActiveCalculator = () => {
    switch (tool.id) {
      case 'age':
        return <AgeCalculator />;
      case 'percentage':
        return <PercentageCalculator />;
      case 'discount':
        return <DiscountCalculator />;
      case 'fractions':
        return <FractionsCalculator />;
      case 'average':
        return <AverageCalculator />;
      case 'bmi':
        return <BMICalculator />;
      case 'bmr':
        return <BMRCalculator />;
      case 'calories':
        return <CaloriesCalculator />;
      case 'ideal-weight':
        return <IdealWeightCalculator />;
      case 'protein':
        return <ProteinCalculator />;
      case 'simple-interest':
        return <SimpleInterestCalculator />;
      case 'compound-interest':
        return <CompoundInterestCalculator />;
      case 'loan':
        return <LoanCalculator />;
      case 'savings':
        return <SavingsCalculator />;
      case 'salary':
        return <SalaryCalculator />;
      default:
        return <GenericUnitConverter toolId={tool.id} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold flex-wrap">
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>الرئيسية</span>
        </button>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-300" />
        <button
          onClick={() => navigate({ type: 'all-tools', categoryFilter: tool.categoryId })}
          className="hover:text-indigo-600 transition-colors cursor-pointer"
        >
          {tool.categoryTitle}
        </button>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-900 font-bold">{tool.title}</span>
      </nav>

      {/* Header Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-bold">
            {tool.categoryTitle}
          </span>
          <span className="text-xs text-slate-400 font-medium">({tool.englishTitle})</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
          {tool.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          {tool.shortDescription}
        </p>
      </div>

      {/* Top Ad Space Slot */}
      <AdSpace slot="top" />

      {/* Main Interactive Tool Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
            {tool.type === 'calculator' ? (
              <Calculator className="w-5 h-5 text-indigo-600" />
            ) : (
              <ArrowLeftRight className="w-5 h-5 text-sky-600" />
            )}
            صندوق الحاسبة والتنفيذ المباشر
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            حساب فوري بالمتصفح
          </span>
        </div>

        {renderActiveCalculator()}
      </div>

      {/* Middle Ad Space Slot */}
      <AdSpace slot="middle" />

      {/* 7. Explanation "كيف تعمل الحاسبة؟" */}
      {tool.howItWorks && tool.howItWorks.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            كيف تعمل هذه الحاسبة والأداة؟
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-700 pr-4 list-disc marker:text-indigo-500 leading-relaxed">
            {tool.howItWorks.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 8. Formula & 9. Example */}
      {(tool.formula || tool.example) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tool.formula && (
            <div className="p-5 bg-slate-900 text-slate-100 rounded-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block">المعادلة الرياضية المعتمدة</span>
              <p className="text-sm font-mono leading-relaxed dir-ltr text-right font-medium text-amber-300">
                {tool.formula}
              </p>
            </div>
          )}

          {tool.example && (
            <div className="p-5 bg-indigo-50/80 border border-indigo-200 rounded-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block">مثال تطبيقي عملي</span>
              <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
                {tool.example}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 10. FAQs Section */}
      {tool.faqs && tool.faqs.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            الأسئلة الشائعة حول {tool.title}
          </h2>

          <div className="space-y-3">
            {tool.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-right p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-bold text-sm text-slate-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Ad Space Slot */}
      <AdSpace slot="bottom" />

      {/* 11. Related Tools Links */}
      {relatedTools.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              أدوات وحاسبات ذات صلة
            </h3>
            <button
              onClick={() => navigate({ type: 'all-tools', categoryFilter: tool.categoryId })}
              className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
            >
              عرض الكل بالقسم
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((relTool) => (
              <ToolCard key={relTool.id} tool={relTool} navigate={navigate} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
