'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'NOS SERVICES', path: '/services' },
    { name: 'À PROPOS', path: '/a-propos' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-[#04b6cb] px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Image 
            src="/images/logoblancseul.png" 
            alt="Mike Conception" 
            width={80} 
            height={40} 
            priority
          />
        </Link>

        {/* Menu de navigation - Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`text-white font-semibold text-lg transition-colors hover:text-black
                ${pathname === item.path ? 'border-2 border-[#80f0e7] px-4 py-2 rounded-md' : 'px-4 py-2'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Menu burger - Mobile */}
        <button 
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#04b6cb] flex items-center justify-center z-50">
            <nav className="flex flex-col space-y-8 items-center">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={`text-white font-semibold text-xl
                    ${pathname === item.path ? 'border-2 border-[#80f0e7] px-4 py-2 rounded-md' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}