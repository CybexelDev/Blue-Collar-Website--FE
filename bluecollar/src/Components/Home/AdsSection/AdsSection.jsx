import React from "react";

function AdsSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-16">
      <div
        className="
          w-full mx-auto
          rounded-[28px]
          bg-gradient-to-r
          from-[#005BBF]
          to-[#1A73E8]
          py-16 md:py-20
          px-6
          text-center
          overflow-hidden
          relative
          group
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_rgba(0,91,191,0.35)]
          animate-fadeUp
        "
      >
        {/* Animated Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        <div className="relative z-10">
          <h2
            className="
              text-white
              font-extrabold
              text-3xl
              md:text-5xl
              leading-tight
              manrope
              transition-all
              duration-500
              group-hover:scale-[1.02]
            "
          >
            Ready to Hire? Post a Job for
            <br />
            Free
          </h2>

          <p
            className="
              mt-6
              text-white/70
              text-[16px]
              md:text-[18px]
              inter
              max-w-[574px]
              mx-auto
              font-[350]
              transition-all
              duration-500
              group-hover:text-white/90
            "
          >
            Join thousands of employers finding top-tier local talent.
            No hidden fees, just great workers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="
                bg-white
                text-[#FF5F00]
                font-bold
                text-[18px]
                px-8
                py-4
                rounded-full
                hover:scale-110
                hover:-translate-y-1
                active:scale-95
                transition-all
                duration-300
                shadow-lg
                hover:shadow-2xl
                inter
              "
            >
              Post a Job Now
            </button>

            <button
              className="
                bg-white/10
                backdrop-blur-sm
                border
                border-white/10
                text-white
                font-bold
                px-8
                py-4
                rounded-full
                hover:bg-white/20
                hover:scale-105
                hover:-translate-y-1
                active:scale-95
                transition-all
                duration-300
                inter
              "
            >
              Employer FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdsSection;