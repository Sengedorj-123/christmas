import Link from "next/link";

export const Next = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-10">
      <Link href="/kk">
        <button
          className={`
           w-[100px]
            px-8 py-3
            rounded-xl
            text-sm font-medium
            text-white
            bg-white/10 backdrop-blur-lg
            border border-white/20
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            transition-all duration-300 ease-out
            hover:bg-white/20 hover:-translate-y-0.5
            active:translate-y-0 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white/40
          `}
        >
          Next 
        </button>
      </Link>
    </div>
  );
};
