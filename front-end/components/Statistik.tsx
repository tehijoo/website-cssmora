// components/Statistik.tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function Statistik() {
  return (
    <section id="statistik" className="w-full bg-[#0082c6] py-24">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center text-white">
        
        {/* Heading & Subheading */}
        <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 ${poppins.className}`}>
          Bridging Disciplines, Creating Impact
        </h2>
        <p className={`text-[15px] md:text-[16px] text-white/90 max-w-4xl mb-20 leading-relaxed ${poppins.className}`}>
          Menghubungkan ratusan mahasantri dari berbagai bidang keilmuan di ITS untuk bersinergi dalam satu frekuensi wadah pengabdian.<br className="hidden md:block" />
          Explore our intellectual diversity and see how our multidisciplinary strengths become the main force in building a better society.
        </p>

        {/* Grid Angka Statistik */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 w-full ${poppins.className}`}>
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
             {/* Menggunakan warna cyan/mint persis desain */}
             <span className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1de9b6] mb-3">1.2K</span>
             <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase text-white/95">
               Active Members
             </span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1de9b6] mb-3">45k</span>
             <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase text-white/95">
               Events Held
             </span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1de9b6] mb-3">8.5M</span>
             <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase text-white/95">
               Volunteer Hours
             </span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1de9b6] mb-3">500k</span>
             <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase text-white/95">
               Beneficiaries
             </span>
          </div>

        </div>

      </div>
    </section>
  );
}