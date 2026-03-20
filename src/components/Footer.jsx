import React from "react";
import sample from "../assets/hero-bg.jpg";

export default function Footer() {
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "PROPERTY", href: "/listings" },
    { label: "BLOG", href: "/blog" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0F3B35] text-white">
      {/* Top bar */}
      <div className="flex flex-col gap-6 px-6 py-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-14">
        {/* Left */}
        <div className="text-[0.95rem] uppercase tracking-tight text-white/80">
          © 2026 MINNEZOTA PROPERTIES. ALL RIGHTS RESERVED.
        </div>

        {/* Center nav */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-[0.95rem] uppercase tracking-tight text-white sm:gap-8 md:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-black/55"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right socials */}
<div className="flex items-center gap-5 lg:justify-end text-white/80">
  <SocialIcon href="#" label="Facebook">f</SocialIcon>
  <SocialIcon href="#" label="Instagram">◎</SocialIcon>
  <SocialIcon href="#" label="X">𝕏</SocialIcon>
  <SocialIcon href="#" label="Dribbble">◉</SocialIcon>
</div>
      </div>

      {/* Large image area */}
     
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full text-black transition hover:opacity-60"
    >
      <span className="text-[1.7rem] leading-none">{children}</span>
    </a>
  );
}