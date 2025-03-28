"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Using useParams instead of useSearchParams
import SingleEvent from "@/components/SingleEvent";
import config from "@/config"; // Assuming you have a config file for API URLs

const page = () => {
  const { slug } = useParams(); // Get slug from dynamic route

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      console.warn("No slug found in URL!");
      return;
    }

    const fetchEvent = async () => {
      try {
        console.log("Fetching event for slug:", slug);
        const apiUrl = `http://localhost/pharma-college-project/server/events-page/${slug}`; // Dynamic API call
        console.log("API URL:", apiUrl);

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Event not found. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Event Data:", data);

        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  if (loading) return <p className="text-center">Loading event...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!event) return <p className="text-center">No event data available.</p>;

  return (
    <SingleEvent
      title={event.title}
      description={event.description}
      image={event.image_url}
      label={event.label}
      Date={event.event_date}
    />
  );
};

export default page;
