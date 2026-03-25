import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Award, CheckCircle2 } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students Mentored', value: '500+', icon: Users },
  { id: 2, name: 'Average Band Score', value: '7.5', icon: Target },
  { id: 3, name: 'Success Rate', value: '98%', icon: Award },
  { id: 4, name: 'Practice Tests', value: '100+', icon: BookOpen },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900 -z-20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-800/50 text-primary-200 font-semibold text-sm mb-6 border border-primary-700/50 backdrop-blur-sm"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-poppins font-bold mb-6"
          >
            Empowering Global <span className="text-primary-400">Ambitions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-inter"
          >
            We don't just teach English. We bridge the gap between your current proficiency and your international dreams.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center px-4"
                  >
                    <div className="w-12 h-12 bg-primary-50 flex items-center justify-center rounded-2xl mb-4 text-primary-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.name}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-6">Our Mission is Simple: <br/><span className="text-primary-600">Your Success</span></h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded by former IELTS examiners and top-scoring educators, Achievers Academy was born from a realization: traditional IELTS coaching focuses too much on generic tips and too little on actual skill building and personalized feedback.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that every student has unique strengths and weaknesses. Our approach combines rigorous daily practice, real-time feedback, and strategic test-taking methods to guarantee results.
              </p>
              <div className="space-y-4">
                {['Personalized study plans', 'Daily speaking and writing feedback', 'Authentic mock tests', 'Dedicated mentorship'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-600 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students studying" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
