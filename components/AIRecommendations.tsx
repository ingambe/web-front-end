"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function AIRecommendations() {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleGetRecommendations = () => {
    // Simulate AI recommendations (replace with actual AI integration)
    const simulatedRecommendations = [
      {
        id: 1,
        title: 'Cozy Downtown Loft',
        description: 'This property matches your preference for a central location and modern amenities.',
        match: '95%',
      },
      {
        id: 2,
        title: 'Suburban Family Home',
        description: 'Based on your interest in a quiet neighborhood and spacious living areas, this property could be a great fit.',
        match: '88%',
      },
      {
        id: 3,
        title: 'Beachfront Condo',
        description: 'Your mention of wanting a waterfront view makes this property an excellent choice to consider.',
        match: '82%',
      },
    ];
    setRecommendations(simulatedRecommendations);
  };

  return (
    <div className="mt-16 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">AI-Powered Recommendations</h2>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Tell us your preferences</CardTitle>
          <CardDescription>Our AI will analyze your input and suggest properties that match your needs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="preferences">Your preferences</Label>
              <Textarea
                id="preferences"
                placeholder="e.g., I'm looking for a 3-bedroom house near good schools, with a garden and modern kitchen..."
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="h-32"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGetRecommendations} className="w-full">Get Recommendations</Button>
        </CardFooter>
      </Card>

      {recommendations.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Your Personalized Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((recommendation) => (
              <Card key={recommendation.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{recommendation.title}</CardTitle>
                    <Badge variant="secondary">{recommendation.match} Match</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{recommendation.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Property</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}