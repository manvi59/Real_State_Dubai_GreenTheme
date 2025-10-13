"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Home, Shield, Award, Users, MapPin, TrendingUp, Calculator, Clock, Phone, Mail } from 'lucide-react';
import  Button  from './ui/button';
import { PropertyCard } from './PropertyCard';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { SearchBar } from './SearchBar';
import Image from 'next/image';
import CitiesWidget from './TopCities';

export function HomePage({ onPageChange }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredProperties = [
    {
      id: '1',
      title: 'Luxury Modern Villa with Pool',
      price: 'AED 2,500,000',
      location: 'Palm Jumeirah, Dubai',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzU5MTEzODk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'For Sale',
      featured: true
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
      image: 'https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MDQwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'For Rent'
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
      image: 'https://images.unsplash.com/photo-1757439402101-55d1da381e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHBvb2wlMjB2aWV3fGVufDF8fHx8MTc1OTEyMzQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'For Sale'
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
      image: 'https://images.unsplash.com/photo-1664190053321-4ef213299eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NTkxMjM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'For Rent'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Buyer',
      content: 'PropertyHub made finding our dream home effortless. The team was professional, responsive, and helped us navigate the entire process smoothly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150'
    },
    {
      id: 2,
      name: 'Ahmed Al-Mansouri',
      role: 'Real Estate Investor',
      content: 'Excellent service and market knowledge. They helped me find profitable investment properties with great potential. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'First-time Renter',
      content: 'As a newcomer to Dubai, PropertyHub guided me through the rental process. They found me a perfect apartment within my budget and timeline.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150'
    }
  ];

  const quickLocations = ['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay', 'JBR', 'DIFC'];

  const statistics = [
    { label: 'Happy Clients', value: '10,000+', icon: Users },
    { label: 'Properties Sold', value: '5,500+', icon: Home },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Expert Agents', value: '50+', icon: Shield }
  ];

  const services = [
    {
      title: 'Property Buying',
      description: 'Expert guidance through every step of your property purchase journey',
      icon: Home,
      features: ['Market Analysis', 'Property Inspection', 'Negotiation Support', 'Legal Assistance']
    },
    {
      title: 'Property Rental',
      description: 'Find the perfect rental property that suits your lifestyle and budget',
      icon: MapPin,
      features: ['Tenant Screening', 'Rental Management', 'Maintenance Support', 'Contract Assistance']
    },
    {
      title: 'Investment Advisory',
      description: 'Strategic investment advice to maximize your real estate portfolio returns',
      icon: TrendingUp,
      features: ['ROI Analysis', 'Market Trends', 'Portfolio Management', 'Exit Strategies']
    },
    {
      title: 'Property Valuation',
      description: 'Accurate property valuations for informed real estate decisions',
      icon: Calculator,
      features: ['Market Comparison', 'Professional Assessment', 'Detailed Reports', 'Expert Analysis']
    }
  ];

  const neighborhoods = [
    {
      name: 'Dubai Marina',
      description: 'Waterfront living with stunning views and modern amenities',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmluYSUyMHNreWxpbmV8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=400',
      avgPrice: 'AED 1.2M',
      properties: '450+'
    },
    {
      name: 'Downtown Dubai',
      description: 'The heart of the city with iconic landmarks and luxury shopping',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGR1YmFpJTIwYnVyaiUyMGtoYWxpZmF8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=400',
      avgPrice: 'AED 1.8M',
      properties: '320+'
    },
    {
      name: 'Palm Jumeirah',
      description: 'Exclusive island living with private beaches and luxury resorts',
      image: 'https://images.unsplash.com/photo-1580738315017-ba3bf13e31a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwanVtZWlyYWglMjBkdWJhaSUyMGFlcmlhbHxlbnwxfHx8fDE3NTkxMjM0MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      avgPrice: 'AED 3.5M',
      properties: '180+'
    }
  ];

  const blogPosts = [
    {
      title: 'Dubai Real Estate Market Trends 2024',
      excerpt: 'An in-depth analysis of the current market trends and future projections for Dubai real estate.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwY2hhcnQlMjBhbmFseXNpc3xlbnwxfHx8fDE3NTkxMjM0MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'First-Time Buyer\'s Guide to Dubai',
      excerpt: 'Everything you need to know about buying your first property in Dubai, from financing to legal requirements.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwa2V5cyUyMGhhbmRzfGVufDF8fHx8MTc1OTEyMzQyNnww&ixlib=rb-4.1.0&q=80&w=400',
      date: 'March 10, 2024',
      readTime: '8 min read'
    },
    {
      title: 'Investment Opportunities in Emerging Areas',
      excerpt: 'Discover the up-and-coming neighborhoods that offer excellent investment potential.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwZGV2ZWxvcG1lbnQlMjBza3lsaW5lfGVufDF8fHx8MTc1OTEyMzQyNnww&ixlib=rb-4.1.0&q=80&w=400',
      date: 'March 5, 2024',
      readTime: '6 min read'
    }
  ];

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  const prevTestimonial = () => {
  setCurrentTestimonial((prev) => {
    const newIndex = prev - 2;
    return newIndex < 0 ? (testimonials.length % 2 === 0 ? testimonials.length - 2 : testimonials.length - (testimonials.length % 2)) : newIndex;
  });
};

const nextTestimonial = () => {
  setCurrentTestimonial((prev) => {
    const newIndex = prev + 2;
    return newIndex >= testimonials.length
      ? 0
      : newIndex;
  });
};

  const handleSearch = (filters) => {
    console.log('Search filters:', filters);
    console.log("jjjjjjjjjjjjjj", filters)
    // onPageChange('listings');
  };

  const handleViewDetails = (propertyId) => {
    onPageChange('property-detail', propertyId);
  };

  return (
     <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556139943-4bdca53adf1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full opacity-25 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full opacity-25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in slide-in-from-bottom-10 duration-1000">
            Find Your Next <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-10 duration-1000" style={{ animationDelay: '200ms' }}>
            Discover the perfect property from our extensive collection of luxury homes, modern apartments, and commercial spaces across Dubai.
          </p>
          
          {/* Advanced Search Bar with Animation */}
          <div className="animate-in slide-in-from-bottom-10 duration-1000" style={{ animationDelay: '400ms' }}>
            <SearchBar onSearch={handleSearch} className="max-w-6xl mx-auto transform hover:scale-[1.02] transition-transform duration-300" />
          </div>

          {/* Quick Location Tags */}
          <div className="flex flex-wrap justify-center align-items-center gap-3 mt-8 animate-in slide-in-from-bottom-10 duration-1000" style={{ animationDelay: '600ms' }}>
            <span className="text-sm text-gray-300 mr-2 flex items-center">Popular locations:</span>
            {quickLocations.map((location, index) => (
              <button
                key={location}
                onClick={() => {
                  handleSearch({
                    type: 'buy',
                    location,
                    propertyType: '',
                    bedrooms: '',
                    bathrooms: '',
                    priceMin: '',
                    priceMax: '',
                    areaMin: '',
                    areaMax: '',
                    furnishing: '',
                    amenities: []
                  });
                }}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 hover:shadow-lg
                z-[-100]"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section>
        <CitiesWidget/>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to meet all your property needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties that offer exceptional value and location.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onPageChange('listings')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Dubai's most sought-after areas and find your perfect neighborhood
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-10">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-48 object-cover"
                    width={100}
                    height={48}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{neighborhood.name}</h3>
                  <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Avg. Price</div>
                      <div className="font-semibold text-gray-900">{neighborhood.avgPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Properties</div>
                      <div className="font-semibold text-gray-900">{neighborhood.properties}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PropertyHub?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in Dubai's real estate market, we're committed to providing exceptional service and results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted & Secure</h3>
                    <p className="text-gray-600">Licensed real estate agency with full regulatory compliance and transparent processes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Award-Winning Service</h3>
                    <p className="text-gray-600">Recognized for excellence in customer service and market expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock assistance for all your real estate needs and inquiries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Real estate professionals"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={100}
                height={96}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                  width={12}
                  height={12}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div> */}
       <div className="relative max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[testimonials[currentTestimonial], testimonials[(currentTestimonial + 1) % testimonials.length]]
      .filter(Boolean)
      .map((testimonial, index) => (
        <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-700 mb-6 italic">
            "{testimonial.content}"
          </p>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
  </div>

  {/* Navigation buttons */}
  <button
    onClick={prevTestimonial}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>
  <button
    onClick={nextTestimonial}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
</div>


        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and news from Dubai's real estate market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  width={100}
                  height={48}
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need Expert Advice?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experienced team is here to help you make informed decisions about your real estate journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">info@propertyhub.ae</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Downtown Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get a Free Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to List Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of property owners who trust PropertyHub to market their properties effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary"
              // onClick={() => onPageChange('list-property')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <span  className='text-blue-600 hover:bg-gray-100'>

              List Your Property
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              // onClick={() => onPageChange('contact')}
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
