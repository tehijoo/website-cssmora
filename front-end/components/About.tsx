// components/About.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

// Panggil font sesuai desain UI
const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

export default function About() {
  return (
    // Tambahkan id="about" agar saat menu header diklik bisa scroll ke sini
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Layout Grid: 1 Kolom di HP, 2 Kolom di Layar Besar (PC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* KOLOM KIRI: Area Gambar & Badge Hijau */}
          <div className="relative">
            
            {/* 1. Placeholder Tempat Foto (Ganti ini nanti) */}
            <div className="w-full aspect-square md:aspect-[4/5] bg-gray-100 rounded-[32px] border-4 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 relative z-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className={`font-medium ${poppins.className}`}>Tempat Foto Nanti</span>
            </div>

            {/* 2. Floating Badge "Santri tidak hanya jago..." */}
            <div className={`absolute -bottom-8 -left-4 md:-bottom-12 md:-left-8 bg-[#a8f070] p-5 md:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform -rotate-3 z-10 max-w-[280px] md:max-w-[320px] ${poppins.className}`}>
              <p className="text-[#2a411b] font-semibold italic text-lg md:text-xl leading-snug">
                “Santri tidak hanya jago ngaji, tapi juga harus jago teknologi”
              </p>
            </div>
            
          </div>

          {/* KOLOM KANAN: Area Teks Penjelasan */}
          <div className="flex flex-col items-start space-y-6 lg:pl-8">
            
            {/* Label About Us */}
            <div className={`bg-[#a8f070] text-[#2a411b] px-5 py-2 rounded-lg font-semibold text-sm md:text-base shadow-sm ${poppins.className}`}>
              About Us
            </div>

            {/* Heading Biru */}
            <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0082c6] leading-[1.2] ${notoSerif.className}`}>
              Santri Adalah Orang yang dulu dipukul sekarang memikul
            </h2>

            {/* Paragraf Penjelasan */}
            <div className={`text-gray-600 text-[15px] md:text-[16px] space-y-5 leading-relaxed text-justify ${poppins.className}`}>
              <p>
                Program Beasiswa Santri Berprestasi atau disingkat PBSB adalah program kolaborasi Kementerian Agama dengan Lembaga Pengelola Dana Pendidikan (LPDP) Kementerian Keuangan yang bertujuan meningkatkan kualitas sumber daya manusia di bidang keagamaan dan pendidikan berbasis pesantren dengan memberikan kesempatan kepada santri, alumni pesantren, guru, serta tenaga kependidikan untuk melanjutkan studi pada jenjang sarjana baik di dalam maupun luar negeri.
              </p>
              <p>
                CSSMoRA merupakan wadah bagi para mahasantri penerima PBSB untuk berkembang sebagai agen perubahan. CSSMoRA bergerak dalam bidang sosial kepesantrenan dan memegang teguh pancasila.
              </p>
              <p>
                Lebih dari sekadar wadah, CSSMoRA adalah ruang bertumbuh bagi mahasantri penerima PBSB untuk menjadi agen perubahan. Berakar pada nilai luhur pesantren, kami mendedikasikan diri dalam pengabdian sosial, menjaga keteguhan ideologi Pancasila sebagai kompas dalam setiap pengabdian.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}