// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisiMisi from '@/components/VisiMisi';
import Sejarah from '@/components/Sejarah';
import RenjanaCita from '@/components/RenjanaCita';
import Gallery from '@/components/Gallery';
import Statistik from '@/components/Statistik'; // 1. Import Statistik
import Footer from '@/components/Footer';       // 2. Import Footer

export default function LandingPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <Hero />
      <About />
      <VisiMisi />
      <Sejarah />
      <RenjanaCita />
      <Gallery />
      <Statistik /> {/* 3. Panggil Statistik */}
      <Footer />    {/* 4. Panggil Footer sebagai penutup */}
    </main>
  );
}