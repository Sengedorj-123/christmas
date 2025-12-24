import { useState, useRef } from "react";
import { useRouter } from "next/router";


const NO_IMAGES = [
  "/no/200.gif",
  "/no/cat-cat-turning-head.gif",
  "/no/why-persian-room-cat-guardian.gif",
  "/no/kk.gif",
  "/no/cry.gif",
];

const YES_IMAGE = "/yes/giphy.webp";

export const GiftQuestion=()=> {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedNoImage, setSelectedNoImage] = useState(null);
  const noButtonRef = useRef(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const [noHoverCount, setNoHoverCount] = useState(0);
  const router = useRouter();


  const handleYes = () => {
    setResponse("yes");
    setShowResponse(true);
  };

  const moveButtonRandomly = () => {
    if (noButtonRef.current) {
      const button = noButtonRef.current;
      const container = button.parentElement;
      
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        
        const maxX = Math.max(0, containerRect.width - buttonRect.width);
        const maxY = Math.max(0, containerRect.height - buttonRect.height);
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        setNoButtonPosition({ x: randomX, y: randomY });
        setIsPositioned(true);
        setNoHoverCount(prev => prev + 1);
      }
    }
  };

  const handleNo = () => {
    const randomIndex = Math.floor(Math.random() * NO_IMAGES.length);
    setSelectedNoImage(NO_IMAGES[randomIndex]);
    setResponse("no");
    setShowResponse(true);
  };

  const handleBackToQuestion = () => {
    setShowResponse(false);
    setResponse(null);
    setSelectedNoImage(null);
    setIsPositioned(false);
    setNoButtonPosition({ x: 0, y: 0 });
    setNoHoverCount(0);
  };

  if (showResponse) {
    const imageSrc = response === "yes" ? YES_IMAGE : selectedNoImage;
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 sm:p-6 lg:p-8 animate-fadeIn">
        <div className="relative max-w-2xl w-full">
          <div className="absolute inset-0 bg-white/5 blur-3xl"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl shadow-black/50">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img 
                src={imageSrc} 
                alt={response === "yes" ? "Yes response" : "No response"}
                className="w-full h-auto max-h-96 object-contain animate-scaleIn"
              />
            </div>
            {response === "no" && (
  <button 
    onClick={handleBackToQuestion}
    className="mt-4 sm:mt-6 w-full py-4 sm:py-5 px-6 bg-slate-800 hover:bg-slate-700 text-white text-xl sm:text-2xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
  >
    Try Again?
  </button>
)}

{response === "yes" && (
  <button
    onClick={() => router.push("/")}
    className="mt-4 sm:mt-6 w-full py-4 sm:py-5 px-6 bg-white hover:bg-slate-200 text-slate-950 text-xl sm:text-2xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
  >
    Back to Home
  </button>
)}

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-2xl w-full animate-fadeIn ">
        <div className="absolute inset-0 bg-white/5 blur-3xl "></div>
        
        <div className=" relative bg-slate-900/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl shadow-black/50">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block mb-3 sm:mb-4 p-2 sm:p-3 bg-slate-800/50 rounded-lg sm:rounded-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 px-4">
              Did you like the gift I gave you?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">..............</p>
          </div>

          <div className="relative h-auto sm:h-48 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button 
              onClick={handleYes}
              className="relative group w-[50%] sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-white text-slate-950 text-xl sm:text-2xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 min-w-[160px] sm:min-w-[180px]"
            >
              <span className="relative z-10">Yes</span>
            </button>
            
            <button
              ref={noButtonRef}
              onClick={handleNo}
              onMouseEnter={moveButtonRandomly}
              style={{
                position: isPositioned ? "absolute" : "relative",
                left: isPositioned ? `${noButtonPosition.x}px` : "auto",
                top: isPositioned ? `${noButtonPosition.y}px` : "auto",
              }}
              className="relative group w-[50%] sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-slate-800 hover:bg-slate-700 text-white text-xl sm:text-2xl font-bold rounded-xl sm:rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-110 min-w-[160px] sm:min-w-[180px]"
            >
              <span className="relative z-10">No</span>
            </button>
          </div>

          {noHoverCount > 0 && (
            <div className="mt-4 sm:mt-6 text-center text-slate-400 text-xs sm:text-sm animate-fadeIn">
              You tried to click "No" {noHoverCount} time{noHoverCount > 1 ? 's' : ''} 😏
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, -50px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}