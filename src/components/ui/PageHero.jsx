import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PageHero({ title, breadcrumbs, bgImage }) {
  return (
    <section className="relative pt-32 pb-24 bg-brand-gray overflow-hidden border-b border-brand-gray-light">
      {/* Background Image with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={bgImage} alt={title} className="w-full h-full object-cover grayscale-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-brand-black"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading text-brand-gold mb-6"
        >
          {title}
        </motion.h1>
        
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 text-sm text-brand-light/60 font-light"
        >
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.name} className="flex items-center gap-3">
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-brand-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-brand-gold">{crumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-brand-light/30">/</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
