import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-black border-t border-brand-gray-light pt-16 pb-8 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-brand-gold flex items-center justify-center rounded-sm shrink-0">
                <span className="text-brand-gold font-heading font-bold text-xl leading-none">YE</span>
              </div>
              <span className="font-heading font-semibold text-2xl tracking-wider text-brand-light">YASMIN EMAM</span>
            </Link>
            <p className="text-brand-light/60 max-w-sm font-light leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-brand-light text-lg mb-6">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-brand-light/60 hover:text-brand-gold transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="text-brand-light/60 hover:text-brand-gold transition-colors">{t('about')}</Link></li>
              <li><Link to="/services" className="text-brand-light/60 hover:text-brand-gold transition-colors">{t('services')}</Link></li>
              <li><Link to="/contact" className="text-brand-light/60 hover:text-brand-gold transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-brand-light text-lg mb-6">{t('contact')}</h3>
            <ul className="space-y-3 text-brand-light/60 font-light">
              <li>{t('contact_page.office_address').split('\n')[0]}<br />{t('contact_page.office_address').split('\n')[1]}</li>
              <li>info@yasminemam.com</li>
              <li className="text-start"><span dir="ltr">+20 10 08109633</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gray-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-light/40 text-sm">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-light/40 hover:text-brand-gold transition-colors text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-brand-light/40 hover:text-brand-gold transition-colors text-sm">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
