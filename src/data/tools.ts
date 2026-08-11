import { ToolItem } from '../types';

export const TOOLS: ToolItem[] = [
  // CALCULATORS
  {
    id: 'age',
    slug: '/calculators/age',
    type: 'calculator',
    categoryId: 'time',
    categoryTitle: 'التاريخ والوقت',
    title: 'حاسبة العمر الدقيقة',
    englishTitle: 'Age Calculator',
    shortDescription: 'احسب عمرك بالسنوات والأشهر والأيام والساعات بدقة متناهية مع مراعاة السنوات الكبيسة.',
    popular: true,
    keywords: ['عمر', 'حاسبة العمر', 'تاريخ الميلاد', 'كم عمري', 'سنوات', 'أشهر', 'أيام', 'age', 'birthday', 'birthdate'],
    metaTitle: 'حاسبة العمر الدقيقة | احسب عمرك بالسنوات والأشهر والأيام - حاسباتي',
    metaDescription: 'أداة مجانية لحساب العمر بالتفصيل بناءً على تاريخ الميلاد، تحسب لك سنواتك وأشهرك وأيامك ويوم ميلادك القادم بدقة.',
    howItWorks: [
      'قم بتبديل أو إدخال تاريخ ميلادك (اليوم، الشهر، السنة).',
      'يمكنك تحديد تاريخ محدد للحساب أو الاعتماد على تاريخ اليوم تلقائياً.',
      'تراعي الحاسبة الأشهر ذات 28 أو 30 أو 31 يوماً وكذلك السنوات الكبيسة (Leap Years).',
      'تظهر لك النتائج فوراً مجزأة إلى أعوام، أشهر، أيام، وساعات تقريبية.'
    ],
    formula: 'العمر = تاريخ اليوم الحالي - تاريخ الميلاد (مع الأخذ بعين الاعتبار عدد أيام كل شهر وتأثير السنوات الكبيسة 366 يوماً).',
    example: 'إذا ولد شخص بتاريخ 15 مايو 1995، واليوم هو 10 أغسطس 2026، فإن عمره يكون 31 سنة و2 أشهر و26 يوماً.',
    faqs: [
      {
        question: 'هل تأخذ الحاسبة السنوات الكبيسة في الحسبان؟',
        answer: 'نعم، تعتمد الأداة على خوارزمية جوليانية/ميلادية دقيقة تحسب السنوات الكبيسة ذات الـ 366 يوماً بدقة متناهية.'
      },
      {
        question: 'هل يمكن حساب العمر حتى تاريخ مستقبلي؟',
        answer: 'نعم، يمكنك تغيير "تاريخ الحساب" لرؤية كم سيكون عمرك في أي تاريخ اختياري في المستقبل.'
      }
    ],
    relatedIds: ['percentage', 'bmi', 'salary']
  },
  {
    id: 'percentage',
    slug: '/calculators/percentage',
    type: 'calculator',
    categoryId: 'math',
    categoryTitle: 'الرياضيات',
    title: 'حاسبة النسبة المئوية',
    englishTitle: 'Percentage Calculator',
    shortDescription: 'احسب نسبة مئوية من رقم، أو معرفة النسبة بين رقمين، أو حساب الزيادة والنقصان.',
    popular: true,
    keywords: ['نسبة', 'نسبة مئوية', 'احسب النسبة', 'مئوية', 'النسب المئوية', 'percentage', 'percent', '%'],
    metaTitle: 'حاسبة النسبة المئوية السريعة | حساب النسب والزيادة والنقصان - حاسباتي',
    metaDescription: 'حاسبة النسبة المئوية المجانية لمختلف العمليات: استخراج قيمة النسبة من عدد، نسبة عدد إلى آخر، ونسبة الزيادة أو النقصان.',
    howItWorks: [
      'اختر نوع العملية (حساب نسبة من رقم، أو النسبة بين رقمين، أو مقدار الزيادة/النقصان).',
      'أدخل الأرقام المطلوبة في الحقول.',
      'تحصل على الناتج مباشرة مع توضيح مبسط للخطوة الرياضية.'
    ],
    formula: 'النسبة من رقم = (النسبة ÷ 100) × الرقم | نسبة رقم إلى آخر = (الرقم الأول ÷ الرقم الثاني) × 100',
    example: 'لحساب 15% من المبلغ 500 ريال: (15 ÷ 100) × 500 = 75 ريال.',
    faqs: [
      {
        question: 'كيف أحسب قيمة الخصم المئوي؟',
        answer: 'يمكنك استخدام خيار الزيادة والنقصان في هذه الحاسبة أو الانتقال مباشرة إلى "حاسبة الخصم المخصصة".'
      }
    ],
    relatedIds: ['discount', 'average', 'fractions']
  },
  {
    id: 'discount',
    slug: '/calculators/discount',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة الخصم والتخفيضات',
    englishTitle: 'Discount Calculator',
    shortDescription: 'احسب السعر النهائي بعد الخصم والمبلغ الصافي الذي وفرته أثناء التسوق.',
    popular: true,
    keywords: ['خصم', 'تخفيض', 'حاسبة الخصم', 'تنزيلات', 'سعر الخصم', 'توفير', 'discount', 'sale', 'offer'],
    metaTitle: 'حاسبة الخصم والتخفيضات | معرفة السعر بعد التخفيض والمبلغ الموفر - حاسباتي',
    metaDescription: 'أداة سهلة لحساب السعر الجديد بعد تطبيق نسبة الخصم ومعرفة مقدار المال الذي تم توفيره بالظبط.',
    howItWorks: [
      'أدخل السعر الأصلي للسلعة أو المنتج.',
      'أدخل نسبة الخصم المئوية (مثل 20% أو 50%).',
      'شاهد فوراً السعر النهائي ومقدار المال الذي وفرته.'
    ],
    formula: 'مقدار التوفير = السعر الأصلي × (نسبة الخصم ÷ 100) | السعر النهائي = السعر الأصلي - مقدار التوفير',
    example: 'قميص بسعر 200 ريال عليه خصم 25%: التوفير = 50 ريال، والسعر النهائي المطلوب دفعه = 150 ريال.',
    faqs: [
      {
        question: 'هل يمكن تطبيق خصم إضافي؟',
        answer: 'يمكنك أخذ السعر النهائي الجديد وإدخاله مرة أخرى مع نسبة الخصم الثانية لحساب الخصم المزدوج.'
      }
    ],
    relatedIds: ['percentage', 'simple-interest', 'salary']
  },
  {
    id: 'fractions',
    slug: '/calculators/fractions',
    type: 'calculator',
    categoryId: 'math',
    categoryTitle: 'الرياضيات',
    title: 'حاسبة الكسور الاعتيادية',
    englishTitle: 'Fractions Calculator',
    shortDescription: 'جمع، طرح، ضرب وقسمة الكسور مع تبسيط الناتج إلى أبسط صورة وتحويله إلى رقم عشري.',
    popular: false,
    keywords: ['كسور', 'حاسبة الكسور', 'بسط ومقام', 'جمع كسور', 'قسمة كسور', 'fractions', 'numerator', 'denominator'],
    metaTitle: 'حاسبة الكسور الاعتيادية | جمع وطرح وضرب وقسمة الكسور - حاسباتي',
    metaDescription: 'حاسبة كسور الشاملة للعمليات الحسابية الأربع، تعطيك النتيجة على شكل كسر مبسط ورقم عشري دقيق.',
    howItWorks: [
      'أدخل البسط والمقام للكسر الأول.',
      'اختر العملية الرياضية (+، -، ×، ÷).',
      'أدخل البسط والمقام للكسر الثاني.',
      'ستظهر النتيجة فوراً بكسر أبسط مع المكافئ العشري.'
    ],
    formula: 'الضرب: (أ/ب) × (ج/د) = (أ×ج) / (ب×د) | الجمع: توحيد المقامات أ/ب + ج/د = (أ×د + ج×ب) / (ب×د)',
    example: '1/2 + 1/4 = 3/4 (أو 0.75 برقم عشري).',
    faqs: [
      {
        question: 'ماذا يحدث إذا كان المقام صفراً؟',
        answer: 'تمنع الأداة إدخال الصفر في المقام لأن القسمة على صفر غير معرفة رياضياً.'
      }
    ],
    relatedIds: ['percentage', 'average']
  },
  {
    id: 'average',
    slug: '/calculators/average',
    type: 'calculator',
    categoryId: 'math',
    categoryTitle: 'الرياضيات',
    title: 'حاسبة المتوسط الحسابي',
    englishTitle: 'Average Calculator',
    shortDescription: 'احسب المعدل والمتوسط الحسابي، المجموع، وعدد العناصر لأي سلسلة من الأرقام.',
    popular: false,
    keywords: ['متوسط', 'معدل', 'حاسبة المتوسط', 'المعدل الحسابي', 'مجموع', 'average', 'mean', 'sum'],
    metaTitle: 'حاسبة المتوسط الحسابي والمعدل | حساب مجموع ومعدل الأرقام - حاسباتي',
    metaDescription: 'أدخل مجموعة من الأرقام تفصلها فواصل أو مسافات، واحصل فوراً على المتوسط الحسابي والمجموع والقيم الكبرى والصغرى.',
    howItWorks: [
      'أدخل الأرقام يفصل بينها مسافة أو فاصلة (مثال: 10, 20, 30, 40).',
      'تحسب الأدواة تلقائياً العدد الإجمالي للقيم والمجموع والمتوسط.',
      'تعرض أيضاً أصغر قيمة وأكبر قيمة بين الأرقام المدخلة.'
    ],
    formula: 'المتوسط الحسابي = مجموع كل القيم ÷ عدد القيم الإجمالي',
    example: 'الأرقام (80, 90, 100): مجموعها 270 وعددها 3، فالمتوسط الحسابي = 270 ÷ 3 = 90.',
    faqs: [
      {
        question: 'هل تقبل الأداة الأرقام السالبة والعشرية؟',
        answer: 'نعم، يمكنك كتابة أرقام موجبة أو سالبة أو أعداد عشرية بفاصلة نقطية.'
      }
    ],
    relatedIds: ['percentage', 'fractions']
  },

  // HEALTH
  {
    id: 'bmi',
    slug: '/calculators/bmi',
    type: 'calculator',
    categoryId: 'health',
    categoryTitle: 'الصحة واللياقة',
    title: 'حاسبة مؤشر كتلة الجسم BMI',
    englishTitle: 'BMI Calculator',
    shortDescription: 'اعرف هل وزنك مثالي، نحيف، أو زائد وفق المعايير الطبية المعتمدة لمنظمة الصحة العالمية.',
    popular: true,
    keywords: ['bmi', 'كتلة الجسم', 'مؤشر كتلة الجسم', 'وزن', 'طول', 'سمنة', 'نحافة', 'body mass index'],
    metaTitle: 'حاسبة مؤشر كتلة الجسم BMI | تقييم الوزن الصحي بدقة - حاسباتي',
    metaDescription: 'احسب مؤشر كتلة جسمك بسهولة بناءً على الوزن والطول، واعرف تصنيف وزنك الصحي مع نصائح معتمدة.',
    howItWorks: [
      'أدخل وزنك بالكيلوجرام وطولك بالسنتيمتر.',
      'تقوم الحاسبة بقسمة الوزن على مربع الطول بالمتر.',
      'يظهر مؤشر كتلة الجسم مصحوباً ببطاقة ملونة تعبر عن التصنيف (نحافة، وزن طبيعي، زيادة وزن، سمنة).'
    ],
    formula: 'BMI = الوزن (كجم) ÷ ( الطول بالمتر × الطول بالمتر )',
    example: 'وزن 70 كجم وطول 170 سم (1.7 م): BMI = 70 ÷ (1.7 × 1.7) = 24.22 (وزن طبيعي وصحي).',
    faqs: [
      {
        question: 'هل تنطبق النتيجة على الرياضيين وبناة الأجسام؟',
        answer: 'قد يعطي BMI قراءة مرتفعة للرياضيين ذوي الكتلة العضلية العالية دون أن يعني ذلك زيادة في الدهون.'
      }
    ],
    relatedIds: ['bmr', 'calories', 'ideal-weight', 'protein']
  },
  {
    id: 'bmr',
    slug: '/calculators/bmr',
    type: 'calculator',
    categoryId: 'health',
    categoryTitle: 'الصحة واللياقة',
    title: 'حاسبة معدل الأيض الأساسي BMR',
    englishTitle: 'BMR Calculator',
    shortDescription: 'احسب عدد السعرات التي يحرقها جسمك في حالة الراحة التامة دون أي نشاط.',
    popular: false,
    keywords: ['bmr', 'حرق', 'ايض', 'معدل الايض', 'سعرات الراحة', 'basal metabolic rate'],
    metaTitle: 'حاسبة معدل الأيض الأساسي BMR | حرق الجسم في الراحة - حاسباتي',
    metaDescription: 'أداة حساب BMR باستخدام معادلة ميبلين سان جوار الشائعة لمعرفة طاقة جسمك الأساسية لليوم.',
    howItWorks: [
      'اختر الجنس (ذكر / أنثى).',
      'أدخل العمر، الوزن بالكجم، والطول بالسنتيمتر.',
      'تطبق الحاسبة معادلة Mifflin-St Jeor الدقيقة لحساب السعرات التي يستحلكها جسمك للبقاء على قيد الحياة.'
    ],
    formula: 'للرجال: (10 × الوزن) + (6.25 × الطول) - (5 × العمر) + 5 | للنساء: (10 × الوزن) + (6.25 × الطول) - (5 × العمر) - 161',
    example: 'رجل بعمر 30 سنة، وزن 75 كجم، طول 175 سم: BMR التقريبي = 1693 سعرة حرارية يومياً.',
    faqs: [
      {
        question: 'ما الفرق بين BMR وتوتال السعرات اليومية؟',
        answer: 'BMR يشير لحرق الجسم عند النوم والاسترخاء التام، بينما السعرات اليومية تشمل حركتك ونشاطك الرياضي.'
      }
    ],
    relatedIds: ['calories', 'bmi', 'protein']
  },
  {
    id: 'calories',
    slug: '/calculators/calories',
    type: 'calculator',
    categoryId: 'health',
    categoryTitle: 'الصحة واللياقة',
    title: 'حاسبة الاحتياج اليومي من السعرات',
    englishTitle: 'Daily Calories Calculator',
    shortDescription: 'احسب السعرات الحرارية المطلوبة للمحافظة على الوزن، خسارة الدهون، أو زيادة الوزن.',
    popular: true,
    keywords: ['سعرات', 'كالوري', 'تنشيف', 'تضخيم', 'رجيم', 'دايت', 'تخسيس', 'calories', 'tdee'],
    metaTitle: 'حاسبة السعرات الحرارية اليومية TDEE | خسارة أو زيادة الوزن - حاسباتي',
    metaDescription: 'حاسبة السعرات الحرارية الدقيقة تعتمد على مستوى نشاطك اليومي لتعطيك جدول السعرات للتثبيت والتخسيس والتضخيم.',
    howItWorks: [
      'أدخل تفاصيل الجسم (الجنس، العمر، الوزن، الطول).',
      'حدد مستوى النشاط البدني (خامل، نشاط خفيف، متوسط، مكثف).',
      'تعرض الحاسبة سعرات الثبات، وسعرات خسارة الوزن (عجز)، وسعرات الزيادة.'
    ],
    formula: 'TDEE = BMR × معامل النشاط (يتراوح من 1.2 للخامل إلى 1.9 للرياضي المحترف).',
    example: 'شخص BMR لديه 1600 ويمارس رياضية متوسطة 3 أيام (معامل 1.375): احتياجه لثبات الوزن = 2200 سعرة.',
    faqs: [
      {
        question: 'كم سعرة أطرح لخسارة كليو جرام في الأسبوع؟',
        answer: 'ينصح عادة بإنقاص 300 إلى 500 سعرة حرارية يومياً لخسارة آمنة تدريجية بمعدل 0.5 إلى 1 كجم أسبوعياً.'
      }
    ],
    relatedIds: ['bmi', 'bmr', 'protein', 'ideal-weight']
  },
  {
    id: 'ideal-weight',
    slug: '/calculators/ideal-weight',
    type: 'calculator',
    categoryId: 'health',
    categoryTitle: 'الصحة واللياقة',
    title: 'حاسبة الوزن المثالي',
    englishTitle: 'Ideal Weight Calculator',
    shortDescription: 'تعرف على النطاق والوزن المثالي التقديري المناسب لطولك وفق المعادلات الطبية.',
    popular: false,
    keywords: ['الوزن المثالي', 'كم وزني المثالي', 'وزن صحي', 'طول ووزن', 'ideal weight', 'height weight'],
    metaTitle: 'حاسبة الوزن المثالي حسب الطول والجنس | نطاق الوزن الصحي - حاسباتي',
    metaDescription: 'اكتشف نطاق وزنك المثالي والصحي بناءً على الطول والجنس بالاعتماد على صيغ ديفين وروبنسون الطبية.',
    howItWorks: [
      'حدد الجنس وأدخل طولك بالسنتيمتر.',
      'تستعرض الحاسبة متوسط الوزن المثالي ونطاق الوزن الصحي المقبول طبياً (BMI 18.5 - 24.9).'
    ],
    formula: 'صيغة ديفين (Devine): للرجال = 50 + 2.3 × (الطول بالبوصة - 60) | للنساء = 45.5 + 2.3 × (الطول بالبوصة - 60)',
    example: 'أنثى بطول 165 سم (65 بوصة): الوزن المثالي التقديري حوالي 57 كجم، والنطاق الصحي من 50 إلى 67 كجم.',
    faqs: [
      {
        question: 'هل يوجد رقم واحد محدد للوزن المثالي؟',
        answer: 'لا، الأطباء يفضلون دائماً استخدام "نطاق صحي للوزن" نظراً لاختلاف بنية العظام والكتلة العضلية بين البشر.'
      }
    ],
    relatedIds: ['bmi', 'calories', 'protein']
  },
  {
    id: 'protein',
    slug: '/calculators/protein',
    type: 'calculator',
    categoryId: 'health',
    categoryTitle: 'الصحة واللياقة',
    title: 'حاسبة الاحتياج اليومي من البروتين',
    englishTitle: 'Protein Calculator',
    shortDescription: 'احسب الجرامات اليومية المطلوبة من البروتين لبناء العضلات أو المحافظة على الصحة.',
    popular: false,
    keywords: ['بروتين', 'حاسبة البروتين', 'عضلات', 'كمال اجسام', 'جرام بروتين', 'protein', 'macros'],
    metaTitle: 'حاسبة احتياج الجسم من البروتين اليومي | لبناء العضلات والدايت - حاسباتي',
    metaDescription: 'احسب كمية البروتين بالجرام المناسبة لوزنك وهدفك الرياضي (بناء عضلات، تنشيف وتخسيس، أو صحة عامة).',
    howItWorks: [
      'أدخل وزنك بالكيلوجرام.',
      'اختر هدفك (صحة عامة وحفظ وزن، خسارة دهون مع حفظ عضل، أو زيادة وتضخيم عضلات).',
      'احصل على التقدير الدقيق بالجرام يومياً.'
    ],
    formula: 'للصحة العامة: 0.8 - 1.0 جم/كجم | لبناء العضلات والرياضيين: 1.6 - 2.2 جم لكل كجم من وزن الجسم.',
    example: 'رياضي يزن 70 كجم ويهدف لبناء عضلات يحتاج تقريباً بين 112 إلى 154 جرام بروتين يومياً.',
    faqs: [
      {
        question: 'هل زيادة البروتين تضر الكلى؟',
        answer: 'للأشخاص الأصحاء، تناول كميات معتدلة وعالية من البروتين آمن مع الحرص على شرب ماء كافٍ.'
      }
    ],
    relatedIds: ['calories', 'bmi', 'bmr']
  },

  // FINANCE
  {
    id: 'simple-interest',
    slug: '/calculators/simple-interest',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة الفائدة البسيطة',
    englishTitle: 'Simple Interest Calculator',
    shortDescription: 'احسب مبلغ الفائدة البسيطة والرصيد النهائي بناءً على المبلغ الأصلي ونسبة الفائدة والمدة.',
    popular: false,
    keywords: ['فائدة بسيطة', 'حاسبة الفائدة', 'أرباح', 'رأس المال', 'نسبة فائدة', 'simple interest', 'finance'],
    metaTitle: 'حاسبة الفائدة البسيطة | حساب الأرباح والمبلغ النهائي - حاسباتي',
    metaDescription: 'أداة سريعة لحساب عائد الفائدة البسيطة والمبلغ الإجمالي المستحق على المبالغ والودائع الق any سنة.',
    howItWorks: [
      'أدخل المبلغ الأساسي (رأس المال).',
      'أدخل نسبة الفائدة السنوية المئوية.',
      'أدخل مدة الاستثمار أو القرض بالسنوات.',
      'احصل فوراً على ربح الفائدة الصافي والإجمالي النهائي.'
    ],
    formula: 'الفائدة البسيطة = (المبلغ الأساسي × نسبة الفائدة × عدد السنوات) ÷ 100',
    example: 'استثمار 10,000 ريال بنسبة فائدة 5% لمدة 3 سنوات: الفائدة = 1,500 ريال، والمبلغ النهائي = 11,500 ريال.',
    faqs: [
      {
        question: 'ما الفرق بين الفائدة البسيطة والمركبة؟',
        answer: 'الفائدة البسيطة تحسب فقط على رأس المال الأصلي، بينما المركبة تحسب على رأس المال بالإضافة للأرباح المتراكمة.'
      }
    ],
    relatedIds: ['compound-interest', 'savings', 'loan']
  },
  {
    id: 'compound-interest',
    slug: '/calculators/compound-interest',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة الفائدة المركبة',
    englishTitle: 'Compound Interest Calculator',
    shortDescription: 'احسب النمو المتسارع لاستثماراتك وودائعك بفضل نمو الفائدة المركبة وتراكم الأرباح.',
    popular: true,
    keywords: ['فائدة مركبة', 'استثمار', 'نمو مركبة', 'ارباح متراكمة', 'تراكمي', 'compound interest', 'investment'],
    metaTitle: 'حاسبة الفائدة المركبة | احسب نمو استثماراتك وودائعك - حاسباتي',
    metaDescription: 'أداة حساب الفائدة المركبة الدقيقة مع تحديد دورية التركيب (شهري، ربع سنوي، سنوي) لرؤية القيمة المستقبلية لاستثمارك.',
    howItWorks: [
      'أدخل المبلغ الأولي المباشر.',
      'حدد نسبة الربح/الفائدة السنوية.',
      'اختر دورية التركيب (شهرياً، كل 3 أشهر، سنوياً).',
      'أدخل عدد السنوات لتشاهد النمو الصافي المتراكم.'
    ],
    formula: 'القيمة المستقبلية A = P × (1 + r/n)^(n×t)',
    example: 'مبلغ 10,000 ريال بنسبة 6% مركبة شهرياً لمدة 5 سنوات يصبح تقريباً 13,488.5 ريال.',
    faqs: [
      {
        question: 'لماذا تسمى الفائدة المركبة بالأعجوبة الثامنة؟',
        answer: 'لأن الأرباح نفسها تولد أرباحاً جديدة كل دورة تركيب، مما يجعل النمو أسرع بكثير مع مرور السنوات.'
      }
    ],
    relatedIds: ['simple-interest', 'savings', 'loan']
  },
  {
    id: 'loan',
    slug: '/calculators/loan',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة القروض والأقساط الشهرية',
    englishTitle: 'Loan & EMI Calculator',
    shortDescription: 'احسب قيمة القسط الشهري، إجمالي المبلغ المدفوع، ومجموع أرباح القرض أو التمويل.',
    popular: true,
    keywords: ['قرض', 'قسط', 'حاسبة القروض', 'تمويل', 'قسط شهري', 'مرابحة', 'loan calculator', 'emi'],
    metaTitle: 'حاسبة القروض والأقساط الشهرية | حساب التمويل والفائدة - حاسباتي',
    metaDescription: 'احسب قسطك الشهري بدقة قبل طلب أي قرض شخصي أو عقاري أو تمويل سيارة، واعرف إجمالي الفائدة المستحقة.',
    howItWorks: [
      'أدخل مبلغ القرض المطلوبة.',
      'أدخل معدل الفائدة السنوي.',
      'أدخل مدة سداد القرض بالسنوات أو الأشهر.',
      'تستخرج لك الحاسبة القسط الشهري ومجموع الأرباح المدفوعة للبنك.'
    ],
    formula: 'القسط الشهري E = [P × r × (1+r)^n] / [(1+r)^n - 1] حيث r هي الفائدة الشهرية و n عدد الأشهر.',
    example: 'قرض بمبلغ 100,000 ريال بنسبة 5% لمدة 5 سنوات (60 شهراً): القسط الشهري حوالي 1,887 ريال، وإجمالي الفائدة 13,227 ريال.',
    faqs: [
      {
        question: 'هل تشمل هذه الحاسبة المبالغ الإدارية؟',
        answer: 'تحسب هذه الأداة الفائدة والقسط الأساسي، ويفضل إضافة المصاريف الإدارية للمبلغ الإجمالي عند الشراء.'
      }
    ],
    relatedIds: ['salary', 'simple-interest', 'savings']
  },
  {
    id: 'savings',
    slug: '/calculators/savings',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة الادخار والتوفير المستقبلي',
    englishTitle: 'Savings Calculator',
    shortDescription: 'احسب القيمة المستقبلية لمدخراتك مع إمكانية إضافة إيداع شهري منتظم ومعدل عائد.',
    popular: false,
    keywords: ['ادخار', 'توفير', 'حاسبة الادخار', 'ايداع شهري', 'مدخرات', 'savings', 'future value'],
    metaTitle: 'حاسبة الادخار والتوفير المستقبلي | احسب ثروتك القادمة - حاسباتي',
    metaDescription: 'شاهد كيف تتضاعف مدخراتك عند إضافة مبلغ شهري ثابت مع الفائدة أو العائد الاستثماري المتوقع.',
    howItWorks: [
      'أدخل مبلغ الادخار البدائي الحالي.',
      'أدخل مبلغ الإيداع الشهر المضاف.',
      'أدخل نسبة الفائدة/العائد الاستثماري وعدد السنوات.',
      'تعرض الأداة إجمالي ما دفعته من جيبك مقابل القيمة النهائية الإجمالية.'
    ],
    formula: 'القيمة المستقبلية = التراكم التجميعي للإيداع الشهري المنتظم مضافاً إليه العائد المركب الدوري.',
    example: 'بدء ادخار بـ 1,000 ريال ثم إضافة 500 ريال شهرياً بعائد 4% لمدة 10 سنوات يعطي أكثر من 73,000 ريال.',
    faqs: [
      {
        question: 'هل الادخار الشهري الصغير يصنع فارقاً؟',
        answer: 'بالتأكيد، الالتزام بمبلغ شهري بسيط يتراكم بشكل مذهل مع مرور الوقت بسبب عامل الاستمرارية.'
      }
    ],
    relatedIds: ['compound-interest', 'salary', 'loan']
  },
  {
    id: 'salary',
    slug: '/calculators/salary',
    type: 'calculator',
    categoryId: 'finance',
    categoryTitle: 'المال والأعمال',
    title: 'حاسبة صافي الراتب',
    englishTitle: 'Net Salary Calculator',
    shortDescription: 'احسب صافي راتبك النهائي بعد إضافة البدلات والمكافآت وخصم التأمينات والضرائب.',
    popular: true,
    keywords: ['راتب', 'حاسبة الراتب', 'صافي الراتب', 'بدلات', 'خصومات', 'تأمينات', 'salary', 'net pay'],
    metaTitle: 'حاسبة صافي الراتب | حساب البدلات والخصومات والتأمينات - حاسباتي',
    metaDescription: 'أداة حاسبة صافي الراتب الدقيقة تسمح لك بوضع الراتب الأساسي والبدلات والخصومات لمعرفة الصافي المستلم.',
    howItWorks: [
      'أدخل الراتب الأساسي.',
      'أدخل إجمالي البدلات (بدل سكن، نقل، إعاشة...الخ).',
      'أدخل نسبة الخصومات أو الاستقطاعات (مثل التأمينات أو التقاعد).',
      'احصل على تفصيل شامل للمستحق والصافي.'
    ],
    formula: 'صافي الراتب = (الراتب الأساسي + البدلات) - الخصومات والاستقطاعات',
    example: 'أساسي 8,000 ريال + بدلات 2,000 ريال - خصم تأمينات 720 ريال = صافي الراتب المستلم 9,280 ريال.',
    faqs: [
      {
        question: 'هل تحسب الأداة نسبة تأمينات محددة؟',
        answer: 'تتيح لك الأداة كتابة نسبة الخصم المئوية الخاصة بدولتك أو شركتك لتلائم جميع الأنظمة.'
      }
    ],
    relatedIds: ['discount', 'loan', 'savings']
  },

  // CONVERTERS
  {
    id: 'kg-to-pound',
    slug: '/converters/kg-to-pound',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من كجم إلى باوند (باوند إلى كجم)',
    englishTitle: 'Kilogram to Pound Converter',
    shortDescription: 'تحويل سريع ودقيق بين أوزان الكيلوجرام (kg) والرطل أو الباوند (lbs) بالاتجاهين.',
    popular: true,
    keywords: ['كجم', 'باوند', 'كيلو', 'رطل', 'وزن', 'تحويل كيلو لباوند', 'kg to lbs', 'pound'],
    metaTitle: 'تحويل من كجم إلى باوند والعكس | أداة تحويل الأوزان - حاسباتي',
    metaDescription: 'أداة تحويل الأوزان بين الكيلوجرام والباوند بنقرة واحدة، مع نتائج فورية وزر نسخ وإمكانية تبديل الاتجاه.',
    howItWorks: ['أدخل الوزن في الحقل الأول.', 'تحصل فوراً على النتيجة المقابلة بالأخرى.', 'اضغط زر التبديل للعكس.'],
    formula: '1 كيلوجرام = 2.20462 باوند | 1 باوند = 0.453592 كيلوجرام',
    example: '70 كجم تساوي تقريباً 154.32 باوند.',
    faqs: [{ question: 'ما هو الرمز العلمي للباوند؟', answer: 'رمز الباوند هو lbs أو lb.' }],
    relatedIds: ['pound-to-kg', 'meter-to-feet', 'celsius-to-fahrenheit']
  },
  {
    id: 'pound-to-kg',
    slug: '/converters/pound-to-kg',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من باوند إلى كجم (كجم إلى باوند)',
    englishTitle: 'Pound to Kilogram Converter',
    shortDescription: 'تحويل الأوزان من الباوند والرطل الأمريكي إلى الكيلوجرامات المترية.',
    popular: false,
    keywords: ['باوند', 'كيلو', 'رطل لكيلو', 'lbs to kg', 'pound to kg'],
    metaTitle: 'تحويل من باوند إلى كجم والعكس | أداة التحويل السريعة - حاسباتي',
    metaDescription: 'تحويل من باوند لـ كجم فورياً مع دقة عالية وإتاحة النسخ المباشر.',
    howItWorks: ['أدخل قيمة الباوند للتحويل لكيلو.'],
    formula: 'الكيلوجرام = الباوند ÷ 2.20462',
    example: '150 باوند تساوي 68.04 كيلوجرام.',
    faqs: [{ question: 'هل التحويل دقيق؟', answer: 'نعم، حتى 4 خانات عشرية.' }],
    relatedIds: ['kg-to-pound', 'cm-to-inch']
  },
  {
    id: 'meter-to-feet',
    slug: '/converters/meter-to-feet',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من متر إلى قدم (قدم إلى متر)',
    englishTitle: 'Meter to Feet Converter',
    shortDescription: 'تحويل وحدة الطول من الأمتار إلى الأقدام والإنشات بالاتجاهين بسهولة.',
    popular: true,
    keywords: ['متر', 'قدم', 'طول', 'تحويل متر لقدم', 'meter to feet', 'ft'],
    metaTitle: 'تحويل من متر إلى قدم والعكس | تحويل أطوال سريع - حاسباتي',
    metaDescription: 'حاسبة تحويل الأمتار إلى أقدام والأقدام إلى أمتار بلمسة واحدة.',
    howItWorks: ['أدخل الطول بالمتر ليصلك الطول بالأقدام فورا.'],
    formula: '1 متر = 3.28084 قدم | 1 قدم = 0.3048 متر',
    example: '10 أمتار تساوي 32.81 قدم.',
    faqs: [{ question: 'كم سم في القدم؟', answer: 'القدم الواحد يساوي 30.48 سنتيمتر.' }],
    relatedIds: ['feet-to-meter', 'cm-to-inch', 'km-to-mile']
  },
  {
    id: 'feet-to-meter',
    slug: '/converters/feet-to-meter',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من قدم إلى متر (متر إلى قدم)',
    englishTitle: 'Feet to Meter Converter',
    shortDescription: 'تحويل وحدة القدم (ft) إلى أمتار (m) بدقة وسرعة.',
    popular: false,
    keywords: ['قدم لمتر', 'تحويل قدم', 'feet to meter', 'ft to m'],
    metaTitle: 'تحويل من قدم إلى متر والعكس | حاسباتي',
    metaDescription: 'تحويل القياسات من القدم الإمبراطوري إلى المتر المعتمد.',
    howItWorks: ['أدخل عدد الأقدام واستلم النتيجة بالمتر.'],
    formula: 'المتر = القدم × 0.3048',
    example: '6 أقدام تساوي 1.83 متر تقريباً.',
    faqs: [{ question: 'ما هو رمز القدم؟', answer: 'رمز القدم هو ft أو الشرطة المفردة \'.' }],
    relatedIds: ['meter-to-feet', 'inch-to-cm']
  },
  {
    id: 'cm-to-inch',
    slug: '/converters/cm-to-inch',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من سنتيمتر إلى بوصة (بوصة إلى سم)',
    englishTitle: 'CM to Inch Converter',
    shortDescription: 'تحويل الأطوال والقياسات الصغيرة بين السنتيمترات والبوصات (الإنشات).',
    popular: true,
    keywords: ['سم', 'بوصة', 'إنش', 'سنتيمتر', 'cm to inch', 'inches'],
    metaTitle: 'تحويل من سنتيمتر إلى بوصة (إنش) والعكس - حاسباتي',
    metaDescription: 'أداة دقيقة تحول السنتيمترات إلى بوصات والعكس لمعرفة قياسات الملابس والشاشات.',
    howItWorks: ['أدخل السنتيمترات لمعرفة البوصة.'],
    formula: '1 بوصة = 2.54 سم | 1 سم = 0.393701 بوصة',
    example: '50 سم تساوي 19.69 بوصة.',
    faqs: [{ question: 'كم سم في البوصة الواحدة؟', answer: 'تضم البوصة الواحدة 2.54 سنتيمتر بالضبط.' }],
    relatedIds: ['inch-to-cm', 'meter-to-feet']
  },
  {
    id: 'inch-to-cm',
    slug: '/converters/inch-to-cm',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من بوصة إلى سنتيمتر (سم إلى بوصة)',
    englishTitle: 'Inch to CM Converter',
    shortDescription: 'تحويل قياسات الشاشات والإطارات من الإنش أو البوصة إلى السنتيمتر.',
    popular: false,
    keywords: ['بوصة لسم', 'انش لسم', 'inch to cm', 'inches to centimeters'],
    metaTitle: 'تحويل من بوصة لـ سنتيمتر والعكس - حاسباتي',
    metaDescription: 'تحويل الإنشات للبوصات والسنتيمترات بمرونة.',
    howItWorks: ['أدخل عدد البوصات وتظهر لك النتيجة بالسم.'],
    formula: 'السنتيمتر = البوصة × 2.54',
    example: 'شاشة 65 بوصة تساوي 165.1 سم قُطرياً.',
    faqs: [{ question: 'كيف تقاس الشاشات؟', answer: 'تقاس الشاشات قُطرياً بالبوصة.' }],
    relatedIds: ['cm-to-inch', 'feet-to-meter']
  },
  {
    id: 'km-to-mile',
    slug: '/converters/km-to-mile',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من كيلومتر إلى ميل (ميل إلى كم)',
    englishTitle: 'KM to Mile Converter',
    shortDescription: 'تحويل مسافات الطرق والسرعات بين الكيلومترات والأميال البحرية والبرية.',
    popular: true,
    keywords: ['كيلومتر', 'ميل', 'مسافة', 'كم لميل', 'km to mile', 'miles'],
    metaTitle: 'تحويل من كيلومتر إلى ميل والعكس | مسافات الطرق - حاسباتي',
    metaDescription: 'حاسبة المسافات تحول لك بين الكيلومترات والأميال فورياً.',
    howItWorks: ['أدخل المسافة بالكيلومتر.'],
    formula: '1 ميل = 1.60934 كم | 1 كم = 0.621371 ميل',
    example: '100 كيلومتر تساوي 62.14 ميل.',
    faqs: [{ question: 'أيهما أطول الميل أم الكيلومتر؟', answer: 'الميل أطول، حيث يعادل 1.61 كيلومتر تقريباً.' }],
    relatedIds: ['mile-to-km', 'meter-to-feet']
  },
  {
    id: 'mile-to-km',
    slug: '/converters/mile-to-km',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من ميل إلى كيلومتر (كم إلى ميل)',
    englishTitle: 'Mile to KM Converter',
    shortDescription: 'تحويل المسافات من الأميال المعتمدة في أمريكا وبريطانيا إلى الكيلومترات.',
    popular: false,
    keywords: ['ميل لكيلو', 'تحويل ميل', 'mile to km', 'miles to kilometers'],
    metaTitle: 'تحويل من ميل إلى كيلومتر والعكس - حاسباتي',
    metaDescription: 'أداة سريعة لتحويل الميل لكيلومتر بدقة.',
    howItWorks: ['أدخل المسافة بالقصوى بالميل.'],
    formula: 'الكيلومتر = الميل × 1.60934',
    example: '60 ميل تساوي 96.56 كيلومتر.',
    faqs: [{ question: 'ما هو رمز الميل؟', answer: 'يرمز للميل بـ mi.' }],
    relatedIds: ['km-to-mile', 'meter-to-feet']
  },
  {
    id: 'celsius-to-fahrenheit',
    slug: '/converters/celsius-to-fahrenheit',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل درجات الحرارة مئوي لـ فهرنهايت',
    englishTitle: 'Celsius to Fahrenheit Converter',
    shortDescription: 'تحويل درجات الحرارة والطقس بين المئوي (سيليزيوس C) والفهرنهايت (F).',
    popular: true,
    keywords: ['مئوي', 'فهرنهايت', 'حرارة', 'طقس', 'celsius to fahrenheit', 'c to f'],
    metaTitle: 'تحويل درجات الحرارة من مئوي إلى فهرنهايت والعكس - حاسباتي',
    metaDescription: 'حول حرارة الطقس والفرن بين المئوية والفهرنهايت بسرعة.',
    howItWorks: ['أدخل درجة الحرارة بالمئوي.'],
    formula: 'F = (C × 9/5) + 32 | C = (F - 32) × 5/9',
    example: '37 درجة مئوية تساوي 98.6 فهرنهايت (حرارة الجسم الطبيعية).',
    faqs: [{ question: 'عند أي درجة تتساوى المئوية والفهرنهايت؟', answer: 'تتساوى القراءتان عند الدرجة سالب 40 (-40).' }],
    relatedIds: ['fahrenheit-to-celsius', 'kg-to-pound']
  },
  {
    id: 'fahrenheit-to-celsius',
    slug: '/converters/fahrenheit-to-celsius',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل درجات الحرارة فهرنهايت لـ مئوي',
    englishTitle: 'Fahrenheit to Celsius Converter',
    shortDescription: 'تحويل حرارة الفهرنهايت المستعملة في الأجهزة والأوصاف الأمريكية إلى النظام المئوي.',
    popular: false,
    keywords: ['فهرنهايت لمئوي', 'f to c', 'fahrenheit to celsius'],
    metaTitle: 'تحويل من فهرنهايت إلى مئوي والعكس - حاسباتي',
    metaDescription: 'حول الفهرنهايت لسيليزيوس بسهولة ودقة.',
    howItWorks: ['أدخل الفهرنهايت لتحول لمئوي.'],
    formula: 'C = (F - 32) × 5/9',
    example: '100 فهرنهايت تساوي 37.78 درجة مئوية.',
    faqs: [{ question: 'ما درجة تجمد الماء بالمئوي؟', answer: 'تجمد الماء عند 0 مئوية و32 فهرنهايت.' }],
    relatedIds: ['celsius-to-fahrenheit', 'liter-to-gallon']
  },
  {
    id: 'liter-to-gallon',
    slug: '/converters/liter-to-gallon',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من لتر إلى جالون (جالون إلى لتر)',
    englishTitle: 'Liter to Gallon Converter',
    shortDescription: 'تحويل حجوم السوائل والوقود والمياه بين اللترات والجالونات الأمريكية.',
    popular: false,
    keywords: ['لتر', 'جالون', 'وقود', 'حجم', 'بنزين', 'liter to gallon', 'gal'],
    metaTitle: 'تحويل من لتر إلى جالون والعكس | تحويل أحجام السوائل - حاسباتي',
    metaDescription: 'أداة تحويل حجوم السوائل من اللتر للجالون والعكس.',
    howItWorks: ['أدخل الحجم باللترات.'],
    formula: '1 جالون أمريكي = 3.78541 لتر | 1 لتر = 0.264172 جالون',
    example: '10 لترات مياه تساوي حوالي 2.64 جالون أمريكي.',
    faqs: [{ question: 'هل الجالون الأمريكي هو نفسه البريطاني؟', answer: 'الجالون الأمريكي = 3.785 لتر، بينما الإمبراطوري البريطاني = 4.546 لتر. تحسب هذه الأداة المعيار الأمريكي الأكثر استخداماً.' }],
    relatedIds: ['kg-to-pound', 'celsius-to-fahrenheit']
  },
  {
    id: 'mb-to-gb',
    slug: '/converters/mb-to-gb',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من ميجابايت إلى جيجابايت (MB إلى GB)',
    englishTitle: 'MB to GB Converter',
    shortDescription: 'تحويل أحجام الملفات والإنترنت والباقات بين الميجابايت والجيجابايت الرقمية.',
    popular: true,
    keywords: ['ميجا', 'جيجا', 'ميجابايت', 'جيجابايت', 'انترنت', 'ملفات', 'mb to gb'],
    metaTitle: 'تحويل من ميجابايت MB إلى جيجابايت GB والعكس - حاسباتي',
    metaDescription: 'احسب سعة باقات الإنترنت وحجم الصور والملفات بالتحويل المباشر بين الميجا والجيجا.',
    howItWorks: ['أدخل الميجابايت وتظهر الجيجابايت.'],
    formula: '1 جيجابايت (GB) = 1024 ميجابايت (MB)',
    example: '2048 ميجابايت تساوي بالضبط 2 جيجابايت.',
    faqs: [{ question: 'هل الجيجا 1000 أم 1024 ميجا؟', answer: 'في القياس الثنائي للحوسبة، 1GB = 1024MB.' }],
    relatedIds: ['gb-to-tb', 'km-to-mile']
  },
  {
    id: 'gb-to-tb',
    slug: '/converters/gb-to-tb',
    type: 'converter',
    categoryId: 'conversions',
    categoryTitle: 'التحويلات',
    title: 'تحويل من جيجابايت إلى تيرابايت (GB إلى TB)',
    englishTitle: 'GB to TB Converter',
    shortDescription: 'تحويل السعات التخزينية الضخمة والأقراص الصلبة بين الجيجابايت والتيرابايت.',
    popular: false,
    keywords: ['جيجا', 'تيرا', 'تيرابايت', 'هاردسك', 'gb to tb', 'terabyte'],
    metaTitle: 'تحويل من جيجابايت GB إلى تيرابايت TB والعكس - حاسباتي',
    metaDescription: 'حاسبة سعات الهاردسك والأقراص الصلبة لتحويل الجيجابايت إلى تيرابايت.',
    howItWorks: ['أدخل السعة بالجيجابايت.'],
    formula: '1 تيرابايت (TB) = 1024 جيجابايت (GB)',
    example: '500 جيجابايت تساوي 0.488 تيرابايت تقريباً (حوالي نصف تيرابايت).',
    faqs: [{ question: 'كم جيجا في الهاردسك 1 تيرابايت؟', answer: 'يحتوي الهاردسك 1TB على 1024GB.' }],
    relatedIds: ['mb-to-gb', 'kg-to-pound']
  }
];
