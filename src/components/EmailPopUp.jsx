import React, { useState, useEffect } from "react";
import popupImage from "../assets/ShangiDarx.jpg";

export default function MajesticBraidsPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("majesticBraidsPopupDate");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("majesticBraidsPopupDate", today);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 p-4">
      <div className="relative mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-white text-4xl leading-none hover:text-[#FB823E] z-20"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Top title */}
        {/* <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
          <div className="mx-auto inline-flex items-center rounded-full bg-black/60 backdrop-blur px-4 py-2 border border-white/15 mt-10">
            <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60">
              Upcoming Event
            </span>
          </div>
        </div> */}

        {/* Full image */}
        <img
          src={popupImage}
          alt="Upcoming events"
          className="h-full w-full object-cover"
        />

        {/* Optional subtle bottom fade for readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
    </div>
  );
}
