import { motion } from 'framer-motion';
import { Target, Clock, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeMockTest = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Informational Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden bg-primary-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-700/50 via-transparent to-transparent -z-10" />
        
        <Link to="/" className="text-2xl font-poppins font-bold text-white mb-12 inline-block">
          Achievers<span className="text-primary-400">Academy</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-block px-3 py-1 bg-primary-800 rounded-full text-xs font-bold text-primary-200 uppercase tracking-widest mb-6 border border-primary-700">
            Limited Time Offer
          </div>
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 leading-tight">
            Know Your Current Band Score for <span className="text-primary-400">Free</span>
          </h1>
          <p className="text-lg text-primary-100 mb-10">
            Take our full-length IELTS mock test graded by former IDP/BC examiners within 24 hours. No credit card required.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-800/50 flex items-center justify-center shrink-0 border border-primary-700/50">
                <FileText className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Authentic Test Format</h3>
                <p className="text-primary-200 text-sm">Experience the exact difficulty level of the real IELTS exam.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-800/50 flex items-center justify-center shrink-0 border border-primary-700/50">
                <Target className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Detailed Evaluation</h3>
                <p className="text-primary-200 text-sm">Get section-wise band scores and AI-driven weak area analysis.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-800/50 flex items-center justify-center shrink-0 border border-primary-700/50">
                <Clock className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">24 Hour Turnaround</h3>
                <p className="text-primary-200 text-sm">Receive your personalized assessment report within exactly a day.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-2">Claim Your Test</h2>
            <p className="text-slate-500 mb-8">Join 15,000+ students who started their journey here.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="+91 .."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Test Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center justify-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors bg-white has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700 font-medium">
                    <input type="radio" name="testType" className="sr-only" value="academic" defaultChecked />
                    Academic
                  </label>
                  <label className="flex items-center justify-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors bg-white has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700 font-medium">
                    <input type="radio" name="testType" className="sr-only" value="general" />
                    General
                  </label>
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all flex items-center justify-center gap-2 group mt-8">
                Start Mock Test Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-primary-500" /> Secure platform, no spam ever.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FreeMockTest;
