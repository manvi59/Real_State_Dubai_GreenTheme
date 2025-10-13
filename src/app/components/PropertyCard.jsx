import { useState } from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import  Badge  from './ui/badge';
import  Button  from './ui/button';
import { Card, CardContent } from './ui/card';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

export function PropertyCard({ property, onViewDetails }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
      <div className="relative overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={100}
          height={100}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={property.tag === 'For Sale' ? 'default' : 'secondary'}
            className={`${
              property.tag === 'For Sale'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white font-medium`}
          >
            {property.tag}
          </Badge>
        </div>
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-indigo-600">
              {property.price}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{property.area}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => onViewDetails(property.id)}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
