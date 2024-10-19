"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    type: 'rent',
    price: '$2,500/month',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    type: 'buy',
    price: '$450,000',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
  },
  {
    id: 3,
    title: 'Cozy Studio in the Heart of the City',
    type: 'rent',
    price: '$1,800/month',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
  },
  {
    id: 4,
    title: 'Luxurious Beachfront Villa',
    type: 'buy',
    price: '$1,200,000',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProperties = activeTab === 'all'
    ? properties
    : properties.filter(property => property.type === activeTab);

  return (
    <div className="mt-16 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Featured Properties</h2>
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="buy">For Sale</TabsTrigger>
          <TabsTrigger value="rent">For Rent</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="buy">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="rent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{property.title}</CardTitle>
          <Badge variant={property.type === 'rent' ? 'secondary' : 'default'}>
            {property.type === 'rent' ? 'For Rent' : 'For Sale'}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">{property.location}</p>
        <p className="font-semibold mt-2 text-primary">{property.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}