import SingleCoures from '@/components/Course/SingleCoures';
import React from 'react';
import config from '@/config'; // Assuming config contains your API_BASE_URL

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const res = await fetch(`${config.API_BASE_URL}/parent-main-course`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();

    // Returning dynamic slugs of all products
    return data.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // If the fetch fails, return an empty array
  }
}

function page({ params }) {
  const { slug } = params;

  return (
    <div className='mt-24'>
      <SingleCoures slug={slug} />  {/* Passing the slug to the component */}
    </div>
  );
}

export default page;
