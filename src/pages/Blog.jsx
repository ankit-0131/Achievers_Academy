import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Top 10 Vocabulary Words for IELTS Writing Task 2',
    excerpt: 'Boost your lexical resource score with these high-frequency academic words that can elevate any essay.',
    category: 'Writing',
    date: 'Oct 15, 2024',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'How to tackle True/False/Not Given questions',
    excerpt: 'The most confusing question type in IELTS Reading decoded with simple strategies.',
    category: 'Reading',
    date: 'Oct 12, 2024',
    author: 'David Malik',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'Speaking Part 2: Generating Ideas under pressure',
    excerpt: 'Never run out of things to say in your 2-minute cue card speech with this mind-mapping technique.',
    category: 'Speaking',
    date: 'Oct 10, 2024',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'Understanding the IELTS Listening Formats',
    excerpt: 'A comprehensive breakdown of the 4 audio sections and what examiners are testing.',
    category: 'Listening',
    date: 'Oct 05, 2024',
    author: 'Priya Verma',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop',
    featured: false
  }
];

const Blog = () => {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <BookOpen className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6"
          >
            Insights & <span className="text-primary-600">Strategies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Expert tips, preparation strategies, and the latest updates on the IELTS exam from our team of former examiners.
          </motion.p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 mb-12 border border-slate-100 group cursor-pointer lg:grid lg:grid-cols-2"
          >
            <div className="relative h-64 lg:h-full overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Featured
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                <span className="text-primary-600 bg-primary-50 px-2 py-1 rounded-md">{featuredPost.category}</span>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</div>
              </div>
              <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <User className="w-5 h-5 text-slate-400" />
                  {featuredPost.author}
                </div>
                <span className="flex items-center gap-1 text-primary-600 font-bold group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group cursor-pointer flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <h3 className="text-xl font-poppins font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-medium text-slate-700">{post.author}</span>
                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-primary-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay -z-10" />
          <h2 className="text-3xl font-poppins font-bold mb-4">Never Miss an Update</h2>
          <p className="text-primary-200 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get weekly preparation strategies and free materials delivered right to your inbox.</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-xl transition-colors">
              Subscribe
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;
