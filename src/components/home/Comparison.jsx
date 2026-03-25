import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison = () => {
  const comparisonData = [
    { feature: 'Daily Speaking Practice', us: true, others: false },
    { feature: '1:1 Expert Feedback', us: true, others: 'Limited' },
    { feature: 'Weekly Band Tracking Dashboard', us: true, others: false },
    { feature: 'Unlimited Essay Correction', us: true, others: false },
    { feature: 'Mock Test Simulator', us: true, others: 'Paid Extra' },
    { feature: 'Dedicated Mentor Support', us: true, others: false },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-6">
            Why We Stand Out
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See exactly why our approach produces results where other platforms fail.
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 bg-slate-900 text-white font-bold p-6">
            <div className="col-span-1 text-lg">Features</div>
            <div className="text-center text-lg text-primary-400">Achievers Academy</div>
            <div className="text-center text-lg text-slate-400 border-l border-slate-700">Other Platforms</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {comparisonData.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 p-6 items-center ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} hover:bg-primary-50 transition-colors`}>
                <div className="col-span-1 font-medium text-slate-700">
                  {row.feature}
                </div>
                
                <div className="flex justify-center flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary-500 mb-1" />
                  <span className="text-sm font-bold text-primary-600 hidden sm:block">Yes</span>
                </div>
                
                <div className="flex justify-center border-l border-slate-100 flex-col items-center">
                  {row.others === false ? (
                    <>
                      <XCircle className="w-7 h-7 text-slate-300 mb-1" />
                      <span className="text-sm font-medium text-slate-400 hidden sm:block">No</span>
                    </>
                  ) : (
                    <span className="font-semibold text-slate-500 py-1">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
