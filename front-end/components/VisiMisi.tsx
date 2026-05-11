// components/VisiMisi.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="relative w-full bg-[#0082c6] flex flex-col lg:flex-row overflow-hidden">
      
      {/* KOLOM KIRI: Area Gambar dengan Efek Fade */}
      <div className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[500px] lg:min-h-[600px] bg-gray-200 flex-shrink-0">
        
        {/* Placeholder Foto (Ganti tag div ini dengan <Image /> nantinya) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span className={`font-medium ${poppins.className}`}>Tempat Foto Nanti</span>
        </div>

        {/* Efek Gradient: Di HP memudar ke bawah, di PC memudar ke kanan */}
        {/* INI KUNCI UTAMANYA agar fotomu nanti menyatu dengan background biru */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#0082c6]/40 to-[#0082c6]" />
      </div>

      {/* KOLOM KANAN: Konten Visi & Misi */}
      <div className="w-full lg:w-1/2 px-6 py-12 lg:py-24 lg:pr-24 flex flex-col justify-center relative z-10">
        
        {/* Header "Aligning with the National Vision" */}
        <div className={`mb-12 flex flex-col items-start lg:ml-8 ${poppins.className}`}>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-2xl md:text-[28px] font-bold mb-1 tracking-wide">
              Aligning with the
            </h3>
            <div className="bg-[#a8f070] px-6 py-2 transform -rotate-2 shadow-lg">
              <span className="text-[#2a411b] text-2xl md:text-[28px] font-bold">
                National Vision
              </span>
            </div>
          </div>
        </div>

        {/* Bagian Visi */}
        <div className="mb-10 lg:ml-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-5 ${notoSerif.className}`}>
            Visi
          </h2>
          <p className={`text-white/90 leading-relaxed text-[15px] md:text-base ${poppins.className}`}>
            Terciptanya anggota CSSMoRA yang berorientasi pada keilmuan, pengembangan dan pemberdayaan pesantren serta pengabdian masyarakat.
          </p>
        </div>

        {/* Bagian Misi */}
        <div className="lg:ml-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-5 ${notoSerif.className}`}>
            Misi
          </h2>
          <ul className={`text-white/90 leading-relaxed text-[15px] md:text-base space-y-3 ${poppins.className}`}>
            <li>Mengamalkan Tri Dharma Perguruan Tinggi</li>
            <li>Merawat persatuan dan kesatuan antar anggota CSSMoRA</li>
            <li>Membentuk kader CSSMoRA yang memiliki nilai-nilai dasar CSSMoRA</li>
            <li>Mengembangkan bakat dan minat dari anggota CSSMoRA</li>
            <li>Mengembangkan jejaring organisasi.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}