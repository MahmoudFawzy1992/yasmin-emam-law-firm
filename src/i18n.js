import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Us",
      "services": "Practice Areas",
      "contact": "Contact Us",
      
      "home_page": {
        "hero_part1": "Justice.",
        "hero_part2": "Integrity.",
        "hero_part3": "Excellence.",
        "hero_desc": "Providing sophisticated legal representation and strategic counsel for businesses and individuals in Egypt and internationally.",
        "consult_btn": "Consult With Us",
        "practice_btn": "Our Practice Areas",
        "uncompromising": "Uncompromising Legal Standards.",
        "uncompromising_desc": "At Yasmin Emam Law Firm, we blend deep local expertise with international legal standards. Our firm is built on a foundation of trust, relentless advocacy, and a profound understanding of the complex legal landscape in Egypt and the MENA region.",
        "discover_btn": "Discover Our Firm",
        "expertise": "Expertise That Matters",
        "expertise_desc": "We provide specialized legal services across key practice areas to protect your interests and drive your success.",
        "view_all": "View All Services"
      },

      "about_page": {
        "title": "About The Firm",
        "subtitle": "A legacy of trust, precision, and relentless dedication to justice.",
        "philosophy": "Our Philosophy",
        "philosophy_p1": "Founded on the principles of integrity and excellence, Yasmin Emam Law Firm has established itself as a premier legal practice in Cairo, Egypt. We believe that exceptional legal representation requires not only a profound understanding of the law but also a deep appreciation of our clients' business and personal objectives.",
        "philosophy_p2": "Our approach is bespoke, strategic, and uncompromising. Whether navigating complex corporate transactions, protecting intellectual property, or resolving high-stakes disputes, we deliver tailored solutions that mitigate risk and drive success.",
        "commitment": "Our Commitment",
        "commitment_p": "We are committed to maintaining the highest ethical standards while aggressively advocating for our clients' rights. Our team comprises distinguished legal minds who bring diverse experiences and specialized expertise to every case.",
        "years": "Years of Excellence",
        "cases": "Cases Won"
      },

      "services_page": {
        "title": "Practice Areas",
        "subtitle": "Comprehensive legal solutions tailored to meet the dynamic needs of our clients in an ever-evolving legal landscape."
      },

      "services_list": {
        "arbitration": {
          "title": "Arbitration & ADR",
          "desc": "Alternative Dispute Resolution mechanisms including mediation and arbitration to resolve complex disputes outside traditional courtrooms efficiently and confidentially."
        },
        "litigation": {
          "title": "Litigation & Dispute Resolution",
          "desc": "Aggressive and strategic representation in civil, commercial, and administrative courts to protect your rights and secure favorable judgments."
        },
        "employment": {
          "title": "Employment & Labor",
          "desc": "Counseling employers and employees on labor contracts, compliance, workplace disputes, and regulatory adherence under Egyptian labor laws."
        },
        "corporate": {
          "title": "Corporate Law & Commercial",
          "desc": "End-to-end corporate services including company formation, mergers and acquisitions, corporate governance, and commercial transactions."
        },
        "trade": {
          "title": "International Trade Services",
          "desc": "Expert guidance on cross-border transactions, customs regulations, import/export compliance, and international commercial agreements."
        },
        "ip": {
          "title": "Intellectual Property",
          "desc": "Protection of your creative and intellectual assets through trademark registration, patent filing, copyright protection, and IP litigation."
        },
        "real_estate": {
          "title": "Real Estate Registration & Property Management",
          "desc": "Comprehensive real estate legal services including property due diligence, registration, leasing agreements, and property dispute resolution."
        },
        "construction": {
          "title": "Construction & Engineering",
          "desc": "Specialized legal support for the construction industry, covering contracting agreements, project finance, and construction dispute arbitration."
        },
        "contracts": {
          "title": "Legal Consultation & Contracts",
          "desc": "Meticulous drafting, review, and negotiation of various legal contracts to ensure your interests are legally safeguarded and enforceable."
        }
      },

      "contact_page": {
        "title": "Contact Us",
        "subtitle": "Schedule a consultation with our legal experts to discuss your case.",
        "get_in_touch": "Get In Touch",
        "get_in_touch_desc": "Whether you're facing a complex corporate issue or a personal legal challenge, our team is ready to provide the strategic counsel you need. Fill out the form, and our office will contact you promptly.",
        "office_loc": "Office Location",
        "office_address": "Building 1326, Sector A, Al-Madany Buildings\nNew October, West of the Airport, 6th of October - Giza",
        "phone": "Phone",
        "email": "Email",
        "hours": "Working Hours",
        "hours_val": "Sun - Thu: 9:00 AM - 6:00 PM\nFri - Sat: Closed",
        "send_msg": "Send a Message",
        "form_success": "Thank you for reaching out. We will contact you shortly.",
        "form_error": "Something went wrong. Please try again or contact us directly via phone.",
        "name_lbl": "Full Name *",
        "name_ph": "John Doe",
        "phone_lbl": "Phone Number *",
        "email_lbl": "Email Address *",
        "subj_lbl": "Subject",
        "subj_ph": "Brief subject of your inquiry",
        "msg_lbl": "Message *",
        "msg_ph": "Please provide details about your legal inquiry...",
        "submit_btn": "Submit Inquiry",
        "sending": "Sending..."
      },
      
      "footer": {
        "desc": "Providing premium legal services in Cairo, Egypt. Specializing in corporate law, real estate, and dispute resolution with an uncompromising commitment to excellence.",
        "quick_links": "Quick Links",
        "rights": "Yasmin Emam Law Firm. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
      },
      
      "not_found": {
        "title": "Page Not Found",
        "heading": "404",
        "subheading": "The page you are looking for does not exist.",
        "desc": "It might have been moved or deleted. Please check the URL or return to our homepage.",
        "back_home": "Back to Home"
      }
    }
  },
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "من نحن",
      "services": "مجالات الممارسة",
      "contact": "اتصل بنا",

      "home_page": {
        "hero_part1": "العدالة.",
        "hero_part2": "النزاهة.",
        "hero_part3": "التميز.",
        "hero_desc": "تقديم تمثيل قانوني متطور واستشارات استراتيجية للشركات والأفراد في مصر ودولياً.",
        "consult_btn": "استشرنا الآن",
        "practice_btn": "مجالات خبرتنا",
        "uncompromising": "معايير قانونية لا تقبل المساومة.",
        "uncompromising_desc": "في مكتب ياسمين إمام للمحاماة، ندمج الخبرة المحلية العميقة مع المعايير القانونية الدولية. تأسس مكتبنا على أساس من الثقة والمناصرة الدؤوبة والفهم العميق للمشهد القانوني المعقد في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.",
        "discover_btn": "اكتشف مكتبنا",
        "expertise": "خبرة تصنع الفارق",
        "expertise_desc": "نقدم خدمات قانونية متخصصة عبر مجالات الممارسة الرئيسية لحماية مصالحك وتحقيق نجاحك.",
        "view_all": "عرض جميع الخدمات"
      },

      "about_page": {
        "title": "عن المكتب",
        "subtitle": "إرث من الثقة والدقة والتفاني الدؤوب في تحقيق العدالة.",
        "philosophy": "فلسفتنا",
        "philosophy_p1": "بناءً على مبادئ النزاهة والتميز، رسخ مكتب ياسمين إمام للمحاماة مكانته كممارسة قانونية رائدة في القاهرة، مصر. نحن نؤمن بأن التمثيل القانوني الاستثنائي يتطلب فهماً عميقاً للقانون وتقديراً كبيراً لأهداف عملائنا التجارية والشخصية.",
        "philosophy_p2": "نهجنا مفصل واستراتيجي ولا يقبل المساومة. سواء كان الأمر يتعلق بإدارة صفقات الشركات المعقدة، أو حماية الملكية الفكرية، أو تسوية النزاعات عالية المخاطر، فإننا نقدم حلولاً مصممة خصيصاً للتخفيف من المخاطر ودفع عجلة النجاح.",
        "commitment": "التزامنا",
        "commitment_p": "نحن ملتزمون بالحفاظ على أعلى المعايير الأخلاقية والمدافعة بشراسة عن حقوق عملائنا. يضم فريقنا عقولاً قانونية متميزة تجلب خبرات متنوعة وتخصصات دقيقة لكل قضية.",
        "years": "سنوات من التميز",
        "cases": "قضايا رابحة"
      },

      "services_page": {
        "title": "مجالات الممارسة",
        "subtitle": "حلول قانونية شاملة مصممة لتلبية الاحتياجات الديناميكية لعملائنا في مشهد قانوني دائم التطور."
      },

      "services_list": {
        "arbitration": {
          "title": "التحكيم والوساطة",
          "desc": "آليات بديلة لتسوية النزاعات بما في ذلك الوساطة والتحكيم لحل النزاعات المعقدة خارج قاعات المحاكم التقليدية بكفاءة وسرية."
        },
        "litigation": {
          "title": "التقاضي وتسوية المنازعات",
          "desc": "تمثيل استراتيجي قوي في المحاكم المدنية والتجارية والإدارية لحماية حقوقك وتأمين أحكام لصالحك."
        },
        "employment": {
          "title": "قانون العمل والتوظيف",
          "desc": "تقديم الاستشارات لأصحاب العمل والموظفين بشأن عقود العمل، والامتثال، ونزاعات العمل، بموجب قوانين العمل المصرية."
        },
        "corporate": {
          "title": "قانون الشركات والأعمال التجارية",
          "desc": "خدمات شاملة للشركات بما في ذلك تأسيس الشركات، والاندماج والاستحواذ، وحوكمة الشركات، والمعاملات التجارية."
        },
        "trade": {
          "title": "خدمات التجارة الدولية",
          "desc": "إرشادات الخبراء بشأن المعاملات عبر الحدود، واللوائح الجمركية، والامتثال للاستيراد والتصدير، والاتفاقيات التجارية الدولية."
        },
        "ip": {
          "title": "الملكية الفكرية",
          "desc": "حماية أصولك الإبداعية والفكرية من خلال تسجيل العلامات التجارية، وبراءات الاختراع، وحقوق النشر، وقضايا الملكية الفكرية."
        },
        "real_estate": {
          "title": "التسجيل العقاري وإدارة الممتلكات",
          "desc": "خدمات قانونية عقارية شاملة تشمل الفحص النافي للجهالة، والتسجيل، وعقود الإيجار، وتسوية النزاعات العقارية."
        },
        "construction": {
          "title": "الإنشاءات والهندسة",
          "desc": "دعم قانوني متخصص لقطاع البناء، يغطي اتفاقيات المقاولات، وتمويل المشاريع، والتحكيم في نزاعات البناء."
        },
        "contracts": {
          "title": "الاستشارات القانونية والعقود",
          "desc": "صياغة ومراجعة وتفاوض دقيق لمختلف العقود القانونية لضمان حماية مصالحك قانونياً وتكون قابلة للتنفيذ."
        }
      },

      "contact_page": {
        "title": "اتصل بنا",
        "subtitle": "حدد موعداً للاستشارة مع خبرائنا القانونيين لمناقشة قضيتك.",
        "get_in_touch": "تواصل معنا",
        "get_in_touch_desc": "سواء كنت تواجه مشكلة معقدة للشركات أو تحدياً قانونياً شخصياً، فإن فريقنا مستعد لتقديم المشورة الاستراتيجية التي تحتاجها. املأ النموذج، وسيقوم مكتبنا بالاتصال بك على الفور.",
        "office_loc": "موقع المكتب",
        "office_address": "١٣٢٦ قطاع أ عمارات المدني\nاكتوبر الجديدة غرب المطار السادس من اكتوبر - الجيزة",
        "phone": "الهاتف",
        "email": "البريد الإلكتروني",
        "hours": "ساعات العمل",
        "hours_val": "الأحد - الخميس: ٩:٠٠ صباحاً - ٦:٠٠ مساءً\nالجمعة - السبت: مغلق",
        "send_msg": "إرسال رسالة",
        "form_success": "شكراً لتواصلك معنا. سنتصل بك قريباً.",
        "form_error": "حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
        "name_lbl": "الاسم الكامل *",
        "name_ph": "أحمد محمد",
        "phone_lbl": "رقم الهاتف *",
        "email_lbl": "البريد الإلكتروني *",
        "subj_lbl": "الموضوع",
        "subj_ph": "موضوع استفسارك باختصار",
        "msg_lbl": "الرسالة *",
        "msg_ph": "يرجى تقديم تفاصيل حول استفسارك القانوني...",
        "submit_btn": "إرسال الاستفسار",
        "sending": "جاري الإرسال..."
      },

      "footer": {
        "desc": "تقديم خدمات قانونية متميزة في القاهرة، مصر. متخصصون في قانون الشركات، والعقارات، وتسوية المنازعات بالتزام لا يقبل المساومة نحو التميز.",
        "quick_links": "روابط سريعة",
        "rights": "مكتب ياسمين إمام للمحاماة. جميع الحقوق محفوظة.",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الخدمة"
      },

      "not_found": {
        "title": "الصفحة غير موجودة",
        "heading": "٤٠٤",
        "subheading": "الصفحة التي تبحث عنها غير موجودة.",
        "desc": "ربما تم نقلها أو حذفها. يرجى التحقق من الرابط أو العودة إلى الصفحة الرئيسية.",
        "back_home": "العودة للرئيسية"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
