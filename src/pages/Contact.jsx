import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import heroImg from '../assets/hero_office.png';
import PageHero from '../components/ui/PageHero';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith('ar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    
    try {
      // NOTE: Replace this URL with your actual Google Apps Script Webhook URL
      const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycb.../exec"; 
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('contact_page.title')} | Yasmin Emam Law Firm</title>
        <meta name="description" content={t('contact_page.subtitle')} />
      </Helmet>

      <PageHero 
        title={t('contact_page.title')} 
        breadcrumbs={[
          { name: t('home'), path: '/' }, 
          { name: t('contact') }
        ]} 
        bgImage={heroImg} 
      />

      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading text-brand-light mb-8">{t('contact_page.get_in_touch')}</h2>
              <p className="text-brand-light/70 font-light leading-relaxed mb-12">
                {t('contact_page.get_in_touch_desc')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-brand-light mb-1">{t('contact_page.office_loc')}</h4>
                    <p className="text-brand-light/60 font-light whitespace-pre-line">{t('contact_page.office_address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-brand-light mb-1">{t('contact_page.phone')}</h4>
                    <p className="text-brand-light/60 font-light text-start"><span dir="ltr">+20 10 08109633</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-gold shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-brand-light mb-1">{t('contact_page.email')}</h4>
                    <p className="text-brand-light/60 font-light">info@yasminemam.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-brand-light mb-1">{t('contact_page.hours')}</h4>
                    <p className="text-brand-light/60 font-light whitespace-pre-line">{t('contact_page.hours_val')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-gray p-8 border border-brand-gray-light"
            >
              <h3 className="text-2xl font-heading text-brand-light mb-8">{t('contact_page.send_msg')}</h3>
              
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-500 p-4 mb-6 rounded-sm">
                  {t('contact_page.form_success')}
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 mb-6 rounded-sm">
                  {t('contact_page.form_error')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-brand-light/70 mb-2">{t('contact_page.name_lbl')}</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-gray-light px-4 py-3 text-brand-light focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder={t('contact_page.name_ph')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-brand-light/70 mb-2">{t('contact_page.phone_lbl')}</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-gray-light px-4 py-3 text-brand-light focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="+20 10 XXXX XXXX"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-brand-light/70 mb-2">{t('contact_page.email_lbl')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-gray-light px-4 py-3 text-brand-light focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="john@example.com"
                    dir="ltr"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-light text-brand-light/70 mb-2">{t('contact_page.subj_lbl')}</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-gray-light px-4 py-3 text-brand-light focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder={t('contact_page.subj_ph')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-brand-light/70 mb-2">{t('contact_page.msg_lbl')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-gray-light px-4 py-3 text-brand-light focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder={t('contact_page.msg_ph')}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-brand-gold text-brand-black py-4 font-semibold hover:bg-brand-gold-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin"></div>
                      {t('contact_page.sending')}
                    </>
                  ) : (
                    t('contact_page.submit_btn')
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
