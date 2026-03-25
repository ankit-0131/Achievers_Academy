import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Clock, BookOpen, Building, Users } from 'lucide-react';

const courses = [
  {
    id: 'crash-course',
    name: 'Crash Course',
    badge: 'Fast Track',
    duration: '2 Weeks',
    price: '₹4,999',
    originalPrice: '₹7,999',
    description: 'Perfect for students who need a quick refresher before their exam.',
    features: [
      '10 In-person Strategy Sessions',
      '5 Full-length Mock Tests',
      'Speaking Evaluation (2 Sessions)',
      'Writing Evaluation (5 Essays)',
      'Grammar & Vocab Toolkit'
    ],
    icon: Clock,
    popular: false,
    color: 'slate'
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive',
    badge: 'Most Popular',
    duration: '8 Weeks',
    price: '₹12,999',
    originalPrice: '₹18,999',
    description: 'Our most comprehensive program guaranteeing a 7+ band score.',
    features: [
      '40 Physical Classroom Sessions',
      '15 Full-length Mock Tests',
      'Daily Speaking Practice',
      'Unlimited Writing Evaluations',
      '1-on-1 Doubt Solving',
      'Grammar & Vocab Masterclass'
    ],
    icon: Star,
    popular: true,
    color: 'primary'
  },
  {
    id: 'one-on-one',
    name: '1-on-1 Mentorship',
    badge: 'Premium',
    duration: '4-8 Weeks',
    price: '₹24,999',
    originalPrice: '₹35,999',
    description: 'Personalized attention tailored entirely to your pace and needs.',
    features: [
      'Flexible Scheduling',
      'Dedicated Expert Mentor',
      'Customized Study Plan',
      'Daily Speaking Practice',
      'Unlimited Writing Evaluations',
      'Priority Support & Mock Tests'
    ],
    icon: Users,
    popular: false,
    color: 'purple'
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 w-full h-[500px] bg-primary-900 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-700/50 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-6"
          >
            Find Your Perfect <span className="text-primary-400">Match</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-100"
          >
            Select a course that fits your timeline, learning style, and target score. All courses include our signature expert feedback.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isPopular = course.popular;
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 flex flex-col h-full 
                  ${isPopular 
                    ? 'shadow-2xl shadow-primary-500/20 border-2 border-primary-500 md:-translate-y-4' 
                    : 'shadow-xl shadow-slate-200/50 border border-slate-100 mt-0 md:mt-4'}`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white font-bold px-4 py-1 rounded-full text-sm shadow-lg whitespace-nowrap">
                    {course.badge}
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                    ${isPopular ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-600'}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-slate-900 mb-2">{course.name}</h3>
                  <p className="text-slate-500 text-sm">{course.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black text-slate-900">{course.price}</span>
                    <span className="text-lg text-slate-400 line-through mb-1">{course.originalPrice}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">Duration: {course.duration}</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                        ${isPopular ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/book-demo"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all focus:ring-2 focus:outline-none flex items-center justify-center
                    ${isPopular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30 focus:ring-primary-500/50' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-300'}`}
                >
                  Book Free Demo
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-4">
            <Building className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">State-of-the-Art Campus</h4>
            <p className="text-sm text-slate-500">Spacious physical classrooms & library</p>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <BookOpen className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Study Material</h4>
            <p className="text-sm text-slate-500">Free access to all PDFs & Portals</p>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <Star className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Score Guarantee</h4>
            <p className="text-sm text-slate-500">Or money back (Conditions apply)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
