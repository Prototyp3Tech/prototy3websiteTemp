import heroRightSvg from '../assets/svgs/heroRight.svg';

interface HeroSectionProps {
  illustrationSrc?: string;
  illustrationAlt?: string;
  onOpenInterestForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  illustrationSrc, 
  illustrationAlt = "Prototyp3 platform illustration",
  onOpenInterestForm
}) => {

  return (
    <section className="bg-teal-600 text-gray-800 py-12 md:py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Tech Annotations - Hidden on mobile */}
      <div className="hidden md:block absolute top-[15%] left-[10%] text-white/80 font-mono text-sm font-medium pointer-events-none z-10 -rotate-15">
        react
      </div>
      <div className="hidden md:block absolute top-[25%] right-[15%] text-white/80 font-mono text-sm font-medium pointer-events-none z-10 rotate-10">
        html
      </div>
      <div className="hidden md:block absolute bottom-[20%] left-[8%] text-white/80 font-mono text-sm font-medium pointer-events-none z-10 -rotate-5">
        bootstrap
      </div>
      <div className="hidden md:block absolute bottom-[30%] right-[10%] text-white/80 font-mono text-sm font-medium pointer-events-none z-10 rotate-8">
        Python
      </div>
      <div className="hidden md:block absolute top-[40%] left-[5%] text-white/80 font-mono text-lg font-medium pointer-events-none z-10">
        &lt; /&gt;
      </div>
      <div className="hidden md:block absolute top-[35%] right-[8%] text-white/80 font-mono text-lg font-medium pointer-events-none z-10">
        &lt; /&gt;
      </div>
      
      {/* Background Pattern - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-[30%] right-[30%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="transWhite p-6 md:p-12 rounded-2xl shadow-2xl max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-700">
              <span className="text-orange-500 font-extrabold">{'{'}</span> From classroom to collaboration.
            </h1>
            <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed">
              Prototyp3 bridges the gap between school and the real world. Get paired with projects from real companies. Work with their team and mentors to grow your confidence as a builder one project at a time.
            </p>
            <button 
              onClick={onOpenInterestForm}
              className="group bg-blue-700 text-white border-none py-4 px-8 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mb-6 w-fit hover:w-80 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out Interest Form</span>
                <span className="hidden group-hover:inline">{'{ Fill out Interest Form }'}</span>
              </span>
            </button>
            <p className="text-sm text-gray-400 text-center m-0">
              Let us know if you're interested to register when Fall 2025 cohorts go live.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center items-center order-1 lg:order-2">
          {illustrationSrc ? (
            <img 
              src={illustrationSrc} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-2xl"
            />
          ) : (
            <img 
              src={heroRightSvg} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// import React from "react";
// import heroRightSvg from "../assets/svgs/heroRight.svg";

// interface HeroSectionProps {
//   illustrationSrc?: string;
//   illustrationAlt?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   illustrationSrc,
//   illustrationAlt = "Prototyp3 platform illustration",
// }) => {
//   return (
//     <section
//       className="
//         relative min-h-screen overflow-hidden
//         bg-gradient-to-b from-teal-900 to-teal-700
//       "
//     >
//       {/* soft top glow */}
//       <div className="pointer-events-none absolute inset-0 bg-teal-600"></div>

//       {/* floating annotations (desktop only) */}
//       <div className="hidden md:block absolute top-[15%] left-[10%] text-white/80 font-mono text-sm -rotate-12">react</div>
//       <div className="hidden md:block absolute top-[26%] right-[15%] text-white/80 font-mono text-sm rotate-6">html</div>
//       <div className="hidden md:block absolute bottom-[16%] left-[8%] text-white/80 font-mono text-sm -rotate-6">bootstrap</div>
//       <div className="hidden md:block absolute bottom-[22%] right-[10%] text-white/80 font-mono text-sm rotate-6">Python</div>

//       <div className="relative max-w-6xl mx-auto px-5 pt-28 md:pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//         {/* Left Card */}
//         <div className="lg:col-span-7">
//           <div
//             className="
//               relative rounded-2xl
//               bg-gradient-to-b from-white/75 to-slate-100/50
//               backdrop-blur-md border border-black/10
//               shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)]
//               p-6 md:p-10
//             "
//           >
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-800">
//               <span className="text-orange-500">{'{'}</span> From classroom
//               <br /> to collaboration.
//             </h1>

//             <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
//               Prototyp3 bridges the gap between school and the real world. Get
//               paired with projects from real companies. Work with their team and
//               mentors to grow your confidence as a builder one project at a time.
//             </p>

//             <button className="mt-6 bg-slate-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
//               Fill out Interest Form
//             </button>

//             <p className="mt-6 text-sm text-slate-400">
//               Let us know if you’re interested to register when Fall 2025 cohorts go live.
//             </p>

//             {/* subtle edge highlight */}
//             <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60"></div>
//           </div>
//         </div>

//         {/* Right Illustration with oval base */}
//         <div className="lg:col-span-5 flex justify-center">
//           <div className="relative">
//             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[520px] max-w-[80vw] h-[240px] bg-white rounded-[999px] shadow-[0_60px_80px_-30px_rgba(0,0,0,0.55)]"></div>
//             <img
//               src={illustrationSrc || heroRightSvg}
//               alt={illustrationAlt}
//               className="relative z-10 w-[560px] max-w-[85vw] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
