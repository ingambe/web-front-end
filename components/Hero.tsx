import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center rounded-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Dream Home with AI
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Our AI-powered platform helps you discover the perfect property tailored to your unique needs and preferences.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Start Searching</Button>
          <Button size="lg" variant="outline" className="text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}