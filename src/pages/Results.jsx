import { motion } from 'framer-motion';
import { PlayCircle, Star, BadgeCheck } from 'lucide-react';

const results = [
  { id: 1, name: 'Anjali Verma', score: '8.5', type: 'Academic', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop', video: true },
  { id: 2, name: 'Rohan Gupta', score: '8.0', type: 'General', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', video: false },
  { id: 3, name: 'Priya Iyer', score: '7.5', type: 'Academic', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', video: true },
  { id: 4, name: 'Arun Kumar', score: '8.0', type: 'Academic', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', video: false },
  { id: 5, name: 'Sneha Patil', score: '7.5', type: 'General', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop', video: true },
  { id: 6, name: 'Vikram Singh', score: '8.5', type: 'Academic', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', video: false },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200"
          >
            <BadgeCheck className="w-5 h-5" />
            Proven Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6"
          >
            Meet Our <span className="text-primary-600">Achievers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Over 500+ students have secured their dream band scores with our expert mentorship. Here are some of our proudest success stories.
          </motion.p>
        </div>

        {/* Highlighted Video Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2].map((item, index) => (
            <motion.div 
              key={`video-${item}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative rounded-3xl overflow-hidden aspect-video bg-slate-800 group cursor-pointer shadow-2xl shadow-slate-200/50"
            >
              <img 
                src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop&sig=${item}`} 
                alt="Student Interview"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary-600/90 rounded-full flex items-center justify-center text-white backdrop-blur-md group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">How I scored an 8.5 in 4 weeks</h3>
                    <p className="text-slate-300 text-sm">Student Interview • {item === 1 ? 'Academic' : 'General'}</p>
                  </div>
                  <div className="bg-primary-500 text-white font-bold px-3 py-1 rounded-lg">
                    {item === 1 ? '8.5' : '8.0'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{result.type}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={result.image} alt={result.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{result.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-black text-primary-600">{result.score}</span>
                    <span className="text-sm font-medium text-slate-500">Band</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-primary-600 hover:text-primary-600 transition-colors">
            Load More Results
          </button>
        </div>

      </div>
    </div>
  );
};

export default Results;
