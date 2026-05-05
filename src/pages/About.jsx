import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import aboutImg from '../assets/about_scales.png';
import PageHero from '../components/ui/PageHero';

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith('ar');

  return (
    <>
      <Helmet>
        <title>{t('about_page.title')} | Yasmin Emam Law Firm</title>
        <meta name="description" content={t('about_page.subtitle')} />
      </Helmet>

      <PageHero 
        title={t('about_page.title')} 
        breadcrumbs={[
          { name: t('home'), path: '/' }, 
          { name: t('about') }
        ]} 
        bgImage={aboutImg} 
      />

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl font-heading text-brand-light mb-6">{t('about_page.philosophy')}</h2>
              <p className="text-brand-light/70 font-light leading-relaxed mb-6">
                {t('about_page.philosophy_p1')}
              </p>
              <p className="text-brand-light/70 font-light leading-relaxed mb-6">
                {t('about_page.philosophy_p2')}
              </p>
              
              <h2 className="text-3xl font-heading text-brand-light mt-12 mb-6">{t('about_page.commitment')}</h2>
              <p className="text-brand-light/70 font-light leading-relaxed mb-6">
                {t('about_page.commitment_p')}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-brand-gray-light">
                <div>
                  <h4 className="text-brand-gold text-4xl font-heading mb-2">15+</h4>
                  <p className="text-brand-light/60 font-light">{t('about_page.years')}</p>
                </div>
                <div>
                  <h4 className="text-brand-gold text-4xl font-heading mb-2">1000+</h4>
                  <p className="text-brand-light/60 font-light">{t('about_page.cases')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative sticky top-32"
            >
              <img src={aboutImg} alt="About Yasmin Emam Law Firm" className="w-full h-auto object-cover grayscale-[30%]" />
              <div className="absolute inset-0 border-2 border-brand-gold m-6 z-10 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
