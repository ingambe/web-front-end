import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PropertyCard({ property }) {
  const { reference_listing: listing } = property;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={listing.images_analysis[0].image_remote_url}
            alt={property.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{property.title}</CardTitle>
          <Badge variant={property.property_condition === 'new' ? 'default' : 'secondary'}>
            {property.property_condition}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">{listing.location.city}, {listing.location.state}</p>
        <p className="font-semibold mt-2 text-primary">
          {listing.price.toLocaleString()} {listing.currency}
        </p>
        <div className="mt-2 flex items-center space-x-4 text-sm">
          <span>{listing.rooms.bedrooms} beds</span>
          <span>{listing.bathrooms.total} baths</span>
          <span>{listing.area.living} m²</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}