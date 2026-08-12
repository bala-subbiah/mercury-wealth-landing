/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: PageId) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleLinkClick = (linkName: string) => {
    if (!setActivePage) return;

    const name = linkName.toLowerCase();
    if (name.includes('about') || name.includes('advisory')) {
      setActivePage('about');
    } else if (name.includes('demo') || name.includes('contact')) {
      setActivePage('contact');
    } else if (name.includes('product') || name.includes('features') || name.includes('security')) {
      setActivePage('mercury');
    } else if (name.includes('legal') || name.includes('terms') || name.includes('privacy')) {
      setActivePage('customers');
    } else {
      setActivePage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040B15] text-[#A1A1AA] font-sans relative overflow-hidden select-none selection:bg-white selection:text-black border-0 border-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pt-16 lg:pt-20 pb-12">
        
        {/* SECTION 1: Page Site Map - Minimalist 3-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-12 pb-16 md:pb-20">
          
          {/* Column 1: Overview */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 font-semibold">
              Overview
            </h3>
            <ul className="space-y-3 font-sans text-sm font-light">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('Product')}
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer bg-transparent border-none p-0"
                >
                  <span>Product</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('Features')}
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer bg-transparent border-none p-0"
                >
                  <span>Features</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('Security')}
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer bg-transparent border-none p-0"
                >
                  <span>Security</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 font-semibold">
              Company
            </h3>
            <ul className="space-y-3 font-sans text-sm font-light">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('About')}
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer bg-transparent border-none p-0"
                >
                  <span>About</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 font-semibold">
              Contact
            </h3>
            <ul className="space-y-3 font-sans text-sm font-light">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('Request Demo')}
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer bg-transparent border-none p-0"
                >
                  <span>Request Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </button>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-white" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION 2: Giant Statement Brand Text */}
        <div className="py-16 md:py-20 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center select-none cursor-default py-2">
            <h1
              className="font-black uppercase tracking-tighter transition-all duration-700 leading-none text-white text-[13vw] sm:text-[14vw] lg:text-[15vw]"
              style={{
                fontSize: 'clamp(4rem, 15vw, 13.5rem)',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              MERCURY
            </h1>
          </div>
        </div>

        {/* SECTION 3: Left-aligned Copyright Notice */}
        <div className="pt-8 md:pt-12 pb-2 text-left font-sans font-normal text-xs text-white/40">
          © 2026 MERCURY AI LIMITED. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
}
