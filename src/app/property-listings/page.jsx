 
"use client"

import { useState } from 'react';
import { Grid, List, SlidersHorizontal, Search } from 'lucide-react';
import  Button  from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { PropertyCard } from '../components/PropertyCard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

 function page({ onPageChange }) {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [furnished, setFurnished] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: '1',
      title: 'Luxury Modern Villa with Pool',
      price: 'AED 2,500,000',
      location: 'Palm Jumeirah, Dubai',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?...',
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
      image: 'https://images.unsplash.com/photo-1687180498602-5a1046defaa4?...',
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
      image: 'https://images.unsplash.com/photo-1757439402101-55d1da381e70?...',
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
      image: 'https://images.unsplash.com/photo-1664190053321-4ef213299eec?...',
      tag: 'For Rent'
    },
    {
      id: '5',
      title: 'Luxury Penthouse with Skyline Views',
      price: 'AED 3,800,000',
      location: 'Dubai Marina',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 4,
      area: '3,800 sq ft',
      image: 'https://images.unsplash.com/photo-1642976975710-1d8890dbf5ab?...',
      tag: 'For Sale'
    },
    {
      id: '6',
      title: 'Cozy Studio Apartment',
      price: 'AED 55,000/year',
      location: 'JLT, Dubai',
      type: 'Studio',
      bedrooms: 0,
      bathrooms: 1,
      area: '650 sq ft',
      image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?...',
      tag: 'For Rent'
    }
  ];

  const handleViewDetails = (propertyId) => {
    onPageChange('property-detail', propertyId);
    // onPageChange('property-detail');
  };

  const clearFilters = () => {
    setPriceRange([0, 5000000]);
    setBedrooms('');
    setPropertyType('');
    setFurnished(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
            <p className="text-gray-600">Showing {properties.length} properties</p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            
            {/* View Mode Toggle */}
            <div className="flex border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-gray-600'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-gray-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            
            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="area">Largest Area</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Filters</CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Location, property name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range (AED)
                  </label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000000}
                      min={0}
                      step={50000}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{priceRange[0].toLocaleString()}</span>
                      <span>{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium mb-2">Bedrooms</label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Studio</SelectItem>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4">4 Bedrooms</SelectItem>
                      <SelectItem value="5+">5+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Furnished */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="furnished"
                    checked={furnished}
                    onCheckedChange={setFurnished}
                  />
                  <label htmlFor="furnished" className="text-sm font-medium">
                    Furnished Only
                  </label>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Property Grid/List */}
          <div className="lg:col-span-3">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {properties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {property.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{property.location}</p>
                            <div className="text-2xl font-bold text-indigo-600">
                              {property.price}
                            </div>
                          </div>
                          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                            {property.tag}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4 text-sm text-gray-600">
                            <span>{property.bedrooms} beds</span>
                            <span>{property.bathrooms} baths</span>
                            <span>{property.area}</span>
                          </div>
                          <Button 
                          onClick={() => handleViewDetails(property.id)}
                            >
                          {/* <Link href="/property-detail"> */}
                            View Details
                          {/* </Link> */}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default page
