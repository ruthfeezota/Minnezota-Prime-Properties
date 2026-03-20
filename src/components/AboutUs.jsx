import React from "react";
import sample from "../assets/hero-bg.jpg";

export default function AboutUs() {
  return (
    <section className="overflow-hidden bg-[#f5f5f3] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="rounded-full bg-white px-4 py-2 text-sm text-black shadow-sm ring-1 ring-black/5">
            • Who we are?
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h2 className="text-[2.1rem] font-medium leading-[1.06] tracking-[-0.05em] text-[#E46C3A] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.4rem]">
            We are a team of passionate expert{" "}
            <span className="text-black">creating</span>
            <br />
            <span className="text-black">
              thoughtful, sustainable, and inspiring spaces.
            </span>
            <br />
            from search to settlement,{" "}
            <span className="text-[#E46C3A]">we work with purpose</span>
            <br />
            <span className="text-[#E46C3A]">and precision to bring</span>{" "}
            <span className="text-black">your dream house to life.</span>
          </h2>
        </div>

        <div className="relative mt-12 flex justify-center">
          <div className="flex items-center">
            <HouseImage
              src={sample}
              alt="House one"
              className="translate-y-1"
            />
            <HouseImage
              src={sample}
              alt="House two"
              className="-ml-3 z-10"
            />
            <HouseImage
              src={sample}
              alt="House three"
              className="-ml-3 translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HouseImage({ src, alt, className = "" }) {
  return (
    <div
      className={`h-24 w-[145px] overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:h-28 sm:w-[190px] md:h-32 md:w-[220px] ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}