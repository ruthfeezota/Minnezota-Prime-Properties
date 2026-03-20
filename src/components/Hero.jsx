import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-bg.jpg";

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
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full">
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-4 sm:px-6">
            {/* Left CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium text-white transition hover:bg-white/15 sm:text-xs"
            >
              Request a Call
              <span className="text-sm">→</span>
            </a>

            {/* Brand */}
            <a href="/" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur-sm">
                <div className="h-2.5 w-2.5 rotate-45 bg-white/85" />
              </div>

              <div className="leading-none text-center">
                <div className="text-[9px] uppercase tracking-[0.38em] text-white/65">
                  Minnezota
                </div>
                <div className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  Properties
                </div>
              </div>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="group"
            >
              <span className="block h-[2px] w-6 bg-white transition group-hover:opacity-80" />
              <span className="mt-[5px] block h-[2px] w-6 bg-white transition group-hover:opacity-80" />
              <span className="mt-[5px] block h-[2px] w-6 bg-white transition group-hover:opacity-80" />
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

        {/* Drawer */}
        <aside
          className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(180deg, #0F3B35 0%, #082923 100%)",
          }}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="text-white">
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                Menu
              </div>
              <div className="text-lg font-bold tracking-tight">
                Minnezota Properties
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-xl text-white/70 transition hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="mx-6 mt-6 h-px bg-white/10" />

          <nav className="px-6 py-10">
            <ul className="space-y-6">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between text-xl font-semibold tracking-tight text-white transition"
                  >
                    {l.label}
                    <span className="translate-x-[-6px] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-12 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F3B35] transition hover:opacity-95"
            >
              Request a Call →
            </a>

            <p className="mt-5 text-center text-[11px] leading-relaxed text-white/60">
              Fast replies • Local guidance • Zero pressure
            </p>
          </nav>
        </aside>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Modern homes in Minnesota"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Softer cinematic overlay */}
        <div className="absolute inset-0 bg-[#0F3B35]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-2xl items-center px-6 pb-16 pt-28 sm:px-8 md:px-10 lg:px-14">
          <div className="max-w-3xl text-white">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/75 sm:text-xs">
              Minnezota Properties
            </p>

            <h1 className="mt-5 text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4rem] md:text-[5.2rem] lg:text-[6.5rem]">
              Find your next
              <br />
              place to call home
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              A thoughtful real estate experience for buyers and sellers across
              Minnesota, with clear guidance, honest communication, and a steady
              hand from first tour to final closing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/listings"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F3B35] transition hover:opacity-95"
              >
                View Listings
                <span className="ml-2">→</span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Schedule a Call
              </a>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-white/65 sm:text-xs">
              Local expertise • clear process • smooth closings
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}