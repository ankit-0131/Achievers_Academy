import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 max-w-md w-full h-full opacity-30 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 max-w-md w-full h-full opacity-30 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-200 via-transparent to-transparent blur-3xl" />
      
      {/* Floating Educational Motifs */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-20 text-primary-400 opacity-40 hidden sm:block -z-5"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <BookOpen className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-10 md:right-20 text-secondary opacity-40 hidden sm:block -z-5"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <GraduationCap className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-primary-300 opacity-50 hidden md:block -z-5"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200">
              Premium In-Person IELTS Coaching
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900 leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Consistently Achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-amber-500">7+ Band Scores</span> From Our Campus
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 mb-10 font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience superior learning in our state-of-the-art physical classrooms with daily face-to-face mentorship.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/book-demo" 
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg shadow-xl shadow-primary-500/30 transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/results" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 hover:text-primary-600 border border-slate-200 hover:border-primary-200 rounded-full font-bold text-lg shadow-sm transition-all flex items-center justify-center"
            >
              View Student Results
            </Link>
          </motion.div>

          {/* Trust anchors */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-500" />
              <span>Free Campus Visit & Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-500" />
              <span>Small Batch Sizes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-500" />
              <span>Expert Examiners</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
