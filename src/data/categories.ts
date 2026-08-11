import { CategoryItem } from '../types';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'finance',
    title: 'المال والأعمال',
    description: 'حاسبات القروض، الفوائد، الخصومات، الادخار وحساب صافي الراتب بدقة.',
    iconName: 'Banknote',
    count: 6,
    color: 'emerald'
  },
  {
    id: 'health',
    title: 'الصحة واللياقة',
    description: 'حساب كتلة الجسم BMI، معدل الأيض BMR، السعرات، الوزن المثالي والبروتين.',
    iconName: 'HeartPulse',
    count: 5,
    color: 'rose'
  },
  {
    id: 'math',
    title: 'الرياضيات',
    description: 'حاسبة النسبة المئوية، الكسور، المتوسط الحسابي والحسابات الرياضية.',
    iconName: 'Calculator',
    count: 3,
    color: 'indigo'
  },
  {
    id: 'time',
    title: 'التاريخ والوقت',
    description: 'حساب العمر بالتفصيل بالأيام والأشهر والسنوات والسنوات الكبيسة.',
    iconName: 'Calendar',
    count: 1,
    color: 'amber'
  },
  {
    id: 'conversions',
    title: 'التحويلات',
    description: 'تحويل الأوزان، الأطوال، درجات الحرارة، الأحجام، وسعة البيانات الرقمية.',
    iconName: 'ArrowLeftRight',
    count: 13,
    color: 'sky'
  },
  {
    id: 'life',
    title: 'الحياة اليومية',
    description: 'أدوات وحاسبات سريعة تسهل عليك المهام والمعاملات اليومية.',
    iconName: 'Sparkles',
    count: 5,
    color: 'purple'
  }
];
