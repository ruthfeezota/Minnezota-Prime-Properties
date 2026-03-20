import React from "react";
import sample from "../assets/hero-bg.jpg";

export default function ContactSplitSection() {
  return (
    <section>
      <div className="grid min-h-[560px] grid-cols-1 overflow-hidden bg-[#1f1f1f] lg:grid-cols-2">
        
        {/* Left Image */}
        <div className="relative min-h-[300px] lg:min-h-full">
          <img
            src={sample}
            alt="Modern cabin home"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center bg-[#1f1f1f] px-6 py-8 sm:px-8 md:px-10 lg:px-12">
          <div className="w-full max-w-[620px]">
            
            {/* Title */}
            <h2 className="max-w-[1100px] text-white font-medium leading-[0.95] tracking-[-0.06em] text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem]">
              Still haven’t found what you’re looking for?
            </h2>

            <form className="mt-8 space-y-5">
              
              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-12 w-full bg-[#3a3a3a] px-4 text-sm text-white placeholder:text-[#b9b9b9] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-12 w-full bg-[#3a3a3a] px-4 text-sm text-white placeholder:text-[#b9b9b9] outline-none"
                  />
                </div>
              </div>

              {/* Intent */}
              <div>
                <label className="mb-2 block text-sm text-white">
                  I Want to
                </label>
                <select className="h-12 w-full bg-[#3a3a3a] px-4 text-sm text-[#d3d3d3] outline-none">
                  <option>Buy Property</option>
                  <option>Sell Property</option>
                  <option>Rent Property</option>
                  <option>Book a Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-white">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write here..."
                  className="min-h-[120px] w-full resize-none bg-[#3a3a3a] px-4 py-3 text-sm text-white placeholder:text-[#b9b9b9] outline-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="h-[64px] rounded-full bg-[#E46C3A] px-10 text-[1.05rem] font-medium text-white transition hover:brightness-95 sm:min-w-[210px]"
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