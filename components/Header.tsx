"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Home, Building, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary transition-colors hover:text-primary/80">
          <Home className="h-6 w-6" />
          <span className="font-bold text-xl">AI Real Estate</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li><Link href="/search?type=buy" className="text-muted-foreground hover:text-primary transition-colors">Buy</Link></li>
            <li><Link href="/search?type=rent" className="text-muted-foreground hover:text-primary transition-colors">Rent</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}