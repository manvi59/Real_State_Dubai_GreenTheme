 
// "use client";
// import { useState } from "react";
// import {PropertyCard} from "../components/PropertyCard";

// export default function WishlistPage() {
//   const [wishlist, setWishlist] = useState([
//     {
//       id: 1,
//       title: "Luxury Modern Villa with Pool",
//       location: "Palm Jumeirah, Dubai",
//       price: 2500000,
//       bedrooms: 4,
//       bathrooms: 3,
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     },
//     {
//       id: 2,
//       title: "Downtown Apartment with Burj View",
//       location: "Downtown Dubai",
//       price: 1800000,
//       bedrooms: 2,
//       bathrooms: 2,
//       image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20d",
//     },
//   ]);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   const handleViewDetails = (propertyId) => {
//     // onPageChange('property-detail', propertyId);
//   };
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           My Wishlist
//         </h1>

//         {wishlist.length === 0 ? (
//           <div className="text-center py-20 bg-white rounded-xl shadow">
//             <p className="text-gray-500 text-lg">
//               Your wishlist is empty. Start adding properties you love!
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wishlist.map((property) => (
//             //   <PropertyCard
//             //     key={property.id}
//             //     property={property}
//             //     onRemove={removeFromWishlist}
//             //   />

//             <PropertyCard
//                 key={property.id}
//                 property={property}
//                 onViewDetails={handleViewDetails}
//                           />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { PropertyCard } from "../components/PropertyCard";
import  Button  from '../components/ui/button';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Luxury Modern Villa with Pool",
      location: "Palm Jumeirah, Dubai",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Downtown Apartment with Burj View",
      location: "Downtown Dubai",
      price: 1800000,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20d",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleViewDetails = (propertyId) => {
    console.log("View details of:", propertyId);
    // You can navigate to property details page later
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">
              Your wishlist is empty. Start adding properties you love!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
                // onRemove={removeFromWishlist}
                removeWishlist={true}
              />
            ))}
                      
          </div>
        )}
      </div>
    </div>
  );
}
