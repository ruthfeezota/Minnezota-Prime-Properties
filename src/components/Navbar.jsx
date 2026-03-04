import React, { useEffect, useState } from "react";

/**
 * Minnesota Properties Navbar
 * Vibe: earthy + editorial + calm luxury
 * Colors:
 *  - Pine: #0F3B35
 *  - Cream: #F4F1E8
 *  - Terracotta: #E46C3A
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy + IA (matches your goals: simple, lead capture, trust, booking)
  const links = [
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Listings", href: "/listings" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top utility bar (trust + contact + socials) */}
      <div className="hidden md:block bg-[#0F3B35] text-white">
        <div className="mx-auto max-w-screen-2xl px-6 py-2 flex items-center justify-between">
          <p className="text-[12px] tracking-wide text-white/85">
            Minnesota Properties: calm guidance for buying, selling, and investing.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="tel:+16125551234"
              className="text-[12px] font-semibold text-white/90 hover:text-white transition"
            >
              Call/Text: (612) 555-1234
            </a>
            <a
              href="mailto:hello@minnesotaproperties.com"
              className="text-[12px] font-semibold text-white/90 hover:text-white transition"
            >
              hello@minnesotaproperties.com
            </a>

            <div className="flex items-center gap-3 text-[12px] text-white/75">
              <a href="#" className="hover:text-white transition">
                IG
              </a>
              <a href="#" className="hover:text-white transition">
                FB
              </a>
              <a href="#" className="hover:text-white transition">
                LI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#F4F1E8]/90 backdrop-blur-md border-b border-black/10"
            : "bg-[#F4F1E8]"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <a href="/" className="flex items-center gap-3 min-w-[220px]">
              {/* Text-based logo (matches editorial vibe). Swap for image anytime. */}
              <div className="leading-none">
                <div className="text-[11px] uppercase tracking-[0.35em] text-[#0F3B35]/70">
                  Minnesota
                </div>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F3B35]">
                  Properties
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-2">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative px-3 py-2 text-sm font-semibold text-[#1F1F1F]/75 hover:text-[#0F3B35] transition"
                >
                  {item.label}
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[#E46C3A]/80 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Lead magnet / opt-in */}
              <a
                href="/resources#homebuyer-checklist"
                className="hidden sm:inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold text-[#0F3B35] hover:bg-white transition"
              >
                Get the Buyer Checklist
              </a>

              {/* Primary CTA */}
              <a
                href="/contact"
                className="hidden sm:inline-flex items-center rounded-full bg-[#0F3B35] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Schedule a Call
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white text-[12px]">
                  →
                </span>
              </a>

              {/* Mobile menu */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/60 hover:bg-white transition lg:hidden"
              >
                <span
                  className={`absolute h-[2px] w-5 transition-all duration-300 ${
                    open ? "rotate-45 bg-[#0F3B35]" : "-translate-y-[6px] bg-[#1F1F1F]"
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-5 transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100 bg-[#1F1F1F]"
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-5 transition-all duration-300 ${
                    open ? "-rotate-45 bg-[#0F3B35]" : "translate-y-[6px] bg-[#1F1F1F]"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Optional second row (desktop) - small trust line */}
          <div className="hidden lg:flex items-center justify-between pt-3">
            <p className="text-[12px] text-[#1F1F1F]/55">
              Local expertise. Clean process. No pressure.
            </p>
            <div className="flex items-center gap-4 text-[12px] text-[#1F1F1F]/55">
              <a href="/listings" className="hover:text-[#0F3B35] transition">
                View Featured Homes
              </a>
              <span className="text-[#1F1F1F]/25">•</span>
              <a href="/sell" className="hover:text-[#0F3B35] transition">
                What’s My Home Worth?
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,59,53,0.35), rgba(0,0,0,0.45))",
        }}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[88%] max-w-md border-l border-black/10 transition-transform duration-300 overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "radial-gradient(900px 600px at 20% 0%, rgba(228,108,58,0.10), transparent 55%), radial-gradient(900px 600px at 90% 20%, rgba(15,59,53,0.10), transparent 55%), #F4F1E8",
        }}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div className="px-8 pt-7">
          <div className="flex items-center justify-between">
            <div className="leading-none">
              <div className="text-[11px] uppercase tracking-[0.35em] text-[#0F3B35]/70">
                Minnesota
              </div>
              <div className="text-lg font-extrabold tracking-tight text-[#0F3B35]">
                Properties
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/60 text-[#1F1F1F]/70 hover:text-[#E46C3A] hover:border-[#E46C3A]/40 hover:bg-white transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 1 0-1.4 1.4l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4Z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 h-px w-full bg-black/10" />
        </div>

        {/* Drawer links */}
        <div className="px-8 py-10">
          <ul className="space-y-7">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group block"
                >
                  <div className="flex items-end justify-between gap-6">
                    <span className="text-4xl font-extrabold uppercase tracking-tight text-[#0F3B35] group-hover:text-[#E46C3A] transition-colors">
                      {item.label}
                    </span>

                    <span
                      className="hidden sm:block text-4xl font-extrabold uppercase tracking-tight text-transparent"
                      style={{
                        WebkitTextStroke: "1px rgba(15,59,53,0.18)",
                        lineHeight: 1,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-4 h-px w-full bg-black/10 group-hover:bg-[#E46C3A]/40 transition-colors" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="mt-10 grid gap-3">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0F3B35] px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Schedule a Call <span className="ml-2">→</span>
            </a>

            <a
              href="/resources#homebuyer-checklist"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#0F3B35] hover:bg-white transition"
            >
              Get the Buyer Checklist
            </a>
          </div>

          {/* Contact + socials */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="text-[#1F1F1F]/70 text-sm">
              Questions?{" "}
              <a
                href="tel:+16125551234"
                className="font-semibold text-[#0F3B35] hover:text-[#E46C3A] transition"
              >
                (612) 555-1234
              </a>
            </p>
            <p className="mt-2 text-[#1F1F1F]/70 text-sm">
              Email:{" "}
              <a
                href="mailto:hello@minnesotaproperties.com"
                className="font-semibold text-[#0F3B35] hover:text-[#E46C3A] transition"
              >
                hello@minnesotaproperties.com
              </a>
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0F3B35] hover:border-[#E46C3A]/40 hover:text-[#E46C3A] transition"
                href="#"
              >
                IG
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0F3B35] hover:border-[#E46C3A]/40 hover:text-[#E46C3A] transition"
                href="#"
              >
                FB
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0F3B35] hover:border-[#E46C3A]/40 hover:text-[#E46C3A] transition"
                href="#"
              >
                LI
              </a>
            </div>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-[#1F1F1F]/45">
            Clear steps. Better decisions.
          </p>
        </div>
      </aside>
    </header>
  );
}