import React from 'react';
import { Hero } from './Hero';
import { CategoryCard } from './CategoryCard';
import { ToolCard } from './ToolCard';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { PageRoute } from '../types';
import { Sparkles, ArrowLeft, Star, Grid } from 'lucide-react';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  // Filter popular tools as requested: Age, Percentage, Discount, BMI, Loan, Calories
  const popularTools = TOOLS.filter((t) =>
    ['age', 'percentage', 'discount', 'bmi', 'loan', 'calories'].includes(t.id)
  );

  return (
    <div className="space-y-16 pb-12">
      {/* 2. Hero Section */}
      <Hero navigate={navigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 3. الأقسام الرئيسية */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Grid className="w-6 h-6 text-indigo-600" />
                الأقسام الرئيسية
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                استكشف أدواتنا الموزعة بوضوح حسب مجالات الاستخدام اليومي والمهني
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} navigate={navigate} />
            ))}
          </div>
        </section>

        {/* 4. أشهر الحاسبات */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                أشهر الحاسبات والأدوات
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                الحاسبات الأكثر استخداماً وإقبالاً من الزوار لمعالجة الحسابات اليومية
              </p>
            </div>

            <button
              onClick={() => navigate({ type: 'all-tools' })}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-extrabold text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer"
            >
              عرض جميع الحاسبات والأدوات →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} navigate={navigate} />
            ))}
          </div>
        </section>

        {/* 5. جميع الأدوات (رابط واضح) */}
        <section className="p-8 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-extrabold">هل تبحث عن المزيد من أدوات التحويل والحاسبات؟</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            تضم منصة حاسباتي أكثر من 28 أداة تفاعلية سريعة ومجانية بدون تسجيل أو رسوم.
          </p>
          <div>
            <button
              onClick={() => navigate({ type: 'all-tools' })}
              className="px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer text-sm"
            >
              عرض جميع الحاسبات والأدوات ({TOOLS.length})
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
