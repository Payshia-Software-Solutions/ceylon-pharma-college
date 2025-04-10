
import SingleEvent from "@/components/SingleEvent";
import config from "@/config";


export async function generateMetadata({ params }) {
  const { slug } = params;
  
  try {
    const eventData = await getEventBySlug(slug);
    
    return {
      title: eventData ? `${eventData.title} | Events` : 'Event Details',
      description: eventData ? eventData.description.substring(0, 160) : 'View event details.',
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: 'Event Details',
      description: 'View event details.',
    };
  }
}


async function getEventBySlug(slug) {
  const apiUrl = `${config.API_BASE_URL}/events-page/${slug}`;
  const response = await fetch(apiUrl, { next: { revalidate: 3600 } }); 
  
  if (!response.ok) {
    throw new Error(`Event not found. Status: ${response.status}`);
  }
  
  return response.json();
}


export async function generateStaticParams() {
  try {

    const res = await fetch(`${config.API_BASE_URL}/events-page`, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    
    const events = await res.json();
    

    return events.map((event) => ({
      slug: event.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function EventPage({ params }) {
  const { slug } = params;
  

  return <SingleEvent slug={slug} />;
}