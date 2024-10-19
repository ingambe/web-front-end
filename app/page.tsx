import Hero from '@/components/Hero';
import PropertySearch from '@/components/PropertySearch';
import FeaturedProperties from '@/components/FeaturedProperties';
import AIRecommendations from '@/components/AIRecommendations';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Hero />
      <PropertySearch initialFilters={{ listingType: 'all' }} />
      <FeaturedProperties />
      <AIRecommendations />
    </div>
  );
}