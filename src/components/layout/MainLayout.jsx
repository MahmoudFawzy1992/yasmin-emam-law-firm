import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-light">
      <Navbar />
      {/* pt-[88px] prevents content from hiding behind the fixed navbar */}
      <main className="flex-grow pt-[88px] selection:bg-brand-gold selection:text-brand-black">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
