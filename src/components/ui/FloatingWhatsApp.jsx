import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/1234567890" // Placeholder number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          Chat with us!
        </span>
      </motion.a>
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
