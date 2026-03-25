import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-poppins font-bold text-white mb-4">Achievers<span className="text-primary-500">Academy</span></h3>
            <p className="max-w-md text-slate-400">
              Consistently achieve 7+ band scores with expert mentorship, daily speaking feedback, and weekly progress tracking.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-primary-400 transition-colors">Courses</Link></li>
              <li><Link to="/results" className="hover:text-primary-400 transition-colors">Results</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Achievers Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
