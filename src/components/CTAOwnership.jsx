import React from "react";

/**
 * CTAOwnership (matches reference)
 * - Light lavender dotted background
 * - Left: big headline + short copy + button
 * - Right: large home image
 * - Full-bleed (no side padding by default)
 *
 * Put your image at: /public/images/cta-home.png
 * or change the src below.
 */

export default function CTAOwnership() {
  return (
    <section className="relative w-full overflow-hidden bg-[#D9D4FF]">
      {/* dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.22) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* soft top torn edge vibe */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.14), rgba(0,0,0,0))",
          opacity: 0.08,
        }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* LEFT COPY */}
        <div className="px-8 sm:px-12 py-14 sm:py-16 flex items-center">
          <div className="max-w-lg">
            <h2 className="text-[#0F3B35] font-extrabold uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl">
              Take the next step in
              <br />
              ownership!
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#0F3B35]/80 leading-relaxed max-w-md">
              Expert guidance for smart property investments. Simplifying your
              journey to finding the perfect home.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F3B35] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white hover:opacity-95 transition"
              >
                Request a call back
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[260px] md:min-h-[420px]">
          <img
            src="/images/cta-home.png"
            alt="Modern home exterior"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* slight contrast overlay like the screenshot */}
          <div className="pointer-events-none absolute inset-0 bg-black/5" />
        </div>
      </div>
    </section>
  );
}