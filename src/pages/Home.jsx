import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft, Scale, Shield, Landmark } from 'lucide-react';
import heroImg from '../assets/hero_office.png';
import aboutImg from '../assets/about_scales.png';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith('ar');
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>{t('home_page.title', 'Yasmin Emam Law Firm | Premium Legal Services')}</title>
        <meta name="description" content={t('home_page.hero_desc', 'Providing sophisticated legal representation in Egypt.')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="w-12 h-1 bg-brand-gold mb-4"></motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-heading text-brand-light leading-tight">
              {t('home_page.hero_part1')} <br />
              <span className="text-brand-gold italic font-light">{t('home_page.hero_part2')}</span> <br />
              {t('home_page.hero_part3')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-brand-light/70 max-w-lg font-light leading-relaxed">
              {t('home_page.hero_desc')}
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-gold text-brand-black px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-colors flex items-center gap-2 group">
                {t('home_page.consult_btn')}
                <ArrowIcon size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border border-brand-gray-light bg-brand-gray/50 px-8 py-4 font-semibold hover:bg-brand-gray transition-colors">
                {t('home_page.practice_btn')}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] w-full"
          >
            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10"></div>
            <img src={heroImg} alt="Yasmin Emam Law Firm Office" className="w-full h-full object-cover rounded-sm grayscale-[20%]" />
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 rtl:-right-6 rtl:left-auto w-32 h-32 bg-brand-gold z-[-1]"></div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <img src={aboutImg} alt="Abstract Scales of Justice" className="w-full h-[500px] object-cover" />
              <div className="absolute -top-6 -right-6 rtl:-left-6 rtl:right-auto w-24 h-24 border border-brand-gold z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-heading text-brand-gold">{t('home_page.uncompromising')}</h2>
              <p className="text-brand-light/70 leading-relaxed font-light text-lg">
                {t('home_page.uncompromising_desc')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-light hover:text-brand-gold transition-colors font-medium group mt-4 w-fit">
                <span className="border-b border-brand-gold pb-1">{t('home_page.discover_btn')}</span>
                <ArrowIcon size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Practice Areas Preview */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-brand-light mb-6">{t('home_page.expertise')}</h2>
            <p className="text-brand-light/60 max-w-2xl mx-auto font-light">{t('home_page.expertise_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-brand-gray p-10 border border-brand-gray-light hover:border-brand-gold transition-colors group">
              <Scale size={40} className="text-brand-gold mb-6" />
              <h3 className="text-2xl font-heading text-brand-light mb-4 group-hover:text-brand-gold transition-colors">{t('services_list.corporate.title')}</h3>
              <p className="text-brand-light/60 font-light leading-relaxed">{t('services_list.corporate.desc')}</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -10 }} className="bg-brand-gray p-10 border border-brand-gray-light hover:border-brand-gold transition-colors group">
              <Shield size={40} className="text-brand-gold mb-6" />
              <h3 className="text-2xl font-heading text-brand-light mb-4 group-hover:text-brand-gold transition-colors">{t('services_list.litigation.title')}</h3>
              <p className="text-brand-light/60 font-light leading-relaxed">{t('services_list.litigation.desc')}</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-brand-gray p-10 border border-brand-gray-light hover:border-brand-gold transition-colors group">
              <Landmark size={40} className="text-brand-gold mb-6" />
              <h3 className="text-2xl font-heading text-brand-light mb-4 group-hover:text-brand-gold transition-colors">{t('services_list.real_estate.title')}</h3>
              <p className="text-brand-light/60 font-light leading-relaxed">{t('services_list.real_estate.desc')}</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-brand-light text-brand-black px-8 py-4 font-semibold hover:bg-white transition-colors">
              {t('home_page.view_all')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
