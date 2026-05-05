import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, Scale, Users, Building, 
  Globe, Lightbulb, Home as HomeIcon, Hammer, FileText 
} from 'lucide-react';
import servicesImg from '../assets/services_law.png';
import PageHero from '../components/ui/PageHero';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "arbitration",
      icon: <Scale size={32} />,
      title: t('services_list.arbitration.title', "Arbitration & ADR"),
      description: t('services_list.arbitration.desc', "Alternative Dispute Resolution mechanisms including mediation and arbitration to resolve complex disputes outside traditional courtrooms efficiently and confidentially.")
    },
    {
      id: "litigation",
      icon: <Hammer size={32} />,
      title: t('services_list.litigation.title', "Litigation & Dispute Resolution"),
      description: t('services_list.litigation.desc', "Aggressive and strategic representation in civil, commercial, and administrative courts to protect your rights and secure favorable judgments.")
    },
    {
      id: "employment",
      icon: <Users size={32} />,
      title: t('services_list.employment.title', "Employment & Labor"),
      description: t('services_list.employment.desc', "Counseling employers and employees on labor contracts, compliance, workplace disputes, and regulatory adherence under Egyptian labor laws.")
    },
    {
      id: "corporate",
      icon: <Briefcase size={32} />,
      title: t('services_list.corporate.title', "Corporate Law & Commercial"),
      description: t('services_list.corporate.desc', "End-to-end corporate services including company formation, mergers and acquisitions, corporate governance, and commercial transactions.")
    },
    {
      id: "trade",
      icon: <Globe size={32} />,
      title: t('services_list.trade.title', "International Trade Services"),
      description: t('services_list.trade.desc', "Expert guidance on cross-border transactions, customs regulations, import/export compliance, and international commercial agreements.")
    },
    {
      id: "ip",
      icon: <Lightbulb size={32} />,
      title: t('services_list.ip.title', "Intellectual Property"),
      description: t('services_list.ip.desc', "Protection of your creative and intellectual assets through trademark registration, patent filing, copyright protection, and IP litigation.")
    },
    {
      id: "real-estate",
      icon: <HomeIcon size={32} />,
      title: t('services_list.real_estate.title', "Real Estate Registration & Property Management"),
      description: t('services_list.real_estate.desc', "Comprehensive real estate legal services including property due diligence, registration, leasing agreements, and property dispute resolution.")
    },
    {
      id: "construction",
      icon: <Building size={32} />,
      title: t('services_list.construction.title', "Construction & Engineering"),
      description: t('services_list.construction.desc', "Specialized legal support for the construction industry, covering contracting agreements, project finance, and construction dispute arbitration.")
    },
    {
      id: "contracts",
      icon: <FileText size={32} />,
      title: t('services_list.contracts.title', "Legal Consultation & Contracts"),
      description: t('services_list.contracts.desc', "Meticulous drafting, review, and negotiation of various legal contracts to ensure your interests are legally safeguarded and enforceable.")
    }
  ];

  return (
    <>
      <Helmet>
        <title>Practice Areas | Yasmin Emam Law Firm</title>
        <meta name="description" content="Explore the comprehensive legal services provided by Yasmin Emam Law Firm, including Corporate Law, Arbitration, Intellectual Property, and Real Estate." />
      </Helmet>

      <PageHero 
        title={t('services_page.title', 'Practice Areas')} 
        breadcrumbs={[
          { name: t('home', 'Home'), path: '/' }, 
          { name: t('services', 'Practice Areas') }
        ]} 
        bgImage={servicesImg} 
      />

      {/* Services Grid */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-gray p-10 border border-brand-gray-light hover:border-brand-gold group transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute -right-4 -bottom-4 rtl:-left-4 rtl:right-auto text-brand-gray-light opacity-30 scale-150 group-hover:text-brand-gold/5 transition-colors">
                  {service.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-black flex items-center justify-center text-brand-gold mb-8 rounded-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-brand-light mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <p className="text-brand-light/60 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
