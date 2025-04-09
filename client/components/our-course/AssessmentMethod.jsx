export default function AssessmentMethod() {
  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="h-10 w-1 bg-green-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">Assessment Method</h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-lg mb-6">Your progress will be evaluated through:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Assessments</h3>
            <p>Evaluations during the course to track your progress</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              12
            </div>
            <h3 className="text-xl font-semibold mb-2">Quizzes</h3>
            <p>Regular quizzes to reinforce your knowledge</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Exams</h3>
            <p>Hands-on evaluations of your practical skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}