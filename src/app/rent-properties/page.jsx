"use client";
import { useState } from "react";
import { Search, MapPin, Home, Bed, Bath } from "lucide-react";
import Link from "next/link";

const RentProperties = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const properties = [
    {
      id: 1,
      title: "Luxury Villa with Private Pool",
      price: "AED 4,200,000",
      location: "Palm Jumeirah, Dubai",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 6,
      area: "5,200 sq ft",
      image:
        "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 2,
      title: "Modern Apartment Downtown",
      price: "AED 2,100,000",
      location: "Downtown Dubai",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,000 sq ft",
      image:
        "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 3,
      title: "Family Villa with Garden",
      price: "AED 3,500,000",
      location: "Jumeirah Village Circle",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,500 sq ft",
      image:
        "https://images.unsplash.com/photo-1757439402101-55d1da381e70?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 py-16 text-white" 
     
        style={{
        width: '100%',
        height: '100%',
        backgroundImage: "url('/rent.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
            }}
        >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Rent Properties in Dubai</h1>
          <p className="text-lg opacity-90">
            Explore the best villas, apartments, and luxury homes for Rent
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-md rounded-lg max-w-7xl mx-auto px-6 py-6 mt-[-40px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Location"
            className="border rounded-lg px-4 py-2 w-full"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
          <select
            className="border rounded-lg px-4 py-2 w-full"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Property Type</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
          </select>
          <input
            type="number"
            placeholder="Min Price (AED)"
            className="border rounded-lg px-4 py-2 w-full"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Max Price (AED)"
            className="border rounded-lg px-4 py-2 w-full"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
          <select
            className="border rounded-lg px-4 py-2 w-full"
            value={filters.bedrooms}
            onChange={(e) =>
              setFilters({ ...filters, bedrooms: e.target.value })
            }
          >
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
            <Search className="w-4 h-4"  /> Search
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{property.title}</h3>
              <p className="text-green-600 font-semibold mb-2">
                {property.price}
              </p>
              <p className="text-gray-600 flex items-center gap-1 mb-3">
                <MapPin className="w-4 h-4" /> {property.location}
              </p>
              <div className="flex items-center text-sm text-gray-600 gap-4 mb-4">
                <span className="flex items-center gap-1">
                  <Home className="w-4 h-4" /> {property.type}
                </span>
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" /> {property.bedrooms} Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" /> {property.bathrooms} Baths
                </span>
              </div>
              {/* bg-[#ea2d04] */}
              
              <Link href="/property-detail" >
              <button className="w-full bg-green-600  text-white py-2 rounded-lg hover:bg-green-700 transition" 
              style={{cursor:"pointer"}}
              >
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentProperties;

