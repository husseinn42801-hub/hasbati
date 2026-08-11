import React from 'react';
import { X, ShieldCheck, FileText, Info, Mail, AlertTriangle } from 'lucide-react';

interface StaticPageModalProps {
  pageId: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const StaticPageModal: React.FC<StaticPageModalProps> = ({ pageId, onClose }) => {
  if (!pageId) return null;

  const getContent = () => {
    switch (pageId) {
      case 'about':
        return {
          title: 'من نحن - منصة حاسباتي',
          icon: <Info className="w-6 h-6 text-indigo-600" />,
          body: (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                <strong>منصة حاسباتي</strong> هي منصة عربية حرة ومجانية متخصصة في تقديم أدوات الحساب والتحويل الرقمي الدقيقة لمستخدمي الإنترنت في كافة أرجاء الوطن العربي.
              </p>
              <p>
                نهدف إلى تبسيط الحسابات اليومية والمالية والصحية والرياضية من خلال واجهات هادئة، سريعة، ومتوافقة تماماً مع مختلف شاشات الهواتف وأجهزة الكمبيوتر، مع الحفاظ على خصوصية البيانات حيث تتم كافة العمليات محلياً داخل جهاز المستخدم.
              </p>
            </div>
          )
        };
      case 'contact':
        return {
          title: 'اتصل بنا',
          icon: <Mail className="w-6 h-6 text-sky-600" />,
          body: (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                نسعد بتواصلكم واقتراحاتكم لتطوير حاسبات وأدوات جديدة تخدم المستخدم العربي.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div><strong>البريد الإلكتروني للدعم:</strong> support@hasibati.app</div>
                <div><strong>ساعات العمل:</strong> من الأحد إلى الخميس (9:00 ص - 5:00 م)</div>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'سياسة الخصوصية',
          icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
          body: (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                في <strong>حاسباتي</strong>، نحترم خصوصيتك بشكل كامل.
              </p>
              <ul className="list-disc pr-5 space-y-2">
                <li>لا نقوم بتخزين أو جمع أي بيانات مدخلة في الحاسبات أو التحويلات.</li>
                <li>تجري كافة العمليات الحسابية والرياضية داخل متصفحك مباشرة عبر JavaScript دون إرسالها لأي خادم.</li>
                <li>قد نقوم بنشر إعلانات طرف ثالث مستقبلاً (مثل Google AdSense) والتي قد تستخدم كوكيز مجهولة لتحسين تجربة الإعلانات.</li>
              </ul>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'شروط الاستخدام',
          icon: <FileText className="w-6 h-6 text-amber-600" />,
          body: (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                باستخدامك لمنصة حاسباتي، فإنك توافق على الشروط التالية:
              </p>
              <ul className="list-disc pr-5 space-y-2">
                <li>المنصة وأدواتها مجانية بالكامل للاستخدام الشخصي والتجاري.</li>
                <li>يمنع استخدام الأداة في أي أنشطة غير مشروعة أو ضارة.</li>
                <li>يتم تقديم جميع الحسابات والأدوات "كما هي" مع حرصنا الدائم على أقصى درجات الدقة.</li>
              </ul>
            </div>
          )
        };
      case 'disclaimer':
        return {
          title: 'إخلاء المسؤولية',
          icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
          body: (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p className="p-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl font-bold">
                جميع النتائج المستخرجة من الحاسبات الصحية والمالية والأدوات هي لأغراض استرشادية وتثقيفية فقط.
              </p>
              <p>
                لا تشكل نتائج حاسبات الصحة (مثل BMI و BMR) استشارة طبية أو تشخيصاً، ويجب دائماً مراجعة الطبيب المختص. كما أن الحسابات المالية والقروض هي تقديرية وتعتمد السياسات الفعلية للجهات التمويلية والبنوك.
              </p>
            </div>
          )
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-right">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg">
            {content.icon}
            {content.title}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>{content.body}</div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-sm transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
