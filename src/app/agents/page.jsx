// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       agent page 
//     </div>
//   )
// }

// export default page


"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import Link from "next/link";

const agentsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d9c0?auto=format&fit=crop&w=150&q=80",
    location: "Dubai, UAE",
    phone: "+971 50 123 4567",
    email: "sarah@propertyhub.com",
    rating: 4.9,
    reviews: 127,
    properties: 45,
  },
  {
    id: 2,
    name: "Ahmed Al-Mansouri",
    title: "Luxury Property Specialist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    location: "Palm Jumeirah, Dubai",
    phone: "+971 55 987 6543",
    email: "ahmed@propertyhub.com",
    rating: 4.7,
    reviews: 98,
    properties: 32,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Residential Property Expert",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    location: "Downtown Dubai",
    phone: "+971 52 456 7890",
    email: "maria@propertyhub.com",
    rating: 4.8,
    reviews: 112,
    properties: 40,
  },
];

const AgentsPage = () => {
  const [search, setSearch] = useState("");

  const filteredAgents = agentsData.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-green-600 py-16 text-white"   style={{
        width: '100%',
        height: '100%',
        backgroundImage: "url('agents.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
            }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Meet Our Agents</h1>
          <p className="text-lg opacity-90">
            Find the best real estate agents to help you buy your dream property
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search agents by name"
            className="flex-1 border rounded-lg px-4 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Search
          </button>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAgents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="flex flex-col items-center p-6">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
              <p className="text-gray-600 mb-2">{agent.title}</p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(agent.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-sm">({agent.reviews})</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-4 h-4" /> {agent.location}
              </div>
              <div className="flex gap-2 w-full">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700"
                >
                  Call
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-lg text-center hover:bg-green-600 hover:text-white transition"
                >
                  Email
                </a>
              </div>
              
              <Link href="/agent-profile">
              <button className="mt-4 w-full bg-gray-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition" 
              style={{cursor:"pointer"}}
              >
                View Listings ({agent.properties})
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
