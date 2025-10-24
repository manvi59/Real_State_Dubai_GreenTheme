// "use client";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
// import  Button  from "../../components/ui/button";
// import { Edit, Mail, Phone, MapPin } from "lucide-react";

// export default function ProfilePage() {
//   const vendor = {
//     name: "Sarah Johnson",
//     email: "sarah@propertyhub.com",
//     phone: "+971 50 123 4567",
//     location: "Dubai, UAE",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108755-2616b612d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
//     propertiesListed: 32,
//     propertiesSold: 12,
//     experience: "8 years",
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-900">Vendor Profile</h1>

//       <Card>
//         <CardHeader className="flex items-center gap-6">
//           <Avatar className="w-20 h-20">
//             <AvatarImage src={vendor.avatar} alt={vendor.name} />
//             <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div>
//             <CardTitle className="text-2xl">{vendor.name}</CardTitle>
//             <p className="text-gray-500">{vendor.experience} of experience</p>
//           </div>
//           <Button className="ml-auto bg-green-600 hover:bg-green-700">
//             <Edit className="w-4 h-4 mr-2" /> Edit Profile
//           </Button>
//         </CardHeader>

//         <CardContent className="space-y-4">
//           <div className="flex items-center gap-2 text-gray-700">
//             <Mail className="w-5 h-5 text-green-600" />
//             {vendor.email}
//           </div>
//           <div className="flex items-center gap-2 text-gray-700">
//             <Phone className="w-5 h-5 text-green-600" />
//             {vendor.phone}
//           </div>
//           <div className="flex items-center gap-2 text-gray-700">
//             <MapPin className="w-5 h-5 text-green-600" />
//             {vendor.location}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-6">
//             <Card className="bg-gray-50 text-center">
//               <CardContent className="p-6">
//                 <p className="text-2xl font-bold text-green-600">
//                   {vendor.propertiesListed}
//                 </p>
//                 <p className="text-gray-500">Properties Listed</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-50 text-center">
//               <CardContent className="p-6">
//                 <p className="text-2xl font-bold text-blue-600">
//                   {vendor.propertiesSold}
//                 </p>
//                 <p className="text-gray-500">Properties Sold</p>
//               </CardContent>
//             </Card>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import  Button  from "../../components/ui/button";
import { Edit, Mail, Phone, MapPin, Star, TrendingUp, CalendarDays } from "lucide-react";

export default function ProfilePage() {
  const vendor = {
    name: "Sarah Johnson",
    email: "sarah@propertyhub.com",
    phone: "+971 50 123 4567",
    location: "Dubai, UAE",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    propertiesListed: 32,
    propertiesSold: 12,
    rating: 4.8,
    joined: "March 2017",
    experience: "8 years",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Vendor Profile</h1>

      {/* Profile Header */}
      <Card className="shadow-lg border border-gray-100">
        <CardHeader className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 ring-4 ring-green-100">
              <AvatarImage src={vendor.avatar} alt={vendor.name} />
              <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
              <CardTitle className="text-2xl font-semibold text-gray-900">{vendor.name}</CardTitle>
              <p className="text-gray-500">{vendor.experience} of real estate experience</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <Star className="w-4 h-4 fill-yellow-500" />
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {vendor.rating} / 5.0 rating
                </span>
              </div>
            </div>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg">
            <Edit className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-600" />
              <span>{vendor.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>{vendor.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>{vendor.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-green-600" />
              <span>Joined {vendor.joined}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card className="bg-gray-50 border border-gray-100 text-center shadow-sm">
          <CardContent className="p-6">
            <p className="text-3xl font-bold text-green-600">{vendor.propertiesListed}</p>
            <p className="text-gray-600 font-medium">Properties Listed</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 border border-gray-100 text-center shadow-sm">
          <CardContent className="p-6">
            <p className="text-3xl font-bold text-blue-600">{vendor.propertiesSold}</p>
            <p className="text-gray-600 font-medium">Properties Sold</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 border border-gray-100 text-center shadow-sm">
          <CardContent className="p-6">
            <p className="text-3xl font-bold text-yellow-500">{vendor.rating}</p>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="mt-10">
        <Card className="shadow-md border border-gray-100">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" /> Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Maintains a 95% client satisfaction rate across all property sales.</li>
              <li>Closed 12 successful deals in the past 6 months.</li>
              <li>Strong expertise in Dubai Marina and Downtown Dubai regions.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-10">
        <Card className="shadow-md border border-gray-100">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <p>🏠 Added new property in Downtown Dubai – Oct 15, 2025</p>
            <p>💰 Sold “Palm Jumeirah Villa” – Sep 28, 2025</p>
            <p>📈 Updated property details for “Marina Heights Apartment” – Sep 22, 2025</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
