export default function CourseHero({ title, image }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-90 z-10"></div>
      <div 
        className="h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image || '/images/default-course.jpg'})` }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="absolute bottom-12 left-0 right-0 px-4 md:px-8">
          <div className="flex items-center space-x-2 text-green-100 mb-4">
            <span>Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Courses</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium">Pharmacy Practice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Start your career in pharmacy with our comprehensive certificate program.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-green-700 py-3 px-8 rounded-full font-bold hover:bg-green-50 transition duration-300 shadow-lg">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-bold hover:bg-white/10 transition duration-300">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
