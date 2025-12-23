import { useState, useMemo } from "react";

export const messages = [
  "Шинэ жилийн гэрэл аажмаар зүрхийг чинь дулаацуулна, чи ганцаараа биш.",
  "Өнгөрсөн жилийн шарх чинь чиний ирэх жилийн хүч болж хувирна.",
  "Чи энэ он хүртэл хүрч чадсан — энэ өөрөө ялалт.",
  "Шинэ он чамд зөөлөн хандаж эхэлнэ, зүгээр л амьсгаа аваарай.",
  "Шинэ жилийн цас шиг бүх зүйл аажмаар цэвэршинэ.",
  "Чиний оршин байх нь энэ дэлхийн хамгийн үнэ цэнтэй бэлэг.",
  "Шинэ жилийн гэрэл чиний дотоод харанхуйд асна.",
  "Чи амарч болно, шинэ он чамайг хүлээж байна.",
  "Шинэ он бол өөрийгөө буруутгах биш, өөрийгөө тэврэх цаг.",
  "Шинэ он чиний сэтгэлийг эдгээх тэвчээртэй ирнэ.",
  "Өнөөдөр энд байгаад баярлалаа — чи чухал.",
  "Шинэ он чиний дотоод хүүхдийг хамгаална.",
  "Шинэ он чиний алдааг биш, чиний зоригийг харна.",
  "Чиний зүрх энэ онд ч итгэх чадвартай.",
  "Чи хангалттай сайн, шинэ он үүнийг мэднэ.",
  "Шинэ он чиний дотоод хүчийг зөөлөн сэрээнэ.",
  "Чи ганцаараа тэмцэхгүй, шинэ он чамтай хамт.",
  "Шинэ он чиний найдварын гэрлийг унтраахгүй.",
  "Өнгөрсөн он чиний бүх түүх биш.",
  "Шинэ он чиний дахин эхлэх боломж.",
  "Шинэ он чиний тэвчээрийг харж байна.",
  "Чиний дотоод гэрэл энэ онд улам тодорно.",
  "Шинэ он чамд итгэж байна.",
  "Шинэ он чамд сайхан боломж, шинэ эрч хүч бэлэглэнэ.",
  "Өнгөрсөн оноо шагшин, ирэх онд өөрийн мөрөөдлийг биелүүл.",
  "2026 он чиний урам зоригийг дахин нэг шатанд хүргэнэ.",
  "Өдрөөс өдөрт чамд сайхан зүйлүүд тохиолдоно гэж итгэ.",
  "Шинэ он — шинэ амжилт, шинэ хөгжил, шинэ аз жаргал.",
];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export const ChristmasBox = () => {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const sparkles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 360) / 8;
      return {
        top: `${50 + Math.sin((angle * Math.PI) / 180) * 45}%`,
        left: `${50 + Math.cos((angle * Math.PI) / 180) * 45}%`,
        delay: `${i * 0.15}s`,
        duration: `${2 + (i % 3) * 0.5}s`
      };
    });
  }, []);

  const openBox = () => {
    if (opened || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setMessage(getRandomMessage());
      setOpened(true);
      setIsAnimating(false);
    }, 1000);
  };

  const reset = () => {
    setOpened(false);
    setMessage("");
  };

  return (
   <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl">
        {/* Title Section */}
        <div className="text-center transition-all duration-700 mb-8">
          <div className={`${opened ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'} transition-all duration-700`}>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3 font-serif">
              Christmas Surprise
            </h1>
            <p className="text-slate-300 text-xs sm:text-base md:text-xl font-light tracking-wide px-4">
              Unwrap your personalized holiday message
            </p>
          </div>
          <div className={`${opened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all duration-700 delay-500`}>
            <p className="text-amber-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-wide px-4 italic leading-relaxed">
              This gift was given to you by Sengedorj.
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
          {/* The Gift Box */}
          <div className="relative" style={{ perspective: '2000px' }}>
            <div 
              className={`relative transition-all duration-1000 ${
                opened ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
              }`}
            >
              <div 
                onClick={openBox}
                className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] mx-auto cursor-pointer group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-amber-500/20 to-green-500/20 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] blur-2xl sm:blur-3xl group-hover:blur-[60px] sm:group-hover:blur-[80px] transition-all duration-700 animate-pulse" />

                {/* Box Base */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800
                  rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl
                  transition-all duration-500
                  ${isAnimating ? 'scale-105' : 'group-hover:scale-[1.02]'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]" />
                  <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-white/10 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem]" />
                </div>

                {/* Lid */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700
                  rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  transition-all duration-1000 ease-out
                  ${isAnimating 
                    ? '-translate-y-[400px] sm:-translate-y-[500px] md:-translate-y-[600px] translate-x-20 sm:translate-x-32 md:translate-x-40 rotate-[60deg] opacity-0 scale-150' 
                    : 'translate-y-0 rotate-0 opacity-100 scale-100'
                  }
                  ${!isAnimating && !opened ? 'group-hover:-translate-y-2 sm:group-hover:-translate-y-3 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]' : ''}
                `}>
                  {/* Ribbon Vertical */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 h-full">
                    <div className="w-full h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.3)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>
                  
                  {/* Ribbon Horizontal */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 sm:h-16 md:h-20">
                    <div className="w-full h-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.3)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                  </div>
                  
                  {/* Premium Bow */}
                  <div className="absolute -top-6 sm:-top-8 md:-top-12 left-1/2 -translate-x-1/2">
                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
                      {/* Left loop */}
                      <div className="absolute top-1 sm:top-1.5 md:top-2 left-0 w-8 h-10 sm:w-12 sm:h-16 md:w-16 md:h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full -rotate-45 shadow-lg sm:shadow-xl">
                        <div className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-white/40 to-transparent rounded-full" />
                      </div>
                      {/* Right loop */}
                      <div className="absolute top-1 sm:top-1.5 md:top-2 right-0 w-8 h-10 sm:w-12 sm:h-16 md:w-16 md:h-20 bg-gradient-to-bl from-amber-400 via-amber-500 to-amber-600 rounded-full rotate-45 shadow-lg sm:shadow-xl">
                        <div className="absolute inset-1 sm:inset-2 bg-gradient-to-bl from-white/40 to-transparent rounded-full" />
                      </div>
                      {/* Center knot */}
                      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-xl sm:shadow-2xl border sm:border-2 border-amber-300">
                        <div className="absolute inset-0.5 sm:inset-1 bg-gradient-to-br from-white/40 to-transparent rounded-full" />
                      </div>
                      {/* Ribbon tails */}
                      <div className="absolute top-10 sm:top-14 md:top-20 left-2 sm:left-3 md:left-4 w-4 h-8 sm:w-5 sm:h-12 md:w-7 md:h-16 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-b-xl sm:rounded-b-2xl -rotate-12 shadow-lg sm:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-b-xl sm:rounded-b-2xl" />
                      </div>
                      <div className="absolute top-10 sm:top-14 md:top-20 right-2 sm:right-3 md:right-4 w-4 h-8 sm:w-5 sm:h-12 md:w-7 md:h-16 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-b-xl sm:rounded-b-2xl rotate-12 shadow-lg sm:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent rounded-b-xl sm:rounded-b-2xl" />
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]" />
                  <div className="absolute top-0 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl sm:blur-3xl" />
                </div>

                {/* Magical Sparkles */}
                {!opened && sparkles.map((sparkle, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 animate-pulse"
                    style={{
                      top: sparkle.top,
                      left: sparkle.left,
                      animationDelay: sparkle.delay,
                      animationDuration: sparkle.duration,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-amber-400 rounded-full blur-sm" />
                      <div className="absolute inset-0.5 bg-yellow-300 rounded-full" />
                    </div>
                  </div>
                ))}

                {/* Particle burst effect */}
                {isAnimating && (
                  <div className="absolute inset-0">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const angle = (i * 360) / 20;
                      return (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-ping"
                          style={{
                            transform: `rotate(${angle}deg) translateX(${60 + i * 3}px)`,
                            animationDelay: `${i * 0.03}s`,
                            animationDuration: '1s'
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Instruction text */}
              {!isAnimating && (
                <p className="text-center mt-6 sm:mt-8 md:mt-12 text-slate-300 text-sm sm:text-base md:text-lg font-light tracking-wide animate-pulse px-4">
                  Click to unwrap your surprise
                </p>
              )}
            </div>
          </div>

          {/* Message Card */}
          <div className={`
            absolute inset-0 flex items-center justify-center py-[500px]
            transition-all duration-1000 delay-300
            ${opened ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
          `}>
            <div className="w-full max-w-3xl px-4">
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-12 lg:p-16 border border-white/20">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-amber-400/50 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-[2rem]" />
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-amber-400/50 rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-[2rem]" />
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-amber-400/50 rounded-bl-xl sm:rounded-bl-2xl md:rounded-bl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-amber-400/50 rounded-br-xl sm:rounded-br-2xl md:rounded-br-[2rem]" />
                
                {/* Top ornament */}
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <div className="w-16 h-0.5 sm:w-20 sm:h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
                </div>
                
                <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 md:mb-8 animate-bounce inline-block">🎁</div>
                  
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light tracking-wide px-2">
                    {message}
                  </p>

                  <div className="pt-6 sm:pt-8 md:pt-10 flex gap-3 sm:gap-4 justify-center">
                    <button
                      onClick={reset}
                      className="group relative px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-full font-light text-sm sm:text-base md:text-lg tracking-wide shadow-[0_5px_20px_rgba(239,68,68,0.4)] sm:shadow-[0_10px_40px_rgba(239,68,68,0.4)] hover:shadow-[0_10px_30px_rgba(239,68,68,0.6)] sm:hover:shadow-[0_15px_50px_rgba(239,68,68,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Open Another Gift</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative bottom elements */}
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10">
                  {['🎄', '✨', '❄️', '⭐', '🎅'].map((emoji, i) => (
                    <span 
                      key={i} 
                      className="text-xl sm:text-2xl md:text-3xl opacity-40 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}