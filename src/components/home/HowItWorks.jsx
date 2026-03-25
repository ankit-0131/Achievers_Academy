import { motion } from 'framer-motion';
import { Target, TrendingUp, MessageSquare, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Diagnostic Test",
      description: "We assess your current level and identify specific areas for improvement.",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Daily Speaking Practice",
      description: "1-on-1 speaking sessions with instant, actionable feedback from experts.",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      color: "bg-primary-500"
    },
    {
      title: "Weekly Band Tracking",
      description: "Visual progress reports showing exactly how close you are to your target.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Achieve Target Score",
      description: "Walk into your exam with confidence and walk out with a 7+ band.",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-amber-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
            A Proven System That Works
          </h2>
          <p className="text-xl text-slate-600 font-inter">
            Our daily feedback loop is designed to fix your mistakes in real-time, completely transforming your speaking band score.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Steps */}
          <div className="w-full lg:w-1/2 space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Connecting Line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute top-16 left-8 w-0.5 h-full -mb-4 bg-slate-200"></div>
                )}
                <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg flex items-center justify-center shrink-0 z-10`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visualization Dashboard (Mockup) */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 relative">
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Your Progress Dashboard
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Speaking Band Projection</h4>
                {/* Progress bar graph mock */}
                <div className="space-y-4">
                  {[
                    { week: 'Week 1', score: 6.0, percent: '40%' },
                    { week: 'Week 2', score: 6.5, percent: '60%' },
                    { week: 'Week 3', score: 7.0, percent: '80%' },
                    { week: 'Week 4', score: 7.5, percent: '100%', highlight: true },
                  ].map((data, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-16 text-slate-500 font-medium">{data.week}</span>
                      <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden flex items-center relative">
                        <motion.div 
                          className={`h-full ${data.highlight ? 'bg-primary-500' : 'bg-primary-300'} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: data.percent }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          viewport={{ once: true }}
                        />
                        <span className={`absolute right-4 font-bold ${data.highlight ? 'text-white' : 'text-slate-700'}`}>
                          {data.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary-500" />
                  Today's Feedback
                </h4>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-3">
                  <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">Lexical Resource</span>
                  <p className="mt-2 text-slate-600 text-sm">Avoid saying "very good". Instead, try using "exceptional" or "outstanding".</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">Fluency</span>
                  <p className="mt-2 text-slate-600 text-sm">Great improvement in preventing pauses compared to yesterday's session!</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
