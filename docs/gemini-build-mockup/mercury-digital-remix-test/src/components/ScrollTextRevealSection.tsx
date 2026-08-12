import React from 'react';
import TestimonialQuoteSection from './TestimonialQuoteSection';

interface ScrollTextRevealSectionProps {
  quote?: string;
  imageSrc?: string;
}

export function ScrollTextRevealSection({
  quote = "“Mercury brings multi-custodial data, real-time analytics, and market intelligence into one seamless, elegant platform built for advisors and asset managers.”",
  imageSrc = "https://res.cloudinary.com/q1hzzizh/image/upload/v1786290331/Building_ptp6c8.png",
}: ScrollTextRevealSectionProps) {
  return (
    <TestimonialQuoteSection
      quote={quote}
      imageSrc={imageSrc}
    />
  );
}


