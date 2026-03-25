import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesPricing = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Investment in your future</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
            Simple pricing, exceptional value
          </h2>
          <p className="text-xl text-slate-600 font-inter">
            Choose the plan that best fits your needs. <strong>Free demo before payment.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div 
            className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-shadow flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
              <p className="text-slate-500 mb-6">For self-paced learners who need structure.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">₹4,999</span>
                <span className="text-slate-500">/course</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">EMI ₹999/month available</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {['Group live classes', 'Weekly mock tests', 'Access to recorded sessions', 'Study materials PDF', 'Email support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/book-demo" className="w-full block text-center py-4 px-6 rounded-xl font-bold bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors">
              Start Free Demo
            </Link>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="bg-slate-900 rounded-3xl p-8 shadow-2xl flex flex-col relative overflow-hidden transform md:-translate-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white font-bold text-sm px-4 py-1 rounded-bl-lg">
              MOST STUDENTS CHOOSE THIS
            </div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                Pro <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </h3>
              <p className="text-slate-400 mb-6">Guaranteed 7+ Band with intensive 1-on-1 focus.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">₹9,999</span>
                <span className="text-slate-400">/course</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">EMI ₹1,999/month available</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              {['Daily 1:1 speaking sessions', 'Daily personalized feedback', 'Weekly band score tracking', 'Dedicated expert mentor', 'Unlimited essay evaluations', 'Everything in Basic'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="bg-primary-500 rounded-full p-1"><Check className="w-3 h-3 text-white" /></div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/book-demo" className="w-full block text-center py-4 px-6 rounded-xl font-bold bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 transition-colors relative z-10">
              Book Pro Demo
            </Link>
            
            {/* Background design */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPricing;
