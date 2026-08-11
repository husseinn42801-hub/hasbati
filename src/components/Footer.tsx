import React from 'react';
import { Calculator, Globe, Heart } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  navigate: (route: PageRoute) => void;
  onOpenStaticPage: (pageId: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer') => void;
  onOpenBloggerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenStaticPage, onOpenBloggerGuide }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-black text-xl">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Calculator className="w-4 h-4" />
              </div>
              <span>حاسباتي</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              منصة عربية شاملة للحاسبات اليومية وأدوات التحويل السريعة المجانية، تعمل بالكامل على متصفحك بدقة وبدون إعلانات مزعجة.
            </p>
            <button
              onClick={onOpenBloggerGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-900/80 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              دليل النقل إلى بلوجر Blogger
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الأقسام الحاسبة</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => navigate({ type: 'all-tools', categoryFilter: 'finance' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبات المال والأعمال
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'all-tools', categoryFilter: 'health' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبات الصحة واللياقة
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'all-tools', categoryFilter: 'math' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبات الرياضيات
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'all-tools', categoryFilter: 'conversions' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  أدوات التحويلات المعيارية
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">أشهر الأدوات</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => navigate({ type: 'tool', slug: '/calculators/age' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبة العمر الدقيقة
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'tool', slug: '/calculators/percentage' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبة النسبة المئوية
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'tool', slug: '/calculators/discount' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبة الخصم والتخفيضات
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'tool', slug: '/calculators/bmi' })} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  حاسبة مؤشر كتلة الجسم BMI
                </button>
              </li>
              <li>
                <button onClick={() => navigate({ type: 'all-tools' })} className="text-indigo-400 font-bold hover:underline cursor-pointer">
                  جميع الحاسبات والأدوات →
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الصفحات والمعلومات</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onOpenStaticPage('about')} className="hover:text-white transition-colors cursor-pointer">
                  من نحن
                </button>
              </li>
              <li>
                <button onClick={() => onOpenStaticPage('contact')} className="hover:text-white transition-colors cursor-pointer">
                  اتصل بنا
                </button>
              </li>
              <li>
                <button onClick={() => onOpenStaticPage('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button onClick={() => onOpenStaticPage('terms')} className="hover:text-white transition-colors cursor-pointer">
                  شروط الاستخدام
                </button>
              </li>
              <li>
                <button onClick={() => onOpenStaticPage('disclaimer')} className="hover:text-white transition-colors cursor-pointer">
                  إخلاء المسؤولية
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} منصة <strong>حاسباتي</strong>.
          </div>

          <div className="flex items-center gap-1">
            <span>صُنِع بـ</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>لخدمة المستخدم العربي</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
