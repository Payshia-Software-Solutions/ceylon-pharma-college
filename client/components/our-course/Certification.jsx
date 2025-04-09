export default function Certification() {
    const requirements = [
      "Complete all course modules",
      "Participate in learning games",
      "Pass 3 tests and the final assignment",
      "Maintain an average score of 60% or higher"
    ];
  
    return (
      <section>
        <div className="flex items-center mb-6">
          <div className="h-10 w-1 bg-green-600 mr-4"></div>
          <h2 className="text-3xl font-bold text-gray-800">Certification</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                After successfully completing the course, you will receive an official certificate. 
                To qualify, you must:
              </p>
              
              <ul className="space-y-3 mb-6">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">{req}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-lg">
                The certificate is recognized by ACTD and the Skill Development Council of Canada. 
                Certificates will be presented at a ceremony at BMICH.
              </p>
            </div>
            
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-green-200 rounded-lg transform rotate-3"></div>
                <div className="relative bg-white border-4 border-green-600 rounded-lg p-6 text-center shadow-lg">
                  <div className="border-b-2 border-green-600 pb-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-xl font-bold text-green-800">CERTIFICATE</h3>
                  </div>
                  <p className="text-sm mb-2">Ceylon Pharma College</p>
                  <p className="font-bold mb-1">Pharmacy Practice</p>
                  <p className="text-sm">Recognized Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  