export default function LearningOutcomes() {
  const outcomes = [
    "Help fill prescriptions safely and correctly",
    "Calculate medication doses accurately",
    "Understand pharmacy laws and ethics",
    "Store medications properly",
    "Use medical terms for medications and procedures",
    "Communicate clearly with patients about their medications",
    "Learn about career paths in pharmacy"
  ];

  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="h-10 w-1 bg-green-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">What You'll Learn</h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-lg mb-6">By the end of this course, you will be able to:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center shrink-0 mr-3">
                <span className="font-bold">{index + 1}</span>
              </div>
              <p className="font-medium mt-1">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
