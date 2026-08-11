import React, { useState } from 'react';
import { X, Copy, Check, Code, Globe, Sparkles, BookOpen } from 'lucide-react';

interface BloggerExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerExporterModal: React.FC<BloggerExporterModalProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyCode = (code: string, sectionId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const genericBloggerTemplate = `<!-- كود إدراج حاسبة في تدوينة بلوجر Blogger -->
<div id="hasibati-tool-container" style="direction: rtl; text-align: right; font-family: 'Cairo', sans-serif; background: #ffffff; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; max-width: 600px; margin: 0 auto;">
  <h2 style="font-size: 20px; color: #1e293b; margin-bottom: 15px;">حاسبة تفاعلية</h2>
  
  <div style="margin-bottom: 15px;">
    <label style="display: block; font-size: 14px; font-weight: bold; margin-bottom: 5px; color: #475569;">القيمة الأولى:</label>
    <input type="number" id="val1" value="100" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;" />
  </div>
  
  <button onclick="calculateResult()" style="width: 100%; background: #4f46e5; color: white; font-weight: bold; padding: 12px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">حساب الآن</button>
  
  <div id="result-box" style="margin-top: 15px; padding: 15px; background: #f1f5f9; border-radius: 8px; text-align: center; display: none;">
    <span style="display: block; text-size: 12px; color: #64748b;">النتيجة الحسابية:</span>
    <strong id="result-value" style="font-size: 24px; color: #4f46e5;"></strong>
  </div>
</div>

<script>
function calculateResult() {
  var v1 = parseFloat(document.getElementById('val1').value) || 0;
  var res = v1 * 2; // أدرج معادلتك هنا
  document.getElementById('result-value').innerText = res;
  document.getElementById('result-box').style.display = 'block';
}
</script>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-lg">
            <Globe className="w-6 h-6 text-indigo-600" />
            دليل النقل والتكييف مع مدونات بلوجر (Blogger Guide)
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-900 leading-relaxed space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-emerald-800">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            تأكيد توافق المشروع مع مدونات بلوجر:
          </div>
          <p>
            تمت برمجة جميع حاسبات منصة <strong>"حاسباتي"</strong> بلغة JavaScript نقية تعمل 100% داخل المتصفح بدون أي Server أو قوام بيانات خارجية. هذا يعني أنه يمكنك بسهولة نسخ المنطق البرمجي لأي حاسبة ولصقها في أي مشاركة في Blogger!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <h3 className="font-extrabold text-slate-900 text-base">خطوات نقل أي أداة إلى مقال بلوجر:</h3>
          <ol className="list-decimal pr-5 space-y-3 leading-relaxed font-medium">
            <li>أنشئ مقالاً جديداً في لوحة تحكم مدونتك على <strong>Blogger</strong>.</li>
            <li>حوّل محرر المقال من وضع "عرض الإنشاء" إلى وضع <strong>"عرض HTML"</strong>.</li>
            <li>انسخ هيكل الكود البسيط الجاهز في الأسفل وضع معادلتك فيه.</li>
            <li>اضغط نشر أو معاينة المقال لتعمل الحاسبة فوراً داخل مقالك بشكل مستقل ورائع!</li>
          </ol>
        </div>

        {/* Generic Code Snippet */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>قالب HTML/JS جاهز ومبسط للنقل إلى مقال بلوجر:</span>
            <button
              onClick={() => handleCopyCode(genericBloggerTemplate, 'blogger-snippet')}
              className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold cursor-pointer"
            >
              {copiedSection === 'blogger-snippet' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedSection === 'blogger-snippet' ? 'تم النسخ!' : 'نسخ كود بلوجر'}
            </button>
          </div>
          <pre className="p-4 bg-slate-900 text-slate-200 text-xs font-mono rounded-xl overflow-x-auto dir-ltr text-left max-h-48">
            {genericBloggerTemplate}
          </pre>
        </div>

        {/* Footer actions */}
        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
          >
            فهمت ذلك، إغلاق الدليل
          </button>
        </div>
      </div>
    </div>
  );
};
