export default function EnrollmentSteps() {
    const steps = [
      {
        title: "Complete Application",
        description: "Fill out the application form on the Ceylon Pharma College website",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      },
      {
        title: "Secure Your Spot",
        description: "Enrollment is first-come, first-served with limited spots available",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Contact for Information",
        description: "For more information, contact our admissions team at 071 5 884 884 or 077 59 60 884",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )
      }
    ];
  
    return (
      <section className="mt-16 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Enroll</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full border border-white/20 hover:bg-white/20 transition duration-300">
                <div className="bg-green-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-green-100 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-xl font-bold mb-6">Start your pharmacy career today!</p>
          <button className="bg-white text-green-800 py-3 px-8 rounded-full font-bold hover:bg-green-50 transition duration-300 shadow-lg">
            Apply Now
          </button>
        </div>
      </section>
    );
  }