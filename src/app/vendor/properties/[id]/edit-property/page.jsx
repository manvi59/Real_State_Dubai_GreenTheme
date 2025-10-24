"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlusCircle,
  Trash2,
  ImagePlus,
  CheckCircle,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../../../components/ui/card";
import  Button  from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

export default function AddPropertyPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "Apartment",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    features: [""],
    amenities: [""],
    images: [""],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (key, index, value) => {
    const updated = [...formData[key]];
    updated[index] = value;
    setFormData({ ...formData, [key]: updated });
  };

  const handleAddField = (key) => {
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const handleRemoveField = (key, index) => {
    const updated = formData[key].filter((_, i) => i !== index);
    setFormData({ ...formData, [key]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Added:", formData);
    alert("Property added successfully!");
    router.push("/vendor/properties");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Edit Property
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Title</label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="Luxury Villa in Dubai"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Location</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="Palm Jumeirah, Dubai"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Price</label>
                  <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="AED 2,500,000"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  >
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Townhouse</option>
                    <option>Studio</option>
                  </select>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Bedrooms</label>
                  <input
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Bathrooms</label>
                  <input
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Area</label>
                  <input
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    placeholder="3200 sq ft"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block mb-2 font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border rounded-md p-2"
                ></textarea>
              </div>

              {/* Features */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium">Features</label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleAddField("features")}
                  >
                    <PlusCircle className="w-4 h-4 mr-1" /> Add Feature
                  </Button>
                </div>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      value={feature}
                      onChange={(e) =>
                        handleArrayChange("features", index, e.target.value)
                      }
                      className="w-full border rounded-md p-2"
                      placeholder="e.g. Private Pool"
                    />
                    <Trash2
                      onClick={() => handleRemoveField("features", index)}
                      className="cursor-pointer text-red-500"
                    />
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium">Amenities</label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleAddField("amenities")}
                  >
                    <PlusCircle className="w-4 h-4 mr-1" /> Add Amenity
                  </Button>
                </div>
                {formData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      value={amenity}
                      onChange={(e) =>
                        handleArrayChange("amenities", index, e.target.value)
                      }
                      className="w-full border rounded-md p-2"
                      placeholder="e.g. Gym, Parking"
                    />
                    <Trash2
                      onClick={() => handleRemoveField("amenities", index)}
                      className="cursor-pointer text-red-500"
                    />
                  </div>
                ))}
              </div>

              {/* Image Uploads */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium">Property Images</label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleAddField("images")}
                  >
                    <ImagePlus className="w-4 h-4 mr-1" /> Add Image URL
                  </Button>
                </div>
                {formData.images.map((url, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      value={url}
                      onChange={(e) =>
                        handleArrayChange("images", index, e.target.value)
                      }
                      className="w-full border rounded-md p-2"
                      placeholder="https://example.com/image.jpg"
                    />
                    <Trash2
                      onClick={() => handleRemoveField("images", index)}
                      className="cursor-pointer text-red-500"
                    />
                  </div>
                ))}
              </div>

              <Button
                type="submit"
                className="bg-[#ea2d04] text-white hover:bg-[#c52603]"
              >
                <CheckCircle className="w-4 h-4 mr-2" /> Update Property
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
