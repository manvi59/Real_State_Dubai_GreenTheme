// import React from "react";

// export default function CitiesWidget() {
//   return (
//     <div className="bg-gray-100 text-gray-900 font-inter">
//       <div className="max-w-screen-xl mx-auto px-6 py-12">
//         <div className="text-xs font-bold text-gray-500 tracking-widest">
//           TOP CITIES
//         </div>
//         <h1 className="text-4xl sm:text-3xl font-bold text-gray-900 mt-2 mb-8">
//           Explore Real Estate in Popular Indian Cities
//         </h1>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Main Grid */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-10 mb-14">
//               {[
//                 {
//                   name: "Delhi / NCR",
//                   count: "239,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1549921296-3f0c5b48a1d8?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Bangalore",
//                   count: "65,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Pune",
//                   count: "64,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Chennai",
//                   count: "43,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1541394024114-1fbc37f5b7bd?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Mumbai",
//                   count: "65,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1554774853-b6e8e8f1d2b6?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Hyderabad",
//                   count: "32,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Kolkata",
//                   count: "38,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
//                 },
//                 {
//                   name: "Ahmedabad",
//                   count: "31,000+ Properties",
//                   img: "https://images.unsplash.com/photo-1505765056139-4a4f6d2a7f66?q=80&w=800&auto=format&fit=crop",
//                 },
//               ].map((city, idx) => (
//                 <div key={idx} className="flex items-center gap-4">
//                   <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
//                     <img
//                       src={city.img}
//                       alt={city.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="leading-tight">
//                     <div className="font-semibold text-gray-900 text-base">
//                       {city.name}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-1">{city.count}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full lg:w-28 flex flex-col items-center justify-center gap-6">
//             <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
//               <img
//                 src="https://images.unsplash.com/photo-1505765056139-4a4f6d2a7f66?q=80&w=800&auto=format&fit=crop"
//                 alt="side1"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-xl">
//               ›
//             </div>
//             <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
//               <img
//                 src="https://images.unsplash.com/photo-1549921296-3f0c5b48a1d8?q=80&w=800&auto=format&fit=crop"
//                 alt="side2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <h3 className="text-lg font-semibold text-gray-900 mt-14 mb-3">
//           We can add a CTA Section like this
//         </h3>
//         <div className="mt-3">
//           <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-700 to-emerald-800 text-white shadow-lg">
//             <div className="flex gap-2 ml-1">
//               {["32", "45", "65", "12"].map((id) => (
//                 <div
//                   key={id}
//                   className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/20"
//                 >
//                   <img
//                     src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
//                     alt={`avatar-${id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="flex-1">
//               <div className="text-sm font-bold">Find a TruBroker™</div>
//               <div className="text-sm opacity-90 mt-1">
//                 Find trusted agents awarded for their excellent performance
//               </div>
//             </div>
//             <button className="px-4 py-2 rounded-lg bg-white text-teal-900 font-bold shadow hover:bg-gray-100 transition text-sm">
//               Find My Agent ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { MapPin } from "lucide-react";

export default function CitiesWidget() {
  const cities = [
    {
      name: "Dubai Marina",
      count: "450+ Properties",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Downtown Dubai",
      count: "320+ Properties",
      img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Palm Jumeirah",
      count: "180+ Properties",
      img: "https://images.unsplash.com/photo-1580738315017-ba3bf13e31a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Business Bay",
      count: "290+ Properties",
      img: "https://images.unsplash.com/photo-1664190053321-4ef213299eec?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jumeirah Beach Residence",
      count: "220+ Properties",
      img: "https://images.unsplash.com/photo-1757439402101-55d1da381e70?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Al Barsha",
      count: "180+ Properties",
      img: "https://images.unsplash.com/photo-1580738315017-ba3bf13e31a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "DIFC",
      count: "150+ Properties",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "JLT",
      count: "210+ Properties",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Explore Real Estate in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Top Dubai Areas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most sought-after neighborhoods in Dubai with exclusive property listings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.count}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex -space-x-3 mr-4">
                {["32", "45", "65", "12"].map((id) => (
                  <img
                    key={id}
                    src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                    alt="Agent"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold">Find a Trusted Real Estate Agent</h4>
                <p className="text-sm text-white/80">
                  Connect with top-rated brokers to find your perfect home.
                </p>
              </div>
            </div>
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition">
              Find My Agent →
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
