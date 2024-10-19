"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertySearch from '@/components/PropertySearch';
import PropertyCard from '@/components/PropertyCard';
import AdvancedFilters from '@/components/AdvancedFilters';
import { Button } from '@/components/ui/button';
import { Loader2, SlidersHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Simulated API call
const fetchProperties = (filters) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return dummy data
      resolve([
        {
          id: 1,
          title: "Modern Apartment in City Center",
          reference_listing: {
            price: 250000,
            currency: "EUR",
            location: { city: "Berlin", state: "Berlin" },
            rooms: { bedrooms: 2 },
            bathrooms: { total: 1 },
            area: { living: 75 },
            images_analysis: [{ image_remote_url: "https://example.com/image1.jpg" }]
          },
          property_condition: "good"
        },
        // Add more dummy properties here
      ]);
    }, 1000);
  });
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    listingType: searchParams.get('type') || 'all',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    minEstimatedPrice: '',
    maxEstimatedPrice: '',
    estimatedCurrency: '',
    minLocationGrade: '',
    maxLocationGrade: '',
    minPriceGrade: '',
    maxPriceGrade: '',
    minAmenitiesGrade: '',
    maxAmenitiesGrade: '',
    minGlobalGrade: '',
    maxGlobalGrade: '',
    propertyCondition: '',
  });

  useEffect(() => {
    setLoading(true);
    fetchProperties(filters).then((results) => {
      setProperties(results);
      setLoading(false);
    });
  }, [filters]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      listingType: 'all',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      minEstimatedPrice: '',
      maxEstimatedPrice: '',
      estimatedCurrency: '',
      minLocationGrade: '',
      maxLocationGrade: '',
      minPriceGrade: '',
      maxPriceGrade: '',
      minAmenitiesGrade: '',
      maxAmenitiesGrade: '',
      minGlobalGrade: '',
      maxGlobalGrade: '',
      propertyCondition: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Properties</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="hidden md:block">
            <AdvancedFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full mb-4">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Advanced Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Advanced Filters</SheetTitle>
                  <SheetDescription>
                    Refine your property search with these filters.
                  </SheetDescription>
                </SheetHeader>
                <AdvancedFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <PropertySearch initialFilters={filters} onFilterChange={handleFilterChange} />
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <>
              {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {properties.slice(0, currentPage * 9).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center mt-8">
                  <p>No properties found. Try adjusting your filters.</p>
                </div>
              )}
              {currentPage * 9 < properties.length && (
                <div className="mt-8 flex justify-center">
                  <Button onClick={loadMore}>Load More</Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}