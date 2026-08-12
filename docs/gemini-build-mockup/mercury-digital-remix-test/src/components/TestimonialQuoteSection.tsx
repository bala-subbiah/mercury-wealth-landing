/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const sansStyle = { fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' };

interface TestimonialQuoteSectionProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  imageSrc?: string;
  className?: string;
}

export function TestimonialQuoteSection({
  quote = "Mercury brings multi-custodial data, real-time analytics, and market intelligence into one seamless, elegant platform built for advisors and asset managers.",
  authorName = "Oscar Chan",
  authorRole = "Co-Founder & CEO — Mercury",
  imageSrc = "https://res.cloudinary.com/q1hzzizh/image/upload/v1786290331/Building_ptp6c8.png",
  className = "",
}: TestimonialQuoteSectionProps) {
  // Format quote cleanly
  const rawQuote = quote.trim().replace(/^[“"']|[”"']$/g, '');

  return (
    <section className={`relative w-full bg-[#fcfcfb] text-[#1a1a1a] pt-20 lg:pt-32 pb-8 lg:pb-12 px-8 sm:px-16 lg:px-24 border-none overflow-hidden ${className}`}>
      <div className="max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch justify-start">
          
          {/* Left Architectural Image Framing */}
          <div className="lg:col-span-5 w-full flex justify-start items-start">
            <div className="aspect-[3/4] max-h-[70vh] rounded-none overflow-hidden shadow-sm border border-slate-200/60 w-full bg-[#e2decb]">
              <img
                src={imageSrc}
                alt="Editorial architectural framing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-none"
              />
            </div>
          </div>

          {/* Right Column: Bold Modern Sans-Serif Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start text-left w-full h-full py-1">
            
            <blockquote 
              className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0d0d0d] leading-[1.18] tracking-tight max-w-2xl text-left"
              style={sansStyle}
            >
              <span className="text-[#0d0d0d]">“</span>
              {rawQuote}
              <span className="text-[#0d0d0d]">”</span>
            </blockquote>

            {/* Bottom Signature / Attribution Block - Positioned at bottom left */}
            {(authorName || authorRole) && (
              <div className="mt-12 sm:mt-16 lg:mt-24 pt-4" style={sansStyle}>
                {authorName && (
                  <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-wide block">
                    {authorName}
                  </span>
                )}
                {authorRole && (
                  <span className="text-xs sm:text-sm text-slate-500 font-normal mt-1 block">
                    {authorRole}
                  </span>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default TestimonialQuoteSection;

