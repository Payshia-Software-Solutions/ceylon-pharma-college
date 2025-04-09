import CourseHero from '@/components/our-course/CourseHero';
import CourseSidebar from '@/components/our-course/CourseSidebar';
import AboutCourse from '@/components/our-course/AboutCourse';
import LearningOutcomes from '@/components/our-course/LearningOutcomes';
import CourseTopics from '@/components/our-course/CourseTopics';
import AssessmentMethod from '@/components/our-course/AssessmentMethod';
import Certification from '@/components/our-course/Certification';
import EnrollmentSteps from '@/components/our-course/EnrollmentSteps';


export async function generateMetadata({ params }) {
  // In a real app, you would fetch this data based on the slug
  return {
    title: "Certificate Course in Pharmacy Practice | Ceylon Pharma College",
    description: "Learn the basics of pharmacy practice with our certificate course at Ceylon Pharma College."
  };
}

export default function CoursePage({ params }) {
  const { slug } = params;
  
  // This would normally come from a CMS or API based on the slug
  const courseData = {
    title: "Certificate Course in Pharmacy Practice",
    duration: "6 months",
    schedule: "Saturdays, 8:00 PM - 10:00 PM",
    level: "Beginner-friendly (no prior pharmacy experience needed)",
    price: "LKR 25,000",
    image: "/images/pharmacy-course.jpg"
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-24">
      <CourseHero 
        title={courseData.title} 
        image={courseData.image}
      />

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <AboutCourse />
            <LearningOutcomes />
            <CourseTopics />
            <AssessmentMethod />
            <Certification />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar 
              duration={courseData.duration}
              schedule={courseData.schedule}
              level={courseData.level}
              price={courseData.price}
            />
          </div>
        </div>

        {/* How to Enroll Section */}
        <EnrollmentSteps />
      </div>
    </div>
  );
}
