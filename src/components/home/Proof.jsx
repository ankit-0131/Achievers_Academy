const Proof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Students. <span className="text-primary-600">Real Results.</span></h2>
          <p className="text-slate-600 text-lg">See how we've helped hundreds achieve their dream scores.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map((item) => (
             <div key={item} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="w-16 h-16 bg-slate-200 rounded-full" />
                 <div>
                   <h3 className="font-bold text-lg">Student Name</h3>
                   <p className="text-primary-600 font-semibold">Band 8.0</p>
                 </div>
               </div>
               <p className="text-slate-600 italic">"The daily feedback was a game changer!"</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default Proof;
