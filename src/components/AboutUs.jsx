import React from "react";

/**
 * AboutUsSection (matches your reference layout)
 * - Cream background
 * - "ABOUT US" centered
 * - Leaf decor in top corners
 * - Two torn-paper text blocks
 * - Stats row (3 big numbers)
 *
 * Tip: Replace copy + stats with your uncle's real info.
 */

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E8] py-16 sm:py-20">
      {/* Decorative leaves (top corners) */}
      <LeafTopLeft />
      <LeafTopRight />

      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A2A22]">
          ABOUT US
        </h2>

        {/* Paper blocks */}
        <div className="relative mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            <PaperNote align="left">
              We offer professional services in buying and selling residential
              and commercial real estate. We strive to make the process
              convenient and transparent for our clients.
            </PaperNote>

            <PaperNote align="right">
              Our experienced team is ready to provide comprehensive support at
              every stage of your transaction, from first showing to final
              closing.
            </PaperNote>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <Stat number="1200" label="Satisfied Clients" />
          <Stat number="982" label="Successfully Closed" />
          <Stat number="326" label="Homes Matched" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Subcomponents ------------------------- */

function PaperNote({ children, align = "left" }) {
  return (
    <div
      className={[
        "relative rounded-[22px]",
        align === "left" ? "md:translate-x-2" : "md:-translate-x-2 md:translate-y-6",
      ].join(" ")}
    >
      {/* Paper */}
      <div
        className="relative overflow-hidden rounded-[22px] border border-black/10 bg-[#E9DDC8] px-7 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
        style={{
          // subtle paper grain
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {/* torn edges illusion */}
        <div className="pointer-events-none absolute -top-3 left-0 right-0 h-8 opacity-45 blur-[0.2px]"
          style={{
            background:
              "radial-gradient(18px 12px at 12% 60%, rgba(0,0,0,0.20), transparent 70%)," +
              "radial-gradient(22px 14px at 28% 35%, rgba(0,0,0,0.18), transparent 72%)," +
              "radial-gradient(20px 14px at 46% 60%, rgba(0,0,0,0.18), transparent 70%)," +
              "radial-gradient(26px 16px at 64% 35%, rgba(0,0,0,0.18), transparent 72%)," +
              "radial-gradient(18px 12px at 82% 60%, rgba(0,0,0,0.20), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute -bottom-3 left-0 right-0 h-8 opacity-45 blur-[0.2px]"
          style={{
            background:
              "radial-gradient(18px 12px at 14% 45%, rgba(0,0,0,0.20), transparent 70%)," +
              "radial-gradient(24px 16px at 34% 70%, rgba(0,0,0,0.18), transparent 72%)," +
              "radial-gradient(18px 12px at 52% 45%, rgba(0,0,0,0.18), transparent 70%)," +
              "radial-gradient(26px 16px at 70% 70%, rgba(0,0,0,0.18), transparent 72%)," +
              "radial-gradient(18px 12px at 86% 45%, rgba(0,0,0,0.20), transparent 70%)",
          }}
        />

        {/* Content */}
        <p className="relative text-sm sm:text-[15px] leading-relaxed text-[#3A2A22]/85">
          {children}
        </p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#3A2A22]">
        {number}
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#3A2A22]/70">
        {label}
      </div>
    </div>
  );
}

/* ------------------------- Decorative SVGs ------------------------- */

function LeafTopLeft() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 h-28 w-28 sm:h-36 sm:w-36 opacity-80"
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <g opacity="0.9" stroke="#2E6B57" strokeWidth="6" strokeLinecap="round">
        <path d="M28 30c34 6 50 26 58 48" />
        <path d="M55 22c20 18 24 44 20 70" />
        <path d="M18 58c28-2 48 10 66 34" />
        {/* leaves */}
        <path d="M70 60c-16-14-34-18-50-16 8 18 26 30 50 16Z" fill="#2E6B57" opacity="0.18" stroke="none"/>
        <path d="M88 78c-10-18-26-28-44-30 4 20 18 36 44 30Z" fill="#2E6B57" opacity="0.14" stroke="none"/>
      </g>
    </svg>
  );
}

function LeafTopRight() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-28 w-28 sm:h-36 sm:w-36 opacity-80"
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <g opacity="0.9" stroke="#2E6B57" strokeWidth="6" strokeLinecap="round">
        <path d="M132 30c-34 6-50 26-58 48" />
        <path d="M105 22c-20 18-24 44-20 70" />
        <path d="M142 58c-28-2-48 10-66 34" />
        {/* leaves */}
        <path d="M90 60c16-14 34-18 50-16-8 18-26 30-50 16Z" fill="#2E6B57" opacity="0.18" stroke="none"/>
        <path d="M72 78c10-18 26-28 44-30-4 20-18 36-44 30Z" fill="#2E6B57" opacity="0.14" stroke="none"/>
      </g>
    </svg>
  );
}