import { motion } from 'framer-motion';
import { BookOpen, Headphones, PenTool, Mic, Info } from 'lucide-react';

const IELTSDetail = () => {
  const sections = [
    {
      title: 'Listening',
      icon: Headphones,
      time: '30 Minutes (+10 min transfer)',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      description: 'You will listen to four recordings of native English speakers and then write your answers to a series of questions.',
      details: ['Recording 1: A conversation between two people set in an everyday context.', 'Recording 2: A monologue set in an everyday social context.', 'Recording 3: A conversation between up to four people set in an educational or training context.', 'Recording 4: A monologue on an academic subject.']
    },
    {
      title: 'Reading',
      icon: BookOpen,
      time: '60 Minutes',
      color: 'bg-green-50 text-green-600 border-green-100',
      description: 'The Reading section consists of 40 questions, designed to test a wide range of reading skills.',
      details: ['Reading for gist, main ideas, and detail.', 'Skimming and understanding logical argument.', 'Academic: 3 long texts which range from the descriptive to the analytical.', 'General: Extracts from books, magazines, newspapers, notices, etc.']
    },
    {
      title: 'Writing',
      icon: PenTool,
      time: '60 Minutes',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      description: 'The Writing section consists of two tasks representing real-world situations.',
      details: ['Task 1 (Academic): Describe visual information (graph, table, chart).', 'Task 1 (General): Write a letter requesting information or explaining a situation.', 'Task 2: Write an essay in response to a point of view, argument or problem.', 'Word limit: 150 words for Task 1, 250 words for Task 2.']
    },
    {
      title: 'Speaking',
      icon: Mic,
      time: '11-14 Minutes',
      color: 'bg-orange-50 text-orange-600 border-orange-100',
      description: 'The Speaking test assesses your use of spoken English and is conducted as a face-to-face interview.',
      details: ['Part 1: Introduction and interview on familiar topics (4-5 mins).', 'Part 2: Long turn where you speak about a particular topic on a task card (3-4 mins).', 'Part 3: Two-way discussion on issues related to the topic in Part 2 (4-5 mins).', 'Every test is recorded for evaluation.']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6"
          >
            Understanding the <span className="text-primary-600">IELTS Format</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            The International English Language Testing System assesses all of your English skills in less than three hours. Know what to expect on test day.
          </motion.p>
        </div>

        {/* Academic vs General */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Academic vs. General Training</h3>
            <p className="text-slate-600 mb-4 text-lg">
              There are two types of IELTS test. The Listening and Speaking sections are identical for both tests, but the Reading and Writing sections differ.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">IELTS Academic</h4>
                <p className="text-sm text-slate-600">For those applying for higher education or professional registration in an English speaking environment.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">IELTS General Training</h4>
                <p className="text-sm text-slate-600">For those migrating to Australia, Canada and the UK, or applying for secondary education/training programs.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Test Format Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${section.color} border`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-sm font-bold px-3 py-1 rounded-full border border-slate-200">
                    {section.time}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 mb-6">{section.description}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-4">What to expect</h4>
                  <ul className="space-y-3">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default IELTSDetail;
