import React, { useEffect, useMemo, useState } from "react";

/**
 * FeaturedProperty (with modal popup)
 * - Clicking a card opens a modal with more details + features
 * - Esc closes, click backdrop closes
 * - Keeps your existing look and adds a clean, modern modal
 */

export default function FeaturedProperty() {
  const properties = useMemo(
    () => [
      {
        id: "featured-1",
        title: "Panoramic View",
        img: "/images/featured-1.jpg",
        beds: 3,
        baths: 3,
        sqft: "2300 Sqft",
        price: "$489,000",
        address: "123 Lakeview Dr, Minneapolis, MN",
        description:
          "Bright, open layout with a view that does all the talking. Updated finishes, great flow for entertaining, and a cozy vibe for everyday living.",
        features: [
          "Updated kitchen + quartz counters",
          "Large windows + natural light",
          "Finished lower level",
          "2-car garage",
          "Backyard patio",
          "Near parks + trails",
        ],
        href: "/listings/featured-1",
      },
      {
        id: "featured-2",
        title: "Modern Ranch",
        img: "/images/featured-2.jpg",
        beds: 4,
        baths: 2,
        sqft: "2100 Sqft",
        price: "$525,000",
        address: "55 Cedar Ridge Ln, St. Paul, MN",
        description:
          "Single-level comfort with modern touches. Clean lines, smart storage, and a layout that feels easy the moment you walk in.",
        features: [
          "Single-level living",
          "Open concept great room",
          "Primary suite + walk-in closet",
          "New flooring",
          "Fenced yard",
          "Quiet cul-de-sac",
        ],
        href: "/listings/featured-2",
      },
      {
        id: "featured-3",
        title: "Classic Charm",
        img: "/images/featured-3.jpg",
        beds: 3,
        baths: 2,
        sqft: "1950 Sqft",
        price: "$439,000",
        address: "890 Summit Ave, St. Paul, MN",
        description:
          "Character, warmth, and thoughtful updates. Classic details with just the right amount of modern polish.",
        features: [
          "Hardwood floors",
          "Original trim + character",
          "Updated bathrooms",
          "Sunroom / reading nook",
          "Walkable neighborhood",
          "Great schools nearby",
        ],
        href: "/listings/featured-3",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState(null);
  const selected = properties.find((p) => p.id === openId) || null;

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selected]);

  // Esc to close
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenId(null);
    };
    if (selected) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="relative overflow-hidden bg-[#F4F1E8]">
      {/* Torn top edge */}
      <TornTop />

      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3A2A22] uppercase">
            Featured Property
          </h2>

          <a
            href="/listings"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E4A43] hover:opacity-80 transition"
          >
            View All
          </a>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {properties.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpenId(p.id)}
              className="group block text-left"
              aria-label={`Open details for ${p.title}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-black/10 bg-white shadow-[0_16px_30px_rgba(0,0,0,0.10)]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <div className="mt-4">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3A2A22]">
                  {p.title}
                </div>

                {/* Pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>{p.beds} bedrooms</Pill>
                  <Pill>{p.baths} baths</Pill>
                  <Pill>{p.sqft}</Pill>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom split bars hint (like screenshot) */}
      <div className="h-10 bg-[#DDE7D8]" />
      <div className="h-14 bg-[#1E4A43]" />

      {/* Modal */}
      <PropertyModal
        open={!!selected}
        property={selected}
        onClose={() => setOpenId(null)}
      />
    </section>
  );
}

/* ------------------------- Modal ------------------------- */

function PropertyModal({ open, property, onClose }) {
  if (!open || !property) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Panel */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#F4F1E8] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-black/10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#1E4A43] font-bold">
                Property Details
              </div>
              <div className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-[#3A2A22]">
                {property.title}
              </div>
              <div className="mt-1 text-sm text-[#3A2A22]/70">
                {property.address}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/5 text-[#3A2A22] hover:bg-black/10 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-auto md:h-full w-full bg-white">
                <img
                  src={property.img}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Price chip */}
              <div className="absolute left-4 top-4 rounded-full bg-[#1E4A43] px-4 py-2 text-sm font-extrabold text-white shadow">
                {property.price}
              </div>
            </div>

            {/* Details */}
            <div className="px-5 sm:px-7 py-6">
              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                <PillDark>{property.beds} Beds</PillDark>
                <PillDark>{property.baths} Baths</PillDark>
                <PillDark>{property.sqft}</PillDark>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-[#3A2A22]/80">
                {property.description}
              </p>

              {/* Features */}
              <div className="mt-6">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3A2A22]">
                  Features
                </div>

                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#3A2A22]/80">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#1E4A43]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={property.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1E4A43] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  View Listing <span className="ml-2">→</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold text-[#3A2A22] hover:bg-white transition"
                >
                  Request a Tour
                </a>
              </div>

              <p className="mt-4 text-[11px] text-[#3A2A22]/60">
                Tip: Press <span className="font-semibold">Esc</span> to close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------- Bits ------------------------- */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/15 bg-white/40 px-3 py-1 text-xs font-semibold text-[#3A2A22]/80">
      {children}
    </span>
  );
}

function PillDark({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#1E4A43]/10 px-3 py-1 text-xs font-semibold text-[#1E4A43] border border-[#1E4A43]/15">
      {children}
    </span>
  );
}

function TornTop() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 w-full">
      {/* dark strip behind torn edge */}
      <div className="h-12 bg-[#1E4A43]" />
      {/* torn paper */}
      <svg
        viewBox="0 0 1440 120"
        className="-mt-1 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,70 C90,95 170,40 260,62 C345,83 420,35 520,58 C615,80 690,48 770,62 C860,78 940,35 1040,55 C1130,76 1210,50 1290,62 C1370,73 1410,60 1440,52 L1440,120 L0,120 Z"
          fill="#F4F1E8"
        />
      </svg>
    </div>
  );
}