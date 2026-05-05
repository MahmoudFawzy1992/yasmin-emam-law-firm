import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith('ar');
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <>
      <Helmet>
        <title>{t('not_found.title')} | Yasmin Emam Law Firm</title>
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-brand-gray pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-8xl md:text-9xl font-heading text-brand-gold mb-6"
          >
            {t('not_found.heading')}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-heading text-brand-light mb-6"
          >
            {t('not_found.subheading')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/60 font-light mb-10 max-w-lg mx-auto"
          >
            {t('not_found.desc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-colors group"
            >
              <ArrowIcon size={20} className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
              {t('not_found.back_home')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
