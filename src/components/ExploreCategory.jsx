import React from "react";

export default function ExploreCategory() {
  const items = [
    { label: "Apartment", icon: <IconApartment /> },
    { label: "Private House", icon: <IconHouse /> },
    { label: "Townhouse", icon: <IconTownhouse /> },
    { label: "Office Spaces", icon: <IconOffice /> },
    { label: "Private Shop", icon: <IconShop /> },
    { label: "Mansion", icon: <IconMansion /> },
  ];

  return (
    <section className="relative bg-[#1E4A43] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          EXPLORE CATEGORY
        </h2>

        {/* Grid */}
        <div className="mt-12 max-w-5xl mx-auto border border-white/30">
          <div className="grid grid-cols-3">

            {items.map((item, index) => {
              const isRight = (index + 1) % 3 === 0;
              const isBottomRow = index >= 3;

              return (
                <div
                  key={item.label}
                  className={`
                    flex flex-col items-center justify-center
                    h-[160px] text-center
                    border-white/30
                    ${!isRight ? "border-r" : ""}
                    ${!isBottomRow ? "border-b" : ""}
                  `}
                >
                  <div className="mb-4 text-white/70">
                    <div className="w-8 h-8">{item.icon}</div>
                  </div>

                  <p className="uppercase text-sm tracking-[0.15em] font-bold text-white">
                    {item.label}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

/* Icons */

function IconApartment() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 20V6l8-3 8 3v14" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function IconHouse() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 11l8-6 8 6v9H4z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function IconTownhouse() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M3 11l4-3 4 3 4-3 4 3v9H3z" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function IconOffice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M6 20V5l6-2 6 2v15" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M9 9h1M9 12h1M14 9h1M14 12h1" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function IconShop() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 9l2-4h12l2 4v11H4z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function IconMansion() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 11l8-5 8 5v9H4z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 20v-5h8v5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}