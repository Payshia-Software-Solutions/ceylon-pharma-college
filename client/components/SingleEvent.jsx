"use client";
import { useEffect, useState } from "react";
import config from "@/config";

function SingleEvent({ slug }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const apiUrl = `${config.API_BASE_URL}/events-page/${slug}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Event not found. Status: ${response.status}`);
        }
        
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  if (loading) return <p className="text-center">Loading event...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!event) return <p className="text-center">No event data available.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Image Section */}
      <img
        src={`/assets/event/${event.image_url}`}
        alt={event.title}
        className="w-full rounded-lg shadow-lg"
      />

      {/* Content Section */}
      <div className="mt-6">
        <h3 className="text-sm bg-maincolor text-white px-4 py-2 max-w-32 w-auto font-semibold rounded-md uppercase">
          {event.label}
        </h3>
        <h1 className="text-3xl font-bold mt-2">{event.title}</h1>
        <p className="text-gray-600 mt-2">
          held <span className="font-semibold">on</span>{" "}
          <span className="mx-4 font-bold text-xl">{event.event_date}</span>
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default SingleEvent;