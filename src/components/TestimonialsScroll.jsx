import React, { useMemo, useState } from "react";

export default function TestimonialsScroll() {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "I had a very good experience working with Minnesota Properties. They responded quickly, understood exactly what I needed, and delivered as promised. I’d gladly give a 5-star review for the amazing service.",
        name: "Mohammed Ali",
      },
      {
        quote:
          "Clear communication, no pressure, and every step explained. The whole process felt simple and organized from start to finish.",
        name: "Sarah J.",
      },
      {
        quote:
          "We sold faster than we expected and felt supported the entire time. Great strategy, great negotiation, great results.",
        name: "Derrick M.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-[#F4F1E8] py-16 sm:py-20">
      {/* subtle paper speckle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.45) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3A2A22] uppercase">
          Hear From Our Happy Clients
        </h2>

        <div className="mt-10 flex items-center justify-center gap-5">
          {/* Left arrow */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/40 text-[#3A2A22]/70 hover:bg-white/70 hover:text-[#3A2A22] transition"
          >
            ‹
          </button>

          {/* Scroll card */}
          <div className="relative w-full max-w-3xl">
            {/* Use the scroll image as a BACKGROUND so text is always on top */}
            <div
              className="relative w-full aspect-[16/7] sm:aspect-[16/6] bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: "url(/images/scroll-testimonial.png)",
              }}
            >
              {/* Text layer */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-8 sm:px-14">
                <div className="max-w-xl text-center">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#3A2A22]/85">
                    {t.quote}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#3A2A22]">
                    - {t.name}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/40 text-[#3A2A22]/70 hover:bg-white/70 hover:text-[#3A2A22] transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-[#3A2A22]" : "bg-[#3A2A22]/25 hover:bg-[#3A2A22]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}