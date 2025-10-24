// "use client";
// import { useState } from "react";
// import {
//   User,
//   Edit,
//   Home,
//   Plus,
//   Trash,
//   DollarSign,
//   Building,
//   Lock,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import Button from "../components/ui/button";

// export default function VendorProfile() {
//   const [editing, setEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "Jane Doe",
//     email: "jane.doe@email.com",
//     phone: "+971 55 123 4567",
//     nationality: "Indian",
//     address: "Downtown Dubai",
//     role: "Property Vendor",
//   });

//   const [properties, setProperties] = useState([
//     {
//       id: 1,
//       title: "Luxury 3BHK Apartment - Downtown",
//       type: "Residential",
//       price: "AED 3,200,000",
//       img: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1080&q=80",
//     },
//     {
//       id: 2,
//       title: "Office Space Marina",
//       type: "Commercial",
//       price: "AED 10,000/month",
//       img: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&w=1080&q=80",
//     },
//   ]);

//   const [newProperty, setNewProperty] = useState({
//     title: "",
//     type: "",
//     price: "",
//     img: "",
//   });

//   const handleChange = (field, value) =>
//     setProfile((prev) => ({ ...prev, [field]: value }));

//   const handleSaveProfile = () => {
//     setEditing(false);
//     alert("Profile updated successfully!");
//   };

//   const handleAddProperty = () => {
//     if (!newProperty.title || !newProperty.type || !newProperty.price || !newProperty.img) {
//       alert("Please fill all fields!");
//       return;
//     }
//     setProperties((prev) => [
//       ...prev,
//       { id: Date.now(), ...newProperty },
//     ]);
//     setNewProperty({ title: "", type: "", price: "", img: "" });
//   };

//   const handleDeleteProperty = (id) => {
//     setProperties((prev) => prev.filter((p) => p.id !== id));
//   };

//   return (
//     <div className="min-h-screen max-w-7xl mx-auto px-6 py-10 space-y-10">
//       {/* Profile Card */}
//       <Card className="rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
//         <CardContent className="p-10 flex flex-col items-center text-center">
//           <div className="relative">
//             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md">
//               <img src="/user-pic.jpg" alt="Vendor" />
//             </div>
//             <button
//               className="absolute bottom-2 right-2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg"
//               onClick={() => setEditing(!editing)}
//             >
//               <Edit size={16} />
//             </button>
//           </div>
//           <h2 className="text-2xl font-semibold mt-5">{profile.name}</h2>
//           <p className="text-sm text-gray-500">{profile.role}</p>
//           <div className="mt-6 space-y-2 text-sm text-gray-600">
//             <p className="flex items-center justify-center gap-2">
//               <User size={16} className="text-emerald-600" /> {profile.email}
//             </p>
//             <p className="flex items-center justify-center gap-2">
//               <User size={16} className="text-emerald-600" /> {profile.phone}
//             </p>
//             <p className="flex items-center justify-center gap-2">
//               <User size={16} className="text-emerald-600" /> {profile.address}
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Profile Settings */}
//       <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
//         <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
//           <CardTitle className="flex items-center text-emerald-800 text-xl">
//             <User className="w-5 h-5 mr-2 text-emerald-600" /> Personal
//             Information
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {Object.entries(profile).map(([key, value]) =>
//               key !== "role" ? (
//                 <div key={key}>
//                   <label className="text-sm font-medium text-gray-700 capitalize">
//                     {key}
//                   </label>
//                   <Input
//                     type="text"
//                     value={value}
//                     disabled={!editing}
//                     onChange={(e) => handleChange(key, e.target.value)}
//                     className={`mt-1 ${
//                       editing ? "bg-white border-gray-300" : "bg-gray-100"
//                     }`}
//                   />
//                 </div>
//               ) : null
//             )}
//           </div>
//           {editing && (
//             <Button
//               onClick={handleSaveProfile}
//               className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white w-full py-3 text-lg font-medium rounded-xl transition-transform hover:scale-[1.02]"
//             >
//               Save Changes
//             </Button>
//           )}
//         </CardContent>
//       </Card>

//       {/* Property Management */}
//       <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
//         <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
//           <CardTitle className="flex items-center text-emerald-800 text-xl">
//             <Building className="w-5 h-5 mr-2 text-emerald-600" /> Manage
//             Properties
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-8 space-y-6">
//           {/* Add Property Form */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//             <Input
//               placeholder="Title"
//               value={newProperty.title}
//               onChange={(e) =>
//                 setNewProperty((prev) => ({ ...prev, title: e.target.value }))
//               }
//             />
//             <Input
//               placeholder="Type (Residential/Commercial)"
//               value={newProperty.type}
//               onChange={(e) =>
//                 setNewProperty((prev) => ({ ...prev, type: e.target.value }))
//               }
//             />
//             <Input
//               placeholder="Price"
//               value={newProperty.price}
//               onChange={(e) =>
//                 setNewProperty((prev) => ({ ...prev, price: e.target.value }))
//               }
//             />
//             <Input
//               placeholder="Image URL"
//               value={newProperty.img}
//               onChange={(e) =>
//                 setNewProperty((prev) => ({ ...prev, img: e.target.value }))
//               }
//             />
//             <Button
//               className="bg-emerald-600 hover:bg-emerald-700 text-white col-span-1 md:col-span-1"
//               onClick={handleAddProperty}
//             >
//               <Plus size={16} className="inline mr-2" /> Add Property
//             </Button>
//           </div>

//           {/* Property List */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {properties.map((property) => (
//               <div
//                 key={property.id}
//                 className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white"
//               >
//                 <img
//                   src={property.img}
//                   alt={property.title}
//                   className="w-full h-54 object-cover"
//                 />
//                 <div className="p-5">
//                   <h3 className="font-semibold text-gray-800 text-base mb-1">
//                     {property.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-1">{property.type}</p>
//                   <p className="text-emerald-700 font-medium mb-3">
//                     {property.price}
//                   </p>
//                   <Button
//                     variant="destructive"
//                     className="w-full flex items-center justify-center gap-2 rounded-lg"
//                     onClick={() => handleDeleteProperty(property.id)}
//                   >
//                     <Trash size={16} /> Delete
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Account Settings */}
//       <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
//         <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
//           <CardTitle className="flex items-center text-emerald-800 text-xl">
//             <Lock className="w-5 h-5 mr-2 text-emerald-600" /> Account
//             Settings
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6 flex flex-col md:flex-row gap-4">
//           <Button
//             variant="outline"
//             className="flex-1 border-emerald-500 text-emerald-700 hover:bg-emerald-50 rounded-lg"
//           >
//             Change Password
//           </Button>
//           <Button
//             variant="destructive"
//             className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
//           >
//             Deactivate Account
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import {
  User,
  Edit,
  Home,
  Plus,
  Trash,
  Pencil,
  Building,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import Button from "../components/ui/button";
import Select from "../components/ui/select"; // optional if using custom Select

export default function VendorProfile() {
  const [editingProfile, setEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "+971 55 123 4567",
    nationality: "Indian",
    address: "Downtown Dubai",
    role: "Property Vendor",
  });

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury 3BHK Apartment - Downtown",
      type: "Residential",
      category: "Sale",
      price: "AED 3,200,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 sqft",
      description: "Luxurious apartment in Downtown Dubai with sea view.",
      img: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1080&q=80",
    },
  ]);

  const [newProperty, setNewProperty] = useState({
    title: "",
    type: "",
    category: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    img: "",
  });

  const [editingPropertyId, setEditingPropertyId] = useState(null);

  const handleProfileChange = (field, value) =>
    setProfile((prev) => ({ ...prev, [field]: value }));

  const handleSaveProfile = () => {
    setEditingProfile(false);
    alert("Profile updated successfully!");
  };

  const handleAddOrUpdateProperty = () => {
    // Validation
    if (
      !newProperty.title ||
      !newProperty.type ||
      !newProperty.category ||
      !newProperty.price
    ) {
      alert("Please fill required fields!");
      return;
    }

    if (editingPropertyId) {
      // Update property
      setProperties((prev) =>
        prev.map((p) =>
          p.id === editingPropertyId ? { ...p, ...newProperty } : p
        )
      );
      setEditingPropertyId(null);
    } else {
      // Add new property
      setProperties((prev) => [
        ...prev,
        { id: Date.now(), ...newProperty },
      ]);
    }

    setNewProperty({
      title: "",
      type: "",
      category: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      description: "",
      img: "",
    });
  };

  const handleEditProperty = (property) => {
    setNewProperty({ ...property });
    setEditingPropertyId(property.id);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional: scroll to form
  };

  const handleDeleteProperty = (id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-10 space-y-10">
      {/* Profile Card */}
      <Card className="rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
        <CardContent className="p-10 flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md">
              <img src="/user-pic.jpg" alt="Vendor" />
            </div>
            <button
              className="absolute bottom-2 right-2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg"
              onClick={() => setEditingProfile(!editingProfile)}
            >
              <Edit size={16} />
            </button>
          </div>
          <h2 className="text-2xl font-semibold mt-5">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.role}</p>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p className="flex items-center justify-center gap-2">
              <User size={16} className="text-emerald-600" /> {profile.email}
            </p>
            <p className="flex items-center justify-center gap-2">
              <User size={16} className="text-emerald-600" /> {profile.phone}
            </p>
            <p className="flex items-center justify-center gap-2">
              <User size={16} className="text-emerald-600" /> {profile.address}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Profile Settings */}
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
                    disabled={!editingProfile}
                    onChange={(e) => handleProfileChange(key, e.target.value)}
                    className={`mt-1 ${
                      editingProfile ? "bg-white border-gray-300" : "bg-gray-100"
                    }`}
                  />
                </div>
              ) : null
            )}
          </div>
          {editingProfile && (
            <Button
              onClick={handleSaveProfile}
              className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white w-full py-3 text-lg font-medium rounded-xl transition-transform hover:scale-[1.02]"
            >
              Save Changes
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Property Form */}
      <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
        <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
          <CardTitle className="flex items-center text-emerald-800 text-xl">
            <Building className="w-5 h-5 mr-2 text-emerald-600" />{" "}
            {editingPropertyId ? "Edit Property" : "Add New Property"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Title"
            value={newProperty.title}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <Input
            placeholder="Type (Residential/Commercial)"
            value={newProperty.type}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, type: e.target.value }))
            }
          />
          <Input
            placeholder="Category (Sale/Rent)"
            value={newProperty.category}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, category: e.target.value }))
            }
          />
          <Input
            placeholder="Price"
            value={newProperty.price}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <Input
            placeholder="Bedrooms"
            value={newProperty.bedrooms}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, bedrooms: e.target.value }))
            }
          />
          <Input
            placeholder="Bathrooms"
            value={newProperty.bathrooms}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, bathrooms: e.target.value }))
            }
          />
          <Input
            placeholder="Area (sqft)"
            value={newProperty.area}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, area: e.target.value }))
            }
          />
          <Input
            placeholder="Image URL"
            value={newProperty.img}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, img: e.target.value }))
            }
          />
          <Textarea
            placeholder="Description"
            value={newProperty.description}
            onChange={(e) =>
              setNewProperty((prev) => ({ ...prev, description: e.target.value }))
            }
            className="md:col-span-2"
          />
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white col-span-1 md:col-span-2"
            onClick={handleAddOrUpdateProperty}
          >
            {editingPropertyId ? <Pencil size={16} className="inline mr-2" /> : <Plus size={16} className="inline mr-2" />}
            {editingPropertyId ? "Update Property" : "Add Property"}
          </Button>
        </CardContent>
      </Card>

      {/* Property List */}
      <Card className="rounded-2xl shadow-md border-0 bg-white hover:shadow-lg transition">
        <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-white rounded-t-2xl">
          <CardTitle className="flex items-center text-emerald-800 text-xl">
            <Building className="w-5 h-5 mr-2 text-emerald-600" /> Your Properties
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
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
                <p className="text-sm text-gray-500 mb-1">
                  {property.type} - {property.category}
                </p>
                <p className="text-emerald-700 font-medium mb-1">
                  {property.price}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {property.bedrooms} Beds | {property.bathrooms} Baths | {property.area}
                </p>
                <p className="text-gray-600 mb-3">{property.description}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-emerald-500 text-emerald-700"
                    onClick={() => handleEditProperty(property)}
                  >
                    <Pencil size={16} /> Edit
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => handleDeleteProperty(property.id)}
                  >
                    <Trash size={16} /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
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
  );
}
