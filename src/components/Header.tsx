import React, { useState } from 'react';
import { Calculator, Search, Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PageRoute, CategoryId } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => { navigate({ type: 'home' }); setMobileMenuOpen(false); }}
          className="flex items-center gap-2 text-slate-900 font-extrabold text-xl tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-xs">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 bg-clip-text text-transparent">
            حاسباتي
          </span>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <button
            onClick={() => navigate({ type: 'home' })}
            className={`transition-colors cursor-pointer ${currentRoute.type === 'home' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
          >
            الرئيسية
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
              onBlur={() => setTimeout(() => setCategoriesDropdownOpen(false), 200)}
              className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer py-2"
            >
              <span>الأقسام</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigate({ type: 'all-tools', categoryFilter: cat.id });
                      setCategoriesDropdownOpen(false);
                    }}
                    className="w-full text-right px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{cat.title}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate({ type: 'all-tools', toolTypeFilter: 'calculator' })}
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            جميع الحاسبات
          </button>

          <button
            onClick={() => navigate({ type: 'all-tools', toolTypeFilter: 'converter' })}
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            أدوات التحويل
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            aria-label="بحث في الأدوات"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">بحث...</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => { navigate({ type: 'home' }); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 text-sm font-bold text-slate-800 hover:text-indigo-600 cursor-pointer"
          >
            الرئيسية
          </button>

          <div className="py-2 border-y border-slate-100 space-y-2">
            <span className="block text-xs font-bold text-slate-400 uppercase">أقسام الموقع</span>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    navigate({ type: 'all-tools', categoryFilter: cat.id });
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-lg text-xs font-semibold text-right cursor-pointer"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => { navigate({ type: 'all-tools', toolTypeFilter: 'calculator' }); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 text-sm font-bold text-slate-800 hover:text-indigo-600 cursor-pointer"
          >
            جميع الحاسبات
          </button>

          <button
            onClick={() => { navigate({ type: 'all-tools', toolTypeFilter: 'converter' }); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 text-sm font-bold text-slate-800 hover:text-indigo-600 cursor-pointer"
          >
            أدوات التحويل
          </button>
        </div>
      )}
    </header>
  );
};
