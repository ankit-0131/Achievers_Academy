import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Phone, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DemoBooking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'ielts-academic'
  });
  
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend here.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          className="bg-white max-w-md w-full p-8 md:p-12 rounded-3xl shadow-2xl text-center border border-slate-100 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Confetti-like background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, delay: 0.1 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
          >
            <CheckCircle2 className="w-12 h-12 text-primary-500" />
          </motion.div>
          
          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-4 relative z-10">Your demo is booked 🎉</h2>
          <p className="text-slate-600 mb-8 relative z-10">
            Thank you, {formData.name.split(' ')[0]}! Our mentor will contact you shortly on <b>{formData.phone}</b> to schedule your free diagnostic test.
          </p>
          
          <div className="space-y-3 relative z-10">
            <Link 
              to="/courses" 
              className="w-full block py-3 px-4 rounded-xl font-bold bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
            >
              Explore Courses
            </Link>
            <button 
              onClick={() => navigate('/')} 
              className="w-full text-slate-500 font-medium py-2 hover:text-slate-800 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left side - Value Prop */}
      <div className="md:w-5/12 lg:w-1/2 bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent" />
        
        <Link to="/" className="text-2xl font-poppins font-bold text-primary-500 mb-12 lg:mb-20 relative z-10">
          Achievers<span className="text-white">Academy</span>
        </Link>
        
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
            Claim Your <span className="text-primary-400">Free 1:1</span> Speaking Assessment
          </h1>
          <p className="text-lg text-slate-300 mb-10">
            Experience our revolutionary daily feedback system firsthand. Know your exact current band score before paying a single rupee.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-300 font-medium">15-min live speaking test</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-300 font-medium">Detailed band prediction</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-300 font-medium">Custom study plan</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-300 font-medium">No obligation to buy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="md:w-7/12 lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-2">Book Your Demo</h2>
            <p className="text-slate-500">Fill in your details below. We'll reach out within 2 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-medium"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-medium"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-bold text-slate-700 mb-2">Target Exam</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  name="course"
                  id="course"
                  className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-medium appearance-none"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="ielts-academic">IELTS Academic</option>
                  <option value="ielts-general">IELTS General</option>
                  <option value="pte">PTE (Pearson Test of English)</option>
                  <option value="toefl">TOEFL</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1"
            >
              Book Free Demo <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-6">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Your data is 100% secure with us.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoBooking;
