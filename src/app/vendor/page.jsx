"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, PlusCircle, Edit, Trash2, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import  Button  from "../components/ui/button";

export default function VendorDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    sold: 0,
    rented: 0,
    active: 0,
  });

  const [latestProperties, setLatestProperties] = useState([]);

  useEffect(() => {
    // fetch stats and recent properties
    async function fetchData() {
      try {
        const res = await fetch("/api/vendor/stats");
        const data = await res.json();
        setStats(data.stats);
        setLatestProperties(data.recent);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#ea2d04]">Vendor Dashboard</h1>
        <Link href="/vendor/properties/add-property">
          <Button className="bg-[#ea2d04] text-white flex items-center gap-2">
            <PlusCircle size={18} /> Add New Property
          </Button>
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Total Properties", value: stats.total, icon: Home, color: "bg-orange-100 text-orange-600" },
          { title: "Sold Properties", value: stats.sold, icon: CheckCircle, color: "bg-green-100 text-green-600" },
          { title: "Rented", value: stats.rented, icon: DollarSign, color: "bg-blue-100 text-blue-600" },
          { title: "Active Listings", value: stats.active, icon: Edit, color: "bg-yellow-100 text-yellow-600" },
        ].map((item, i) => (
          <Card key={i} className="rounded-xl shadow hover:shadow-lg transition">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-gray-600 text-sm">{item.title}</p>
                <h3 className="text-2xl font-semibold">{item.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${item.color}`}>
                <item.icon size={22} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Properties */}
      <Card className="rounded-2xl shadow-md border-0 bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-[#ea2d04] font-semibold">
            Recent Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          {latestProperties.length === 0 ? (
            <p className="text-gray-600">No properties found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestProperties.map((property) => (
                <div
                  key={property._id}
                  className="rounded-xl border shadow-sm hover:shadow-lg transition bg-white overflow-hidden"
                >
                  <img
                    src={property.image || "/default-property.jpg"}
                    className="w-full h-48 object-cover"
                    alt={property.title}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {property.location}
                    </p>
                    <p className="text-[#ea2d04] font-medium mb-3">
                      AED {property.price}
                    </p>
                    <div className="flex gap-2">
                      <Link href={`/vendor/properties/${property._id}/edit-property`}>
                        <Button size="sm" className="bg-blue-500 text-white flex-1">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1"
                        onClick={() => alert("Delete action")}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/vendor/inquiries">
          <Card className="hover:shadow-lg transition cursor-pointer border-emerald-100">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-700">📩 Buyer Inquiries</h3>
              <p className="text-sm text-gray-500 mt-1">View messages from potential buyers</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/vendor/earnings">
          <Card className="hover:shadow-lg transition cursor-pointer border-yellow-100">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-700">💰 Earnings</h3>
              <p className="text-sm text-gray-500 mt-1">Track your property sale earnings</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/vendor/profile">
          <Card className="hover:shadow-lg transition cursor-pointer border-blue-100">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-700">👤 Profile & Settings</h3>
              <p className="text-sm text-gray-500 mt-1">Manage your vendor profile & verification</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
