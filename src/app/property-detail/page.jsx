// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       dne
//     </div>
//   )
// }

// export default page

"use client"

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Share2,
  Car,
  Waves,
  Dumbbell,
  Shield,
  Wifi,
  AirVent,
} from 'lucide-react';
import  Button  from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import  Badge  from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { PropertyCard } from '../components/PropertyCard';
import Image from 'next/image';
// import { ImageWithFallback } from './figma/ImageWithFallback';

export default function PropertyDetail({ propertyId, onPageChange }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock property data
  const property = {
    id: propertyId || '1',
    title: 'Luxury Modern Villa with Pool',
    price: 'AED 2,500,000',
    location: 'Palm Jumeirah, Dubai',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sq ft',
    tag: 'For Sale',
    description:
      'This stunning modern villa offers the perfect blend of luxury and comfort. Located in the prestigious Palm Jumeirah, this property features contemporary design with high-end finishes throughout. The open-plan living areas seamlessly flow to the outdoor spaces, creating an ideal environment for both relaxation and entertainment.',
    features: [
      'Private swimming pool',
      'Modern kitchen with premium appliances',
      'Master bedroom with walk-in closet',
      'Landscaped garden',
      'Private parking for 2 cars',
      'Security system',
      'Central air conditioning',
      'High-speed internet ready',
    ],
    amenities: [
      { icon: Car, label: 'Parking' },
      { icon: Waves, label: 'Swimming Pool' },
      { icon: Dumbbell, label: 'Gym' },
      { icon: Shield, label: 'Security' },
      { icon: Wifi, label: 'WiFi' },
      { icon: AirVent, label: 'AC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1658280911730-467b4764c09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    agent: {
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
      phone: '+971 50 123 4567',
      email: 'sarah@propertyhub.com',
      experience: '8 years experience',
      properties: 45,
    },
  };

  const similarProperties = [
    {
      id: '2',
      title: 'Contemporary Apartment Downtown',
      price: 'AED 85,000/year',
      location: 'Downtown Dubai',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tag: 'For Rent',
    },
    {
      id: '3',
      title: 'Premium Villa with Ocean View',
      price: 'AED 4,200,000',
      location: 'Jumeirah Beach Residence',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,500 sq ft',
      image:
        'https://images.unsplash.com/photo-1757439402101-55d1da381e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tag: 'For Sale',
    },
    {
      id: '4',
      title: 'Modern City Apartment Complex',
      price: 'AED 120,000/year',
      location: 'Business Bay, Dubai',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      image:
        'https://images.unsplash.com/photo-1664190053321-4ef213299eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tag: 'For Rent',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const handleViewDetails = (id) => {
    onPageChange('property-detail', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onPageChange('listings')}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Listings
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-green-600' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      height={100}
                      width={100}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <Card>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {property.title}
                      </h1>
                      <Badge
                        variant={
                          property.tag === 'For Sale' ? 'default' : 'secondary'
                        }
                      >
                        {property.tag}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      {property.location}
                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8153915792523!2d75.7841840740928!3d26.877605761600844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43681cc7f07%3A0x72002af09d6a6155!2sStreet%20View%20Jaipur!5e0!3m2!1sen!2sin!4v1759464838070!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      {property.price}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFavorited(!isFavorited)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFavorited ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold">
                      {property.bedrooms} Bedrooms
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold">
                      {property.bathrooms} Bathrooms
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold">{property.area}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Features & Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {property.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <amenity.icon className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">{property.location}</p>
                  </div>
                </div> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8153915792523!2d75.7841840740928!3d26.877605761600844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43681cc7f07%3A0x72002af09d6a6155!2sStreet%20View%20Jaipur!5e0!3m2!1sen!2sin!4v1759464838070!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={property.agent.avatar}
                      alt={property.agent.name}
                    />
                    <AvatarFallback>
                      {property.agent.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {property.agent.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {property.agent.experience}
                    </p>
                    <p className="text-sm text-gray-600">
                      {property.agent.properties} properties listed
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Viewing */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Viewing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Book a private viewing at your convenience
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Schedule Viewing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
