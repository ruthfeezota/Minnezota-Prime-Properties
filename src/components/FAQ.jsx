import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What documents are required to get pre-approved?",
      a: (
        <>
          Documents required can differ depending on your circumstances, but
          most mortgage advisors will ask for the following:

          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
            <li>Copy of your passport</li>
            <li>Salary certificate</li>
            <li>Last six months payslips</li>
            <li>Latest credit card statements</li>
          </ul>
        </>
      ),
    },
    {
      q: "Is my information secure?",
      a: "Yes. Your information is handled securely and never shared without your permission.",
    },
    {
      q: "Can I get a mortgage if I live outside UAE?",
      a: "Yes, many lenders offer mortgages for international buyers depending on eligibility.",
    },
    {
      q: "What happens if I miss a mortgage payment?",
      a: "Contact your lender immediately. They may provide options before penalties escalate.",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[420px] md:h-auto">
          <img
            src="/images/faq-building.jpg"
            alt="Modern building"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FAQ PANEL */}
        <div className="bg-[#0F4A43] px-10 md:px-16 py-12 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>

          <div className="mt-10 border-t border-white/20 divide-y divide-white/20">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6">

                  {/* Question */}
                  <button
                    className="flex items-center justify-between w-full text-left"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                  >
                    <span className="uppercase tracking-wide text-sm font-bold text-white">
                      {item.q}
                    </span>

                    <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40 text-white">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="mt-4 text-sm text-white/80 leading-relaxed">
                      {item.a}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}