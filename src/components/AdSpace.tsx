import React from 'react';

interface AdSpaceProps {
  slot?: 'top' | 'middle' | 'bottom' | 'sidebar';
}

export const AdSpace: React.FC<AdSpaceProps> = ({ slot = 'middle' }) => {
  return (
    <div className="my-6 w-full p-4 border border-dashed border-slate-300 rounded-xl bg-slate-50/70 text-center flex flex-col items-center justify-center min-h-[90px] transition-colors hover:border-slate-400">
      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1">
        مساحة إعلانية مخصصة لاحقاً (AdSense Slot)
      </span>
      <span className="text-xs text-slate-500">
        مكان ملائم لوضع الإعلانات دون التأثير على تجربة المستخدم
      </span>
    </div>
  );
};
