'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Edit, Trash2, PlusCircle } from 'lucide-react';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Luxury Apartment in Downtown',
      price: '$250,000',
      status: 'Listed',
      location: 'Dubai Marina',
    },
    {
      id: 2,
      title: 'Cozy Studio Flat',
      price: '$120,000',
      status: 'Sold',
      location: 'Business Bay',
    },
  ]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Properties</h1>
        <Link
          href="/properties/add-property"
          className="bg-[#ea2d04] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#c52603]"
        >
          <PlusCircle size={18} /> Add Property
        </Link>
      </div>

      <table className="w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Location</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{property.title}</td>
              <td className="p-3">{property.location}</td>
              <td className="p-3">{property.price}</td>
              <td className="p-3">{property.status}</td>
              <td className="p-3 flex gap-3">
                <Link
                  href={`/properties/${property.id}/edit-property`}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Edit size={16} /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="text-red-600 hover:underline flex items-center gap-1"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
