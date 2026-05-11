// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

// Kita pastikan font Poppins aktif di sini juga
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

// Komponen kecil untuk icon panah bawah (Chevron)
const ChevronDown = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="inline-block ml-1"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Header() {
  return (
    // 'absolute' membuat header melayang di atas background Hero
    // 'z-50' memastikannya berada di layer paling depan
    <header className={`absolute top-0 left-0 w-full z-50 pt-8 px-6 md:px-12 lg:px-20 ${poppins.className}`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* 1. Bagian Logo */}
        {/* Lebar dan tinggi kontainer disesuaikan agar logo tidak gepeng */}
        <div className="relative w-[180px] h-[50px] md:w-[240px] md:h-[60px]">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo CSSMoRA ITS" 
              fill 
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* 2. Bagian Navigasi Menu */}
        {/* Disembunyikan di HP (hidden), dan muncul berjejer (flex) di layar besar (lg) */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium text-[15px] items-center drop-shadow-md">
          <li>
            <Link href="#about" className="flex items-center hover:text-gray-200 transition-colors">
              About CSSMoRA <ChevronDown />
            </Link>
          </li>
          <li>
            <Link href="#overview" className="flex items-center hover:text-gray-200 transition-colors">
              Overview Renjana Cita <ChevronDown />
            </Link>
          </li>
          <li>
            <Link href="#prestasi" className="flex items-center hover:text-gray-200 transition-colors">
              Prestasi <ChevronDown />
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="flex items-center hover:text-gray-200 transition-colors">
              Gallery <ChevronDown />
            </Link>
          </li>
          <li>
            <Link href="#statistik" className="flex items-center hover:text-gray-200 transition-colors">
              Statistik <ChevronDown />
            </Link>
          </li>
        </ul>

        {/* Tombol Hamburger Menu untuk Tampilan Mobile (Opsional/Bisa diabaikan dulu) */}
        <div className="lg:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

      </nav>
    </header>
  );
}