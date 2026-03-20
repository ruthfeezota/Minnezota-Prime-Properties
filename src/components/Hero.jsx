import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-bg.jpg"; // Replace with your actual image path

/**
 * Minnesota Properties - Simple Navbar + Simple Hero
 * Updates:
 * ✅ Hero: no search, just headline + supporting copy + CTAs + background image
 * ✅ Navbar: smaller + simpler, "Request a Call Back" left, hamburger right
 * ✅ Drawer: NOT bigger, reduced borders, no boxed links, cleaner + less plain
 */

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const navLinks = [
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Listings", href: "/listings" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative">
      {/* ===================== NAVBAR (small + simple) ===================== */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-black/15 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-screen-2xl px-5 sm:px-6 py-3 flex items-center justify-between">
            {/* Left: Request a Call Back (small pill) */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] sm:text-xs font-semibold text-white hover:bg-white/15 transition"
            >
              Request a Call
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[12px]">
                →
              </span>
            </a>

            {/* Center: Brand (compact) */}
            <a href="/" className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/10">
                <div className="h-[10px] w-[10px] rotate-45 bg-white/85" />
              </div>
              <div className="leading-none text-center">
                <div className="text-[9px] uppercase tracking-[0.32em] text-white/70">
                  Minnesota
                </div>
                <div className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                  Properties
                </div>
              </div>
            </a>

            {/* Right: Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className=""
            >
              <span className="block h-[2px] w-[18px] bg-white" />
              <span className="mt-[5px] block h-[2px] w-[18px] bg-white" />
              <span className="mt-[5px] block h-[2px] w-[18px] bg-white" />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* ===================== DRAWER (clean + minimal) ===================== */}
        <aside
          className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(180deg, #0F3B35 0%, #082923 100%)",
          }}
          aria-hidden={!menuOpen}
        >
          {/* Header */}
          <div className="px-6 pt-6 flex items-center justify-between">
            <div className="text-white">
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                Menu
              </div>
              <div className="text-lg font-bold tracking-tight">
                Minnesota Properties
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white/70 hover:text-white text-xl transition"
            >
              ✕
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 mt-6 h-px bg-white/10" />

          {/* Nav */}
          <nav className="px-6 py-10">
            <ul className="space-y-6">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between text-white text-xl font-semibold tracking-tight transition"
                  >
                    {l.label}
                    <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-12 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F3B35] hover:opacity-95 transition"
            >
              Request a Call →
            </a>

            {/* Tiny trust nudge (no borders, not loud) */}
            <p className="mt-5 text-[11px] leading-relaxed text-white/60 text-center">
              Fast replies • Local guidance • Zero pressure
            </p>
          </nav>
        </aside>
      </header>

      {/* ===================== HERO (simple) ===================== */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background image (swap this path) */}
        <img
          src={heroImage}
          alt="Modern homes in Minnesota"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Orange overlay + subtle geometry (matches screenshot vibe) */}
        <div className="absolute inset-0 bg-[#0F3B35]/75" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 pt-28 sm:pt-48">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/85">
              Minnesota Properties
            </p>

            <h1 className="mt-5 text-[42px] sm:text-[68px] md:text-[86px] font-extrabold tracking-tight leading-[0.9] uppercase">
              Find Your Next
              <br />
              Place to Call Home
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
              A simple, guided real-estate experience for buyers and sellers across
              Minnesota. Clear steps, honest answers, and zero pressure.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/listings"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F3B35] hover:opacity-95 transition"
              >
                View Listings <span className="ml-2">→</span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Schedule a Call
              </a>
            </div>

            <p className="mt-6 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/70">
              Local expertise • Fast communication • Smooth closings
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}