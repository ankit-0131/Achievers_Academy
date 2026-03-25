import { motion } from 'framer-motion';
import { PlayCircle, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen font-inter bg-slate-50">
      {/* Minimal Header */}
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="text-2xl font-poppins font-bold text-slate-900">
          Achievers<span className="text-primary-600">Academy</span>
        </div>
        <Link to="/contact" className="text-slate-600 hover:text-primary-600 font-medium">Contact Us</Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 -z-10 rounded-bl-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest mb-6 border border-amber-200">
                <ShieldCheck className="w-4 h-4" />
                Guaranteed Band 7+
              </div>
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-slate-900 leading-tight mb-6">
                Crush Your IELTS Goal in <span className="text-primary-600">30 Days.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop wasting time on generic YouTube advice. Get personalized feedback from former examiners and unlock your international dreams faster.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Daily speaking practice & evaluation', '15+ Full mock tests with AI feedback', 'Unlimited essay corrections'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                    <span className="text-slate-800 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-demo" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-primary-500/30 transition-all flex items-center justify-center gap-2 group text-lg">
                  Claim Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium px-4 py-2">
                  <span className="bg-green-100 text-green-700 w-2 h-2 rounded-full animate-pulse"></span>
                  Only 5 spots left this week
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-3 scale-105 -z-10 shadow-xl opacity-50" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square bg-slate-800 shadow-2xl group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1571260899304-425070112185?q=80&w=2073&auto=format&fit=crop" 
                  alt="Student success" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md mb-6 shadow-xl border border-white/30 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins drop-shadow-lg">Watch Priya's Journey</h3>
                  <p className="text-white/90 drop-shadow-md">From 6.0 to 8.5 in 4 weeks</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Banner Minimal */}
      <section className="bg-white border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by students worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos placeholder using standard fonts/shapes */}
            <div className="text-2xl font-black font-poppins">IDP</div>
            <div className="text-xl font-bold font-serif italic">British Council</div>
            <div className="text-2xl font-bold uppercase tracking-tighter">Cambridge</div>
            <div className="text-xl font-medium tracking-widest">AEO.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
