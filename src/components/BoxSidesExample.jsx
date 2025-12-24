import { BoxLeftSide } from './BoxLeftSide';
import { BoxRightSide } from './BoxRightSide';

/**
 * Example component showing how to use the left and right sides of the Christmas box
 * Монгол: Жишээ компонент - Шинэ жилийн хайрцгийн зүүн ба баруун талыг хэрхэн ашиглах
 */
export const BoxSidesExample = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3 font-serif">
            Christmas Box Sides
          </h1>
          <p className="text-slate-300 text-xs sm:text-base md:text-xl font-light tracking-wide px-4">
              Шинэ жилийн хайрцгийн зүүн ба баруун тал
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {/* Left Side */}
          <BoxLeftSide size="medium" />
          
          {/* Right Side */}
          <BoxRightSide size="medium" />
        </div>

        {/* Alternative: Stacked vertically */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:gap-8">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Stacked View</h2>
          <BoxLeftSide size="small" />
          <BoxRightSide size="small" />
        </div>
      </div>
    </div>
  );
};

