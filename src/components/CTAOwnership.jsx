import React from "react";
import sample from "../assets/hero-bg.jpg";

/**
 * Newsletter / CTA section
 *
 * Put your image at:
 * /public/images/property-newsletter.jpg
 *
 * Or replace the src below with your own image path.
 */

export default function CTAOwnership() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="relative mx-auto w-full max-w-[1800px] overflow-hidden rounded-[28px]">
        {/* Background image */}
        <img
          src={sample}
          alt="Modern property exterior"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative flex min-h-[420px] items-center justify-center px-6 py-14 sm:px-10 md:min-h-[500px] md:px-16 lg:min-h-[580px]">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            <h2 className="max-w-[1100px] text-white font-medium leading-[0.95] tracking-[-0.06em] text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.3rem]">
              Stay Updated on Latest Property
            </h2>

            <p className="mt-5 text-white/85 text-sm sm:text-base md:text-[1.05rem]">
              Never miss a beat and stay update
            </p>

            {/* Email pill form */}
            <form className="mt-10 flex w-full max-w-[760px] flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:rounded-full sm:bg-white sm:p-[4px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[64px] w-full rounded-full border-0 bg-white px-7 text-[1.05rem] text-black placeholder:text-black/55 outline-none sm:flex-1 sm:rounded-full sm:bg-transparent"
              />

              <button
                type="submit"
                className="h-[64px] rounded-full bg-[#b98200] px-10 text-[1.05rem] font-medium text-white transition hover:brightness-95 sm:min-w-[210px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}