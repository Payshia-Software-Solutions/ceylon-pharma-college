import CoursePage from '@/components/CoursePage'; // Import the client-side component
import config from '@/config'; // Assuming config contains your API_BASE_URL

// Fetch metadata dynamically based on the slug
export async function generateMetadata({ params }) {
  const { slug } = params;

  // You can fetch additional data based on the slug to generate metadata
  const courseData = getCourseDataBySlug(slug); // Replace this with your actual data fetching function

  return {
    title: courseData ? `${courseData.title} | Ceylon Pharma College` : 'Ceylon Pharma College',
    description: courseData ? `Learn about the ${courseData.title} at Ceylon Pharma College.` : 'Explore our pharmacy programs at Ceylon Pharma College.',
  };
}

// Get Sulgs  
const getCourseDataBySlug = (slug) => {
  // Here, you can fetch data based on the slug, e.g., from an API or database
  const courseMapping = {
    'certificate-course-in-pharmacy-practice': {
      title: 'Certificate Course in Pharmacy Practice',
      description: 'This certificate course covers the fundamentals of pharmacy practice.',
    },
    'advanced-course-in-pharmacy-practice': {
      title: 'Advanced Course in Pharmacy Practice',
      description: 'his certificate course covers the fundamentals of advanced pharmacy practice',
    },
  };

  return courseMapping[slug];
};

// Generate static params for all courses
export async function generateStaticParams() {
  try {
    const res = await fetch(`${config.API_BASE_URL}/parent-main-course`);
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data = await res.json();

    // Returning dynamic slugs of all courses
    return data.map((course) => ({
      slug: course.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // If the fetch fails, return an empty array
  }
}


export default function CoursePageWrapper({ params }) {
  const { slug } = params;

  return <CoursePage slug={slug} />;
}
