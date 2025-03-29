"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "./Common/SectionHeader";
import NewEventCard from "./Common/NewEventCard";
import config from "@/config";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(  `${config.API_BASE_URL}/events-page  `);            

        if (!response.ok) throw new Error("Failed to fetch events");
        
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="mt-24">
      {/* Section Header */}
      <SectionHeader imgURL="/assets/images/cover.png" title="Events" />

      <div className="px-16 py-8">
        {loading && <p className="text-center">Loading events...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && events.length === 0 && (
          <p className="text-center">No events found.</p>
        )}

        {/* Grid for Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <NewEventCard
              key={event.id}
              date={new Date(event.event_date).getDate()}
              monthYear={new Date(event.event_date).toLocaleString("en-US", {
                month: "short",
                year: "numeric",
              })}
              Label={event.label}
              title={event.title}
              minidescription={event.mini_description}
              phone={event.phone}
              image=  {  ` /assets/event/${event.image_url}`  } 
              slug={event.slug}

              

        
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
