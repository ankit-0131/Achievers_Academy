import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          Ready to achieve your dream score?
        </h2>
        <p className="text-primary-100 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-inter">
          Join thousands of successful students who transformed their IELTS preparation with our daily feedback system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/book-demo" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 hover:bg-slate-50 rounded-full font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
          >
            Book Your Free Demo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-primary-100 font-medium">No credit card required.</span>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
