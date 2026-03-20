import React from "react";
import sample from "../assets/hero-bg.jpg";

export default function DiscoverProperties() {
  const properties = [
    {
      id: 1,
      title: "Willowcrest Villas",
      location: "Bogor Tengah",
      price: "$350,000",
      beds: 3,
      baths: 2,
      sqft: "2500 Sqft",
      img: sample,
    },
    {
      id: 2,
      title: "Serenity Heights Villas",
      location: "Bogor Tengah",
      price: "$350,000",
      beds: 2,
      baths: 2,
      sqft: "2000 Sqft",
      img: sample,
    },
    {
      id: 3,
      title: "Minnezota Properties Heights",
      location: "Bogor Tengah",
      price: "$750,000",
      beds: 3,
      baths: 2,
      sqft: "1800 Sqft",
      img: sample,
    },
    {
      id: 4,
      title: "Veloura Estate",
      location: "Bogor Tengah",
      price: "$450,000",
      beds: 5,
      baths: 2,
      sqft: "1700 Sqft",
      img: sample,
    },
    {
      id: 5,
      title: "The Grandstone",
      location: "Bogor Tengah",
      price: "$250,000",
      beds: 2,
      baths: 2,
      sqft: "2500 Sqft",
      img: sample,
    },
    {
      id: 6,
      title: "Celestia Homes",
      location: "Bogor Tengah",
      price: "$280,000",
      beds: 3,
      baths: 2,
      sqft: "1500 Sqft",
      img: sample,
    },
  ];

  return (
    <section className="bg-[#f7f7f6] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <h2 className="max-w-[1100px] text-black font-medium leading-[0.95] tracking-[-0.06em] text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem]">
              Discover Properties
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-md text-black/60">
            Minnezota Properties is a premium real estate brand that blends modern design with seamless
            experiences. We help you discover elegant, high-quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <div key={p.id} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Heart icon */}
                {/* <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition">
                  ♡
                </button> */}
              </div>

              {/* Info */}
              <div className="mt-4">
                {/* Title + Price */}
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-black leading-tight">
                    {p.title}
                  </h3>

                  <span className="text-lg font-semibold text-black">
                    {p.price}
                  </span>
                </div>

                {/* Location */}
                <div className="mt-2 flex items-center gap-2 text-sm text-black/60">
                  <span>📍</span>
                  {p.location}
                </div>

                {/* Stats */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Stat>{p.beds} Beds</Stat>
                  <Stat>{p.baths} Baths</Stat>
                  <Stat>{p.sqft}</Stat>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function Stat({ children }) {
  return (
    <span className="rounded-lg border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}