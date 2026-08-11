export type ToolType = 'calculator' | 'converter';

export type CategoryId = 'finance' | 'health' | 'math' | 'time' | 'conversions' | 'life';

export interface CategoryItem {
  id: CategoryId;
  title: string;
  description: string;
  iconName: string;
  count: number;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  type: ToolType;
  categoryId: CategoryId;
  categoryTitle: string;
  title: string;
  englishTitle: string;
  shortDescription: string;
  popular?: boolean;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  howItWorks: string[];
  formula?: string;
  example?: string;
  faqs: FAQItem[];
  relatedIds: string[];
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'all-tools'; categoryFilter?: CategoryId; toolTypeFilter?: ToolType }
  | { type: 'tool'; slug: string }
  | { type: 'static'; pageId: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' };
