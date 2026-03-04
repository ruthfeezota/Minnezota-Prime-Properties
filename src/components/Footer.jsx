import React from "react";

/**
 * Footer (matches reference vibe)
 * - Background image (desert/sand)
 * - Left: logo + short copy
 * - Center: nav links
 * - Right: social icons in circles
 * - Bottom: divider + copyright
 *
 * Put your footer background at:
 *   /public/images/footer-bg.jpg
 * And optionally a logo at:
 *   /public/images/logo-mark.svg
 */

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Property", href: "/listings" },
    { label: "Mortgage", href: "/mortgage" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          {/* Left: logo + copy */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/15">
                {/* Simple mark (swap with your logo if you want) */}
                <div className="h-3 w-3 rotate-45 bg-white/80" />
              </div>
              <div className="leading-none">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                  Minnesota
                </div>
                <div className="text-lg font-extrabold tracking-tight">
                  Properties
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm text-white/75 leading-relaxed">
              Trusted partner in real estate success. Connecting you with homes
              that fit your lifestyle. Move with confidence and clarity.
            </p>
          </div>

          {/* Center: nav */}
          <nav className="md:justify-self-center">
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/60">
              Explore
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-widest text-white/80">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-white transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: socials */}
          <div className="md:justify-self-end">
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/60 md:text-right">
              Social Media
            </div>

            <div className="mt-4 flex gap-3 md:justify-end">
              <SocialIcon href="#" label="Facebook">
                f
              </SocialIcon>
              <SocialIcon href="#" label="X">
                x
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                in
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                ⦿
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/25" />

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Minnesota Properties. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-white/85 hover:bg-white/15 hover:text-white transition"
    >
      <span className="text-xs font-bold uppercase">{children}</span>
    </a>
  );
}