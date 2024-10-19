import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/buy">Buy Property</Link></li>
              <li><Link href="/rent">Rent Property</Link></li>
              <li><Link href="/sell">Sell Property</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/market-trends">Market Trends</Link></li>
              <li><Link href="/guides">Buying & Renting Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@airealestate.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 AI Street, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>&copy; 2023 AI Real Estate Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}