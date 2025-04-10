"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleEvent from "@/components/SingleEvent";
import config from "@/config";

const page = () => {
  const { slug } = useParams();
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
        const apiUrl = `${config.API_BASE_URL}/events-page/${slug}`;
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
