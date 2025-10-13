import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, ChevronUp, SlidersHorizontal, Home, Building, Building2 } from 'lucide-react';
import  Button  from './ui/button';
import { Input } from './ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectLabel,
  SelectScrollUpButton,
  SelectScrollDownButton
} from './ui/select';

import  Badge  from './ui/badge';
// import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export function SearchBar({ onSearch, className = '' }) {
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('Dubai Marina'); 
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState('studio');
  const [bathrooms, setBathrooms] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [areaMin, setAreaMin] = useState('');
  const [areaMax, setAreaMax] = useState('');
  const [furnishing, setFurnishing] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const popularLocations = [
    'Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay', 
    'JBR', 'DIFC', 'Jumeirah Lakes Towers', 'Dubai Hills Estate',
    'Arabian Ranches', 'The Springs', 'Emirates Hills', 'Dubai South'
  ];

  const amenities = [
    'Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Balcony',
    'Maid Room', 'Study Room', 'Storage', 'Built-in Wardrobes',
    'Central AC', 'Beach Access', 'Golf Course View', 'Marina View'
  ];

  const propertyTypes = {
    residential: ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Studio'],
    commercial: ['Office', 'Retail', 'Warehouse', 'Restaurant', 'Showroom']
  };

  const getPriceOptions = () => {
    if (activeTab === 'buy') {
      return {
        min: ['500K', '1M', '2M', '3M', '5M', '10M', '15M'],
        max: ['1M', '2M', '3M', '5M', '10M', '15M', '20M+']
      };
    } else {
      return {
        min: ['30K', '50K', '75K', '100K', '150K', '200K', '300K'],
        max: ['50K', '75K', '100K', '150K', '200K', '300K', '500K+']
      };
    }
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    setShowLocationSuggestions(false);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSearch = () => {
    const filters = {
      type: activeTab,
      location,
      propertyType,
      bedrooms,
      bathrooms,
      priceMin,
      priceMax,
      areaMin,
      areaMax,
      furnishing,
      amenities: selectedAmenities
    };
    onSearch(filters);
  };

  const clearFilters = () => {
    setLocation('');
    setPropertyType('');
    setBedrooms('');
    setBathrooms('');
    setPriceMin('');
    setPriceMax('');
    setAreaMin('');
    setAreaMax('');
    setFurnishing('');
    setSelectedAmenities([]);
  };

  const filteredLocations = popularLocations.filter(loc => 
    loc.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8 ${className}`} style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
    }}>
      {/* Property Type Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-gray-50 to-gray-100 p-1 rounded-xl shadow-inner">
          <TabsTrigger value="buy" className="flex items-center space-x-2 rounded-lg transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg">
            <Home className="w-4 h-4" />
            <span >Buy</span>
          </TabsTrigger>
          <TabsTrigger value="rent" className="flex items-center space-x-2 rounded-lg transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg">
            <Building className="w-4 h-4" />
            <span>Rent</span>
          </TabsTrigger>
          <TabsTrigger value="commercial" className="flex items-center space-x-2 rounded-lg transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg">
            <Building2 className="w-4 h-4" />
            <span>Commercial</span>
          </TabsTrigger>
          <TabsTrigger value="off-plan" className="flex items-center space-x-2 rounded-lg transition-all duration-200 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg">
            <Home className="w-4 h-4" />
            <span>Off-Plan</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Main Search Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
        {/* Location Search */}
        <div className="lg:col-span-4 relative">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Enter location or building"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowLocationSuggestions(true);
              }}
              onFocus={() => setShowLocationSuggestions(true)}
              className="pl-10 h-12 border-2 border-gray-200 focus:border-indigo-500 rounded-xl transition-all duration-200 hover:border-indigo-300 focus:shadow-lg focus:shadow-indigo-100"
            />
          </div>

          {showLocationSuggestions && filteredLocations.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl mt-1 max-h-60 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
              {filteredLocations.map((loc, index) => (
                <button
                  key={loc}
                  onClick={() => handleLocationSelect(loc)}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 first:rounded-t-xl last:rounded-b-xl flex items-center space-x-2 transition-all duration-150 hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{loc}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Property Type */}
        <div className="lg:col-span-3">
          {/* <Select value={propertyType} onValueChange={setPropertyType}> */}
          <Select value={propertyType} onChange={setPropertyType}>
            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-indigo-500 rounded-xl transition-all duration-200 hover:border-indigo-300 focus:shadow-lg focus:shadow-indigo-100">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              {(activeTab === 'commercial' ? propertyTypes.commercial : propertyTypes.residential).map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* <Select value={propertyType} onChange={setPropertyType}>
  <SelectTrigger className="h-12 px-4 border-2 border-gray-200 rounded-xl">
    <SelectValue placeholder="Property Type" />
  </SelectTrigger>
  <SelectContent className="absolute left-0 top-full mt-1 bg-white shadow-lg border rounded-md z-[9999] min-w-full py-1">
    {(activeTab === 'commercial' ? propertyTypes.commercial : propertyTypes.residential).map((type) => (
      <SelectItem key={type} value={type.toLowerCase()} className="py-1 px-2 text-sm">
        {type}
      </SelectItem>
    ))}
  </SelectContent>
</Select> */}
        </div>

        {/* Bedrooms */}
        {activeTab !== 'commercial' && (
          <div className="lg:col-span-2">
            <Select value={bedrooms} onChange={setBedrooms}>
              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-indigo-500 rounded-xl transition-all duration-200 hover:border-indigo-300 focus:shadow-lg focus:shadow-indigo-100">
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1 Bed">1 Bed</SelectItem>
                <SelectItem value="2 Beds">2 Beds</SelectItem>
                <SelectItem value="3 Beds">3 Beds</SelectItem>
                <SelectItem value="4 Beds">4 Beds</SelectItem>
                <SelectItem value="5+ Beds">5+ Beds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Search Button */}
        <div className={activeTab === 'commercial' ? 'lg:col-span-5' : 'lg:col-span-3'}>
          <Button 
            onClick={handleSearch}
            className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
}
