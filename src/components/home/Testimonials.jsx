import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    score: '8.0 Band',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'The daily speaking practice and personalized feedback loops were game-changers for me. I jumped from a 6.5 to an 8.0 in just 4 weeks!',
    role: 'Student Visa, Canada'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    score: '7.5 Band',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Achievers Academy provides the most structured and result-oriented IELTS coaching. The mock tests felt exactly like the real exam.',
    role: 'PR Visa, Australia'
  },
  {
    id: 3,
    name: 'Anita Desai',
    score: '8.5 Band',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'I struggled with the reading section for months. Their specific strategies and time management techniques finally helped me ace it.',
    role: 'Masters Degree, UK'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 rounded-l-full opacity-50 -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary-100 rounded-r-full opacity-30 -z-10 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Success Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6"
          >
            Don't Just Take Our Word For It
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Join hundreds of students who have successfully achieved their target band scores and realized their international dreams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-100 group-hover:text-primary-200 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-poppins font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-primary-600 bg-primary-50 inline-block px-2 py-0.5 rounded-md mb-1">{testimonial.score}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
