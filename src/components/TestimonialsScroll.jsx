import React, { useMemo, useState } from "react";
import sample from "../assets/hero-bg.jpg";

export default function TestimonialsEditorial() {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        quote:
          "Minnezota Properties is a premium real estate brand that blends modern aesthetics with seamless, user-centered experiences. We specialize in connecting discerning clients with high-quality, elegantly designed homes that reflect both comfort and sophistication.",
        quote2:
          "From intuitive search tools to personalized support, every touchpoint is crafted to make your property journey effortless, reliable, and inspiring. At Minnezota Properties, we don’t just sell homes, we help you find the space where life truly begins.",
        name: "Aizan Mohammad",
        role: "Product Designer",
        avatar: sample,
      },
      {
        id: 2,
        quote:
          "Working with this team felt refreshingly clear from the very beginning. Every recommendation was thoughtful, every detail was handled carefully, and the overall experience felt elevated without ever becoming overwhelming.",
        quote2:
          "What stood out most was the balance between modern presentation and genuine human support. They made the search feel less transactional and far more personal, which made all the difference for us.",
        name: "Sarah Kim",
        role: "Interior Consultant",
        avatar: sample,
      },
      {
        id: 3,
        quote:
          "The process felt beautifully organized and unexpectedly calm. We always knew what step came next, and the homes presented to us actually matched the lifestyle and design direction we were looking for.",
        quote2:
          "There’s a polished quality to the entire experience, but it never feels cold. It feels intentional, elegant, and incredibly well designed from first click to final decision.",
        name: "Daniel Hart",
        role: "Creative Director",
        avatar: sample,
      },
      {
        id: 4,
        quote:
          "This was one of the few property experiences that felt genuinely premium without trying too hard. Everything was refined, intuitive, and grounded in what actually mattered to us as buyers.",
        quote2:
          "Their approach gave us confidence at every stage. It felt less like browsing listings and more like being guided toward a home that fit the way we actually wanted to live.",
        name: "Leila Noor",
        role: "Brand Strategist",
        avatar: sample,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const progress = ((index + 1) / total) * 100;

  return (
    <section className="overflow-hidden bg-[#f5f5f3] px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-black/12" />
      </div>

      {/* Full-width continuous marquee */}
      <div className="relative left-1/2 right-1/2 my-10 w-screen -translate-x-1/2 overflow-hidden sm:my-14">
        <div className="flex w-max animate-[marquee_40s_linear_infinite]">
          {/* Set 1 */}
          <div className="flex shrink-0 items-center">
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT {' '} LIVE WITH Minnezota Properties
            </h2>
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT {' '} LIVE WITH Minnezota Properties
            </h2>
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT LIVE WITH Minnezota Properties
            </h2>
          </div>

          {/* Set 2 duplicate for seamless loop */}
          <div className="flex shrink-0 items-center">
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT, LIVE WITH Minnezota Properties
            </h2>
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT, LIVE WITH Minnezota Properties
            </h2>
            <h2 className="whitespace-nowrap pr-10 text-[3rem] font-semibold uppercase leading-none tracking-[-0.05em] text-black sm:text-[4.75rem] md:text-[6rem] lg:text-[7rem] text-[#E46C3A]">
              COMFORT, LIVE WITH Minnezota Properties
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-black/12" />

        <div className="grid grid-cols-1 gap-14 py-12 md:grid-cols-[1fr_1.1fr] md:gap-20 lg:gap-28">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
             
              <h3 className="max-w-[1100px] text-black font-medium leading-[0.95] tracking-[-0.06em] text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem]">
                Testimonial
              </h3>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="text-xl font-medium tracking-tight text-black">
                  {current.name}
                </div>
                <div className="mt-1 text-sm text-black/45">{current.role}</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div className="max-w-3xl space-y-8 text-[1.05rem] leading-[1.7] text-black/62 sm:text-[1.15rem]">
              <p>{current.quote}</p>
              <p>{current.quote2}</p>
            </div>

            <div className="mt-12 flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-black/8 bg-transparent text-3xl text-black/80 transition hover:border-black/15 hover:bg-white"
              >
                ‹
              </button>

              <div className="flex flex-1 items-center gap-4 sm:gap-5">
                <span className="min-w-[2rem] text-lg text-black/45">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative h-px flex-1 bg-black/12">
                  <div
                    className="absolute left-0 top-0 h-px bg-black transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="min-w-[2rem] text-right text-lg text-black/45">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-black/8 bg-transparent text-3xl text-black/80 transition hover:border-black/15 hover:bg-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-black/12" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}