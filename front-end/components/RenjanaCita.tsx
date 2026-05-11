// components/RenjanaCita.tsx
import Image from 'next/image';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RenjanaCita() {
  return (
    <section id="renjana-cita" className="w-full bg-[#0082c6] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* =========================================
            KOLOM KIRI: Teks & Penjelasan & TOMBOL
        ========================================= */}
        <div className={`flex flex-col text-white ${poppins.className} lg:pr-10`}>
           <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-[1.1] ${notoSerif.className}`}>
             The Heart behind <br /> Renjana Cita
           </h2>
           <p className="text-[15px] md:text-[16px] text-white/95 leading-relaxed mb-10 text-justify">
             Di balik gerak progresif CSSMoRA ITS, hadir gerak pengabdian dari mahasantri yang bergerak dalam satu frekuensi. Kami bukan sekadar pengurus, melainkan sebuah keluarga yang mendedikasikan diri untuk merawat harmoni dan menumbuhkan potensi. Melalui semangat ketulusan Renjana dalam menggapai Cita, setiap inovasi dan program yang kami bangun adalah langkah nyata untuk membawa santri scholars lebih dekat pada kemaslahatan.
           </p>

           {/* List 3 Poin */}
           <div className="space-y-8">
             <div>
               <h3 className="text-xl md:text-[22px] font-bold mb-2">7 Departments and Bureau</h3>
               <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                 Tujuh pilar badan, departemen dan biro CSSMoRA ITS yang saling bersinergi dalam mewujudkan tata kelola organisasi yang profesional dan berkelanjutan.
               </p>
             </div>
             <div>
               <h3 className="text-xl md:text-[22px] font-bold mb-2">100+ Dedicated Mahasantri</h3>
               <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                 Lebih dari seratus mahasantri berdedikasi tinggi yang bersatu dalam semangat kekeluargaan untuk membawa dampak positif bagi anggota dan masyarakat.
               </p>
             </div>
             <div>
               <h3 className="text-xl md:text-[22px] font-bold mb-2">30+ Programs & Agendas</h3>
               <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                 Dengan lebih dari 30 program kerja dan agenda unggulan, Kabinet Renjana Cita berfokus mengaktualisasikan nilai luhur kesantrian melalui inovasi dan pengabdian nyata.
               </p>
             </div>
           </div>

           {/* TOMBOL "Lihat Detail" */}
           <div className="mt-12 self-start">
             <button className={`bg-[#a8f070] text-[#2a411b] font-bold text-[17px] px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform ${poppins.className}`}>
               Lihat Detail
             </button>
           </div>
        </div>

        {/* =========================================
            KOLOM KANAN: 2 Card Simetris & Rapi
        ========================================= */}
        {/* Menggunakan gap yang seragam dan margin top agar seimbang dengan teks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-0 w-full max-w-2xl mx-auto">

           {/* CARD 1 */}
           {/* Perbaikan: Menggunakan flex-col dan bg-white pada kontainer utama */}
           <div className="flex flex-col w-full rounded-[24px] overflow-hidden shadow-2xl bg-white transform transition-transform hover:-translate-y-2">
             
             {/* Area Foto Utama */}
             {/* Tinggi foto diseragamkan menjadi 300px */}
             <div className="relative w-full h-[250px] sm:h-[300px]">
               <Image src="/anak.png" alt="Bang Udin Foreground" fill className="object-cover" />
             </div>
             
             {/* Area Teks Identitas */}
             {/* flex-1 memastikan area putih ini mengisi sisa ruang di bawah gambar tanpa sisa abu-abu */}
             <div className="relative flex flex-col flex-1 items-center text-center p-6 pt-10 bg-white">
                {/* Avatar Lingkaran */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-300 shadow-sm">
                   <Image src="/anak.png" alt="Avatar" fill className="object-cover" />
                </div>
                <h4 className={`text-lg md:text-xl font-bold text-gray-900 ${notoSerif.className}`}>Bang Udin</h4>
                <p className={`text-[11px] md:text-[12px] text-gray-500 mb-3 ${poppins.className}`}>Sistem Informasi'22</p>
                <p className={`text-[11px] md:text-[12px] text-gray-700 italic leading-snug ${poppins.className}`}>
                  "Juara 1 Balap Kelereng - California Race"
                </p>
             </div>

           </div>

           {/* CARD 2 */}
           {/* Card ini kembar identik dengan Card 1 agar sejajar dan rapi */}
           <div className="flex flex-col w-full rounded-[24px] overflow-hidden shadow-2xl bg-white transform transition-transform hover:-translate-y-2">
             
             {/* Area Foto Utama */}
             <div className="relative w-full h-[250px] sm:h-[300px]">
               <Image src="/anak.png" alt="Bang Udin Background" fill className="object-cover" />
             </div>
             
             {/* Area Teks Identitas */}
             <div className="relative flex flex-col flex-1 items-center text-center p-6 pt-10 bg-white">
                {/* Avatar Lingkaran */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-300 shadow-sm">
                   <Image src="/anak.png" alt="Avatar" fill className="object-cover" />
                </div>
                <h4 className={`text-lg md:text-xl font-bold text-gray-900 ${notoSerif.className}`}>Bang Udin</h4>
                <p className={`text-[11px] md:text-[12px] text-gray-500 mb-3 ${poppins.className}`}>Sistem Informasi'22</p>
                <p className={`text-[11px] md:text-[12px] text-gray-700 italic leading-snug ${poppins.className}`}>
                  "Juara 1 Balap Kelereng - California Race"
                </p>
             </div>

           </div>

        </div>

      </div>
    </section>
  );
}