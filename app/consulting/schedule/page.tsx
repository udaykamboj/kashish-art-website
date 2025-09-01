"use client";

import { useEffect, useState } from "react";
import { Calendar, Handshake, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const serviceNames: Record<string, string> = {
  consultation: "1:1 Art Consultation",
  commission: "Custom Art Commission",
  workshop: "Art Workshop",
  review: "Portfolio Review",
  direction: "Creative Direction",
};

export default function SchedulePage() {
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const service = urlParams.get("service") || "consultation";
      setSelectedService(service);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section */}
   

       <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Schedule Your Meeting</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book a consultation for: <span className="font-semibold">{serviceNames[selectedService] || "General Consultation"}</span>
          </p>
          <p className="text-lg opacity-80">Choose a convenient time that works for you</p>
         
        </div>
        </div>


      {/* Calendar Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Preferred Time</h2>
              <p className="text-gray-600">All meetings are conducted via Google Meet. You'll receive a calendar invitation with the meeting link.</p>
            </div>
            {/* Cal.com Embed */}
            <div className="cal-embed-container" style={{ position: "relative", width: "100%", height: "600px" }}>
              <iframe
                src={siteConfig.contact.calAccountLink || "https://cal.com/kashishseth.art/30min?theme=light&hideEventTypeDetails=true&backgroundColor=ffffff"}
                frameBorder="0"
                scrolling="no"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Schedule Meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
        <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-50 mb-4">
                <Calendar className="h-10 w-10 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Book Your Slot</h3>
              <p className="text-gray-600 text-center">Choose a convenient time from the available slots above</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-50 mb-4">
                <Mail className="h-10 w-10 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Get Confirmation</h3>
              <p className="text-gray-600 text-center">Receive email confirmation with Google Meet link and agenda</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-50 mb-4">
                <Handshake className="h-10 w-10 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Join the Meeting</h3>
              <p className="text-gray-600 text-center">Connect at the scheduled time to discuss your goals and next steps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







