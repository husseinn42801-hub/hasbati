import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ToolPageLayout } from './components/ToolPageLayout';
import { AllToolsPage } from './components/AllToolsPage';
import { SearchModal } from './components/SearchModal';
import { BloggerExporterModal } from './components/BloggerExporterModal';
import { StaticPageModal } from './components/StaticPageModal';
import { PageRoute } from './types';
import { TOOLS } from './data/tools';

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname;
    if (path === '/' || !path) return { type: 'home' };
    if (path === '/calculators' || path === '/converters') return { type: 'all-tools' };
    const matchedTool = TOOLS.find(t => t.slug === path);
    if (matchedTool) return { type: 'tool', slug: matchedTool.slug };
    return { type: 'home' };
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [bloggerGuideOpen, setBloggerGuideOpen] = useState(false);
  const [staticPageId, setStaticPageId] = useState<'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Sync state with browser URL history
  const navigate = (newRoute: PageRoute) => {
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let targetPath = '/';
    if (newRoute.type === 'all-tools') {
      targetPath = newRoute.toolTypeFilter === 'converter' ? '/converters' : '/calculators';
    } else if (newRoute.type === 'tool') {
      targetPath = newRoute.slug;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || !path) setRoute({ type: 'home' });
      else if (path === '/calculators' || path === '/converters') setRoute({ type: 'all-tools' });
      else {
        const matchedTool = TOOLS.find(t => t.slug === path);
        if (matchedTool) setRoute({ type: 'tool', slug: matchedTool.slug });
        else setRoute({ type: 'home' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    if (route.type === 'home') {
      return <HomePage navigate={navigate} />;
    }

    if (route.type === 'all-tools') {
      return (
        <AllToolsPage
          initialCategory={route.categoryFilter}
          initialType={route.toolTypeFilter}
          navigate={navigate}
        />
      );
    }

    if (route.type === 'tool') {
      const tool = TOOLS.find((t) => t.slug === route.slug);
      if (tool) {
        return <ToolPageLayout tool={tool} navigate={navigate} />;
      }
      return <HomePage navigate={navigate} />;
    }

    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Cairo',sans-serif] selection:bg-indigo-500 selection:text-white">
      {/* 1. Header */}
      <Header
        currentRoute={route}
        navigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* 6. Footer */}
      <Footer
        navigate={navigate}
        onOpenStaticPage={(pageId) => setStaticPageId(pageId)}
        onOpenBloggerGuide={() => setBloggerGuideOpen(true)}
      />

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
      />

      <BloggerExporterModal
        isOpen={bloggerGuideOpen}
        onClose={() => setBloggerGuideOpen(false)}
      />

      <StaticPageModal
        pageId={staticPageId}
        onClose={() => setStaticPageId(null)}
      />
    </div>
  );
}
