// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       agent profile
//     </div>
//   )
// }

// export default page


"use client"

import { useState } from 'react';
import { Phone, Mail, MapPin, Star, MessageCircle } from 'lucide-react';
import  Button  from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar } from '../components/ui/avatar'; // <-- Replace Radix Avatar with a simple one
import  Badge  from '../components/ui/badge';
import { PropertyCard } from '../components/PropertyCard';

export default function AgentProfile({ onPageChange }) {
  const [activeTab, setActiveTab] = useState('active');

  const agent = {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Consultant',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    experience: '8 years',
    properties: 45,
    rating: 4.9,
    reviews: 127,
    phone: '+971 50 123 4567',
    email: 'sarah@propertyhub.com',
    location: 'Dubai, UAE',
    languages: ['English', 'Arabic', 'French'],
    specialization: ['Luxury Villas', 'Apartments', 'Investment Properties'],
    bio: 'Sarah is a dedicated real estate professional with over 8 years of experience in the Dubai property market. She specializes in luxury properties and has helped hundreds of clients find their dream homes. Her deep knowledge of the market and commitment to excellence has earned her numerous awards and a reputation as one of the top agents in the region.',
    achievements: [
      'Top Agent 2023',
      'Customer Service Excellence Award',
      'Platinum Sales Achievement',
      'Real Estate Professional Certification',
    ],
  };

  const activeListings = [
    {
      id: '1',
      title: 'Luxury Modern Villa with Pool',
      price: 'AED 2,500,000',
      location: 'Palm Jumeirah, Dubai',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1080',
      tag: 'For Sale',
    },
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
        'https://images.unsplash.com/photo-1687180498602-5a1046defaa4?w=1080',
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
        'https://images.unsplash.com/photo-1757439402101-55d1da381e70?w=1080',
      tag: 'For Sale',
    },
    {
      id: '4',
      title: 'Premium Villa with Ocean View',
      price: 'AED 4,200,000',
      location: 'Jumeirah Beach Residence',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,500 sq ft',
      image:
        'https://images.unsplash.com/photo-1757439402101-55d1da381e70?w=1080',
      tag: 'For Sale',
    },
  ];

  const reviews = [
    {
      id: '1',
      name: 'Ahmed Al-Mansouri',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Sarah helped me find the perfect investment property. Her market knowledge is exceptional and she guided me through every step of the process. Highly recommended!',
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      date: '1 month ago',
      comment:
        'Excellent service from start to finish. Sarah was professional, responsive, and found us our dream home within our budget. Thank you!',
    },
    {
      id: '3',
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      date: '2 months ago',
      comment:
        'Working with Sarah was a pleasure. She understood our needs perfectly and showed us properties that matched exactly what we were looking for.',
    },
  ];

  const handleViewDetails = (propertyId) => {
    onPageChange('property-detail', propertyId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Agent Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <Avatar src={agent.avatar} alt={agent.name} className="w-32 h-32" />

              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {agent.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">{agent.title}</p>

                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{agent.rating}</span>
                        <span className="text-gray-600 ml-1">
                          ({agent.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-gray-600">
                        {agent.experience} experience
                      </div>
                      <div className="text-gray-600">
                        {agent.properties} properties
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {agent.location}
                      </div>
                      <div className="flex space-x-2">
                        {agent.languages.map((lang) => (
                          <Badge key={lang} variant="green" >
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 lg:ml-6">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Agent
                    </Button>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About {agent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{agent.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Specialization</h4>
                    <ul className="space-y-2">
                      {agent.specialization.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {agent.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Listings */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Listings ({activeListings.length})</CardTitle>
                  <Button
                    variant="outline"
                    onClick={() => onPageChange('listings')}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeListings.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>{agent.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>{agent.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.slice(0, 3).map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{review.name}</h5>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

