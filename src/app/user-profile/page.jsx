
// "use client";
// import { useState } from "react";
// import { User, Edit, Mail, Phone, MapPin, Home, Heart, Bell, Lock } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import Button from "../components/ui/button";

// export default function UserProfile() {
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john.doe@email.com",
//     phone: "+971 50 987 6543",
//     nationality: "Indian",
//     address: "Palm Jumeirah, Dubai",
//     role: "Property Buyer",
//   });

//   const [editing, setEditing] = useState(false);

//   const handleChange = (field, value) => {
//     setProfile((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSave = () => {
//     setEditing(false);
//     alert("Profile updated successfully!");
//   };

//   const savedProperties = [
//     {
//       id: 1,
//       title: "Luxury 2BHK Apartment - Downtown Dubai",
//       image: "/property1.jpg",
//       price: "AED 2,100,000",
//     },
//     {
//       id: 2,
//       title: "Marina Waterfront Villa",
//       image: "/property2.jpg",
//       price: "AED 5,400,000",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       {/* Header Section */}
//       <div className="relative w-full h-[350px] mb-12">
//         <img
//           src="/profile-bg.jpg"
//           alt="User Profile"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-4xl font-bold mb-2">My Profile</h1>
//           <p className="text-lg opacity-90">Manage your information and property preferences</p>
//         </div>
//       </div>

//       {/* Profile Overview */}
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Profile Card */}
//         <Card className="shadow-md border border-gray-100">
//           <CardContent className="p-8 flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden mb-4">
//               <img src="/user-avatar.jpg" alt="User" className="w-full h-full object-cover" />
//             </div>
//             <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
//             <p className="text-sm text-gray-500">{profile.role}</p>
//             <div className="mt-4 space-y-2 text-gray-600 text-sm">
//               <p className="flex items-center justify-center gap-2">
//                 <Mail size={16} className="text-green-600" /> {profile.email}
//               </p>
//               <p className="flex items-center justify-center gap-2">
//                 <Phone size={16} className="text-green-600" /> {profile.phone}
//               </p>
//               <p className="flex items-center justify-center gap-2">
//                 <MapPin size={16} className="text-green-600" /> {profile.address}
//               </p>
//             </div>
//             <Button
//               onClick={() => setEditing(!editing)}
//               className="mt-6 bg-green-600 hover:bg-green-700 text-white"
//             >
//               {editing ? "Cancel" : "Edit Profile"}
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Right: Profile Details & Saved Properties */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Personal Information */}
//           <Card className="shadow-md border border-gray-100">
//             <CardHeader className="bg-gray-50 border-b">
//               <CardTitle className="flex items-center text-gray-800 text-xl">
//                 <User className="w-5 h-5 mr-2 text-green-600" /> Personal Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Object.entries(profile).map(([key, value]) =>
//                   key !== "role" ? (
//                     <div key={key}>
//                       <label className="text-sm font-medium text-gray-700 capitalize">
//                         {key}
//                       </label>
//                       <Input
//                         type="text"
//                         value={value}
//                         disabled={!editing}
//                         onChange={(e) => handleChange(key, e.target.value)}
//                         className={`${editing ? "bg-white" : "bg-gray-100"}`}
//                       />
//                     </div>
//                   ) : null
//                 )}
//               </div>
//               {editing && (
//                 <Button
//                   onClick={handleSave}
//                   className="mt-6 bg-green-600 hover:bg-green-700 text-white"
//                 >
//                   Save Changes
//                 </Button>
//               )}
//             </CardContent>
//           </Card>

//           {/* Saved Properties */}
//           <Card className="shadow-md border border-gray-100">
//             <CardHeader className="bg-gray-50 border-b">
//               <CardTitle className="flex items-center text-gray-800 text-xl">
//                 <Heart className="w-5 h-5 mr-2 text-green-600" /> Saved Properties
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {savedProperties.map((property) => (
//                 <div
//                   key={property.id}
//                   className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//                 >
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-semibold text-gray-900 text-sm">
//                       {property.title}
//                     </h3>
//                     <p className="text-green-700 font-medium mt-1">{property.price}</p>
//                     <Button
//                       variant="outline"
//                       className="w-full mt-3 border-green-500 text-green-600 hover:bg-green-50"
//                     >
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Notifications */}
//           <Card className="shadow-md border border-gray-100">
//             <CardHeader className="bg-gray-50 border-b">
//               <CardTitle className="flex items-center text-gray-800 text-xl">
//                 <Bell className="w-5 h-5 mr-2 text-green-600" /> Notifications
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6 space-y-3 text-gray-700">
//               <p>✅ Your property viewing request has been confirmed for Oct 20, 2025.</p>
//               <p>🏠 New listing added near your saved search area: “Downtown Boulevard”.</p>
//               <p>💬 Agent Sarah replied to your inquiry on Marina Villa.</p>
//             </CardContent>
//           </Card>

//           {/* Account Settings */}
//           <Card className="shadow-md border border-gray-100">
//             <CardHeader className="bg-gray-50 border-b">
//               <CardTitle className="flex items-center text-gray-800 text-xl">
//                 <Lock className="w-5 h-5 mr-2 text-green-600" /> Account Settings
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <Button variant="outline" className="w-full mb-3 border-green-500 text-green-600">
//                 Change Password
//               </Button>
//               <Button
//                 variant="destructive"
//                 className="w-full bg-red-600 hover:bg-red-700 text-white"
//               >
//                 Deactivate Account
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import {
  User,
  Edit,
  Mail,
  Phone,
  MapPin,
  Heart,
  Bell,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import Button from "../components/ui/button";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+971 50 987 6543",
    nationality: "Indian",
    address: "Palm Jumeirah, Dubai",
    role: "Property Buyer",
  });

  const handleChange = (field, value) =>
    setProfile((prev) => ({ ...prev, [field]: value }));

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const savedProperties = [
    {
      id: 1,
      title: "Luxury 2BHK Apartment - Downtown Dubai",
      image: "/property1.jpg",
      price: "AED 2,100,000",
      img:"https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 2,
      title: "Marina Waterfront Villa",
      image: "/property2.jpg",
      price: "AED 5,400,000",
      img:"https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      {/* <div className="relative w-full h-[380px] mb-16">
        <img
          src="/profile.webp"
          alt="Profile Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/10">
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            My Profile
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-2xl">
            Manage your personal information, saved listings, and account
            settings all in one place.
          </p>
        </div>
      </div> */}

      {/* Content */}
      <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10" style={{marginTop:"3%"}}>
        {/* Profile Card */}
        <Card className="rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
          <CardContent className="p-10 flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md">
                <img
                  src="/user-pic.jpg"
                  alt="User"
                  // className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute bottom-2 right-2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg"
                onClick={() => setEditing(!editing)}
              >
                <Edit size={16} />
              </button>
            </div>

            <h2 className="text-2xl font-semibold mt-5">{profile.name}</h2>
            <p className="text-sm text-gray-500">{profile.role}</p>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-emerald-600" /> {profile.email}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-emerald-600" /> {profile.phone}
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin size={16} className="text-emerald-600" />{" "}
                {profile.address}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-10">
          {/* Personal Information */}
          <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
            <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
              <CardTitle className="flex items-center text-emerald-800 text-xl">
                <User className="w-5 h-5 mr-2 text-emerald-600" /> Personal
                Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(profile).map(([key, value]) =>
                  key !== "role" ? (
                    <div key={key}>
                      <label className="text-sm font-medium text-gray-700 capitalize">
                        {key}
                      </label>
                      <Input
                        type="text"
                        value={value}
                        disabled={!editing}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className={`mt-1 ${
                          editing ? "bg-white border-gray-300" : "bg-gray-100"
                        }`}
                      />
                    </div>
                  ) : null
                )}
              </div>
              {editing && (
                <Button
                  onClick={handleSave}
                  className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white w-full py-3 text-lg font-medium rounded-xl transition-transform hover:scale-[1.02]"
                >
                  Save Changes
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Saved Properties */}
          <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
            <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
              <CardTitle className="flex items-center text-emerald-800 text-xl">
                <Heart className="w-5 h-5 mr-2 text-emerald-600" /> Saved
                Properties
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedProperties.map((property) => (
                <div
                  key={property.id}
                  className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white"
                >
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-54 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-800 text-base mb-1">
                      {property.title}
                    </h3>
                    <p className="text-emerald-700 font-medium mb-3">
                      {property.price}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-50 rounded-lg"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
            <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
              <CardTitle className="flex items-center text-emerald-800 text-xl">
                <Bell className="w-5 h-5 mr-2 text-emerald-600" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3 text-gray-700">
              <p>✅ Your property viewing request has been confirmed for Oct 20, 2025.</p>
              <p>🏠 New listing available in your saved area: “Downtown Boulevard”.</p>
              <p>💬 Agent Sarah replied to your inquiry on Marina Villa.</p>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
            <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
              <CardTitle className="flex items-center text-emerald-800 text-xl">
                <Lock className="w-5 h-5 mr-2 text-emerald-600" /> Account
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex flex-col md:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1 border-emerald-500 text-emerald-700 hover:bg-emerald-50 rounded-lg"
              >
                Change Password
              </Button>
              <Button
                variant="destructive"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Deactivate Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-10"></div>
    </div>
  );
}

