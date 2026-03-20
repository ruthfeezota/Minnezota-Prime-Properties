import React from "react";
import sample from "../assets/hero-bg.jpg";

export default function ContactSplitSection() {
  return (
    <section className="">
      <div className="grid min-h-[720px] grid-cols-1 overflow-hidden bg-[#1f1f1f] lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[360px] lg:min-h-full">
          <img
            src={sample}
            alt="Modern cabin home"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center bg-[#1f1f1f] px-6 py-10 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="w-full">
            <h2 className="max-w-[680px] text-[2.2rem] font-light leading-[1.15] tracking-[-0.03em] text-white sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]">
              Still haven’t found what you’re looking for?
            </h2>

            <form className="mt-10 space-y-6">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-[15px] font-normal text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-14 w-full border-none bg-[#3a3a3a] px-5 text-[16px] text-white placeholder:text-[#b9b9b9] outline-none ring-0"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[15px] font-normal text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-14 w-full border-none bg-[#3a3a3a] px-5 text-[16px] text-white placeholder:text-[#b9b9b9] outline-none ring-0"
                  />
                </div>
              </div>

              {/* Intent */}
              <div>
                <label className="mb-3 block text-[15px] font-normal text-white">
                  I Want to
                </label>
                <select className="h-14 w-full appearance-none border-none bg-[#3a3a3a] px-5 text-[16px] text-[#d3d3d3] outline-none ring-0">
                  <option>Buy Property</option>
                  <option>Sell Property</option>
                  <option>Rent Property</option>
                  <option>Book a Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-[15px] font-normal text-white">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write here..."
                  className="min-h-[170px] w-full resize-none border-none bg-[#3a3a3a] px-5 py-5 text-[16px] text-white placeholder:text-[#b9b9b9] outline-none ring-0"
                />
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center rounded-sm bg-white text-[18px] font-medium text-black transition hover:bg-[#f2f2f2]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}