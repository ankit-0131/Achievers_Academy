import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex gap-3">
      <a href="tel:+1234567890" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 transition-colors">
        <Phone className="w-5 h-5" />
        Call Us
      </a>
      <Link to="/book-demo" className="flex-[1.5] flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
        <Calendar className="w-5 h-5" />
        Demo
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
