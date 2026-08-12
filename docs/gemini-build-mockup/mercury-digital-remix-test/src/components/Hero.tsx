/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Shield, Cpu, Compass, Globe } from 'lucide-react';
import { PageId } from '../types';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#fcfcfb] pt-12 pb-20 sm:py-24 px-6 sm:px-12 border-none">
      {/* Background video - metropolitan city daily life */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.2]"
        >
          <source
            src="https://res.cloudinary.com/q1hzzizh/video/upload/v1785262328/hong-kong-cityscape-night-city-lights-metropolitan-twilight-3840x2160-449_gbteet.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/q1hzzizh/video/upload/v1785084734/HKview-2k_dbghse.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle overlay gradient to blend with off-white background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfb]/30 via-transparent to-[#fcfcfb]" />
      </div>

      {/* Decorative background grid lines - ultra-subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay z-1">
        <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Columns: Text Content */}
        <div className="max-w-4xl space-y-8">
          
          {/* Left Column - Copy & CTA Block */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] text-brand-dark font-light leading-[0.98] tracking-tight"
              >
                Creating intelligent systems <br />
                built to protect sovereign wealth.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light max-w-2xl"
            >
              Mercury combines institutional-grade multi-agent financial reasoning, zero-trust cryptographic custody wrappers, and active multi-jurisdictional yield optimization. Engineered exclusively for private family offices and sovereign capital allocators.
            </motion.p>

            {/* Custom interactive action links with Norell button design */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center space-x-2 bg-brand-dark text-white font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase py-4 px-8 overflow-hidden transition-all duration-500 cursor-pointer border border-brand-dark"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Initiate Intake Briefing
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="absolute inset-0 bg-brand-muted scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
              </button>

              <button
                onClick={() => onNavigate('mercury')}
                className="group relative inline-flex items-center justify-center space-x-2 border border-brand-border bg-transparent text-brand-dark font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase py-4 px-8 overflow-hidden transition-all duration-500 cursor-pointer"
              >
                <span className="relative z-10">Explore Platform Tech</span>
                <div className="absolute inset-0 bg-brand-dark/5 scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

