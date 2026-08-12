/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomersSection from './CustomersSection';
import { 
  Shield, 
  ShieldCheck, 
  Lock, 
  Eye, 
  Key, 
  Database, 
  Cpu, 
  FileText, 
  ChevronRight, 
  Sparkles, 
  Workflow, 
  ArrowRight, 
  Download, 
  Paperclip, 
  Globe,
  Settings,
  Code,
  Mic,
  TrendingUp, 
  Check, 
  Activity,
  FileSpreadsheet,
  FileUp,
  ExternalLink
} from 'lucide-react';

import nanoBananaImg from '../assets/images/moody_chair_shadow_1784485824180.jpg';
import kronosPipelineImg from '../assets/images/regenerated_image_1784490351915.jpg';
import aetherVaultImg from '../assets/images/regenerated_image_1784490355741.jpg';
import apexPortfolioImg from '../assets/images/regenerated_image_1784490359337.jpg';
import mojaveWallImg from '../assets/images/macbook_mojave_wall_1784491484294.jpg';

// Explicit styles to bypass the global font-sans serif override on technical dashboards
const sansStyle = { fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' };
const monoStyle = { fontFamily: '"JetBrains Mono", monospace' };

export default function MercuryEngine() {
  // Section 1: AI Prompt State
  const [promptText, setPromptText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');

  // Typing & Backspacing animation for AI Search Bar placeholder
  useEffect(() => {
    const sentences = [
      'Prepare last 3 months trade reports for FCN',
      'Show me Nvidia performance in Q2 earnings calls',
      'Compare the portfolio rebalance options for Anderson’s family.',
    ];

    if (isFocused || promptText !== '') {
      return;
    }

    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = () => {
      const currentSentence = sentences[sentenceIndex];

      if (!isDeleting) {
        // Typing: ~60ms per character (50-80ms range)
        charIndex++;
        setPlaceholderText(currentSentence.slice(0, charIndex));

        if (charIndex === currentSentence.length) {
          // Pause for ~2 seconds when sentence is fully typed
          isDeleting = true;
          timeoutId = setTimeout(animate, 2000);
        } else {
          timeoutId = setTimeout(animate, 60);
        }
      } else {
        // Backspacing: ~30ms per character
        charIndex--;
        setPlaceholderText(currentSentence.slice(0, charIndex));

        if (charIndex === 0) {
          // Switch to next sentence in infinite loop after deleting
          isDeleting = false;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          timeoutId = setTimeout(animate, 200);
        } else {
          timeoutId = setTimeout(animate, 30);
        }
      }
    };

    timeoutId = setTimeout(animate, 60);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isFocused, promptText]);

  return (
    <div className="bg-[#fafafa] min-h-screen border-none">
      
      {/* SECTION 1: Built for Finance. Thinks Like Your Firm. */}
      <section className="relative w-full min-h-screen lg:h-screen overflow-hidden flex flex-col items-center justify-center pt-20 pb-12 lg:py-0 px-6 sm:px-12 lg:px-16 bg-gradient-to-tr from-[#b7cde9] via-[#ded1f7] to-[#ebd2f0] border-none">
        {/* Ambient Blurred Mesh Layer covering full width with ethereal diffusion */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Top-left soft cyan-blue aura */}
          <div className="absolute -top-40 -left-20 w-[900px] h-[900px] bg-[#a3c4f3] rounded-full blur-[160px] opacity-80" />
          {/* Top-right soft lavender aura */}
          <div className="absolute -top-40 -right-20 w-[900px] h-[900px] bg-[#e0cbf5] rounded-full blur-[160px] opacity-80" />
          {/* Bottom center radiant warm peach glow blooming upwards */}
          <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-gradient-to-t from-[#ff893b] via-[#ffa35c] to-transparent rounded-[100%] blur-[140px] opacity-90" />
          {/* Subtle central radial light overlay for seamless feathering */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,152,86,0.35),transparent_60%)]" />
        </div>

        <div className="max-w-[1680px] w-full mx-auto relative z-10 text-center space-y-10 flex flex-col items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-dark font-light not-italic tracking-tight leading-tight max-w-4xl mx-auto">
            Built for Finance. <br />
            Thinks like your firm.
          </h1>

          {/* Main Prompt Input Card Container */}
          <div className="w-full max-w-[640px] mx-auto pt-2">
            {/* Main Prompt Input Card */}
            <div className="w-full bg-[#1c1c21] rounded-[20px] p-3.5 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-white/5 transition-all text-left">
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isFocused || promptText !== '' ? '' : placeholderText}
                rows={1}
                className="w-full bg-transparent text-gray-200 placeholder:text-gray-400 text-sm sm:text-base font-sans resize-none border-none outline-none focus:outline-none focus:ring-0 p-0 leading-normal"
              />

              {/* Bottom Action Bar */}
              <div className="flex justify-between items-center mt-3 pt-0.5">
                {/* Left Icons Group */}
                <div className="flex items-center space-x-4">
                  <button 
                    type="button" 
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5" 
                    title="Attachment"
                  >
                    <Paperclip className="w-[19px] h-[19px] stroke-[1.5]" />
                  </button>
                  <button 
                    type="button" 
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5" 
                    title="Web Search"
                  >
                    <Globe className="w-[19px] h-[19px] stroke-[1.5]" />
                  </button>
                  <button 
                    type="button" 
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5" 
                    title="Settings"
                  >
                    <Settings className="w-[19px] h-[19px] stroke-[1.5]" />
                  </button>
                  <button 
                    type="button" 
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5" 
                    title="Code"
                  >
                    <Code className="w-[19px] h-[19px] stroke-[1.5]" />
                  </button>
                </div>

                {/* Right Icon */}
                <button 
                  type="button" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5" 
                  title="Microphone"
                >
                  <Mic className="w-[19px] h-[19px] stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Built for Wealth Management Section */}
      <CustomersSection />

      {/* SECTION 4A: Your data is in safe hands (Gradient Midnight Blue Theme #040B15) */}
      <section className="bg-gradient-to-br from-[#040B15] via-[#091526] to-[#040B15] text-[#fcfcfb] py-24 px-6 sm:px-12 border-none">
        <div className="max-w-7xl mx-auto">
          
          {/* Part A: "Your data is in safe hands" responsive block matching design */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left copy column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-tight">
                  Your data is <br />
                  in safe hands.
                </h2>
                <p className="font-sans text-xs sm:text-sm text-blue-100/70 font-light leading-relaxed max-w-lg">
                  From encryption to access management, Mercury enforces rigorous standards to ensure your data stays secure, private, and compliant.
                </p>
              </div>


            </div>            {/* Right graphic column: Large minimalist architectural shadow photography display */}
            <div className="lg:col-span-7 h-[500px] sm:h-[600px] md:h-[680px] w-full relative rounded-none overflow-hidden border border-[#1b2f4d] shadow-2xl flex items-end justify-center">
              
              <div className="absolute inset-0 bg-[#040B15]">
                <img 
                  id="nano-banana-image"
                  src={nanoBananaImg} 
                  alt="Minimalist Moody Chair and Shadows" 
                  className="absolute inset-0 w-full h-full object-cover [object-position:center_70%] rounded-none opacity-100" 
                  referrerPolicy="no-referrer" 
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4B & 4C COMBINED: Hebbia-style Security & Trust Section */}
      <section className="bg-[#3A3A3A] text-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-none">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          
          {/* Section Header (No pill badge) */}
          <div className="text-center space-y-3 max-w-4xl mx-auto mb-6 sm:mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] font-light leading-[0.98] tracking-tight text-white">
              Engineered for maximum trust, isolation, and control.
            </h2>
          </div>

          {/* Hebbia 3x2 Grid Container */}
          <div className="border border-[#4F4F4F] bg-[#3A3A3A] shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Tile 1: ISO */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center border-b md:border-r border-[#4F4F4F] text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M40 10 L62 20 V38 C62 54 40 68 40 68 C40 68 18 54 18 38 V20 L40 10 Z" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    <circle cx="40" cy="34" r="13" strokeWidth="2" strokeDasharray="3 2" />
                    <text x="40" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">ISO/IEC</text>
                    <text x="40" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="4.2" fontWeight="800" fontFamily="sans-serif">42001:2023</text>
                    <path d="M24 50 L40 45 L56 50 L40 47 Z" fill="#FFFFFF" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">ISO</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>ISO 27001 &amp; 42001 CERTIFIED</span>
              </div>

              {/* Tile 2: SOC2 II */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center border-b md:border-r border-[#4F4F4F] text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M40 10 L62 20 V38 C62 54 40 68 40 68 C40 68 18 54 18 38 V20 L40 10 Z" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    <path d="M30 38 L37 45 L50 30" strokeWidth="3" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">SOC2 II</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>AICPA TYPE 2 AUDITED</span>
              </div>

              {/* Tile 3: Encrypted everything */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center border-b border-[#4F4F4F] text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="22" y="34" width="36" height="32" rx="5" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    <path d="M30 34 V24 C30 18.5 34.5 14 40 14 C45.5 14 50 18.5 50 24 V34" strokeWidth="2.5" />
                    <circle cx="40" cy="48" r="3.5" fill="currentColor" />
                    <path d="M40 51.5 V57" strokeWidth="2.5" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">Encrypted everything</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>END-TO-END DATA PROTECTION</span>
              </div>

              {/* Tile 4: No training on your data */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#4F4F4F] text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="40" cy="40" r="28" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    <line x1="20" y1="20" x2="60" y2="60" strokeWidth="3" />
                    <path d="M30 28 H50 M30 38 H44 M30 48 H40" strokeWidth="2" strokeOpacity="0.4" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">No training on your data</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>ZERO MODEL RETENTION</span>
              </div>

              {/* Tile 5: Private data stays private */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#4F4F4F] text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180;
                      const cx = 40 + 28 * Math.cos(rad);
                      const cy = 40 + 28 * Math.sin(rad);
                      return (
                        <circle key={i} cx={cx} cy={cy} r="2.2" fill="currentColor" />
                      );
                    })}
                    <rect x="28" y="37" width="24" height="20" rx="3.5" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    <path d="M33 37 V30 C33 26.13 36.13 23 40 23 C43.87 23 47 26.13 47 30 V37" strokeWidth="2.5" />
                    <circle cx="40" cy="46" r="2.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">Private data stays private</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>SWISS TENANT ISOLATION</span>
              </div>

              {/* Tile 6: Audited & tested (Clipboard Checklist Icon) */}
              <div className="p-8 sm:p-11 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] flex items-center justify-center text-white">
                  <svg viewBox="0 0 80 80" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Clipboard outer board */}
                    <rect x="22" y="18" width="36" height="50" rx="5" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                    {/* Clipboard top clip tab */}
                    <path d="M32 18 V14 C32 12.5 33.2 11.2 34.7 11.2 H45.3 C46.8 11.2 48 12.5 48 14 V18" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
                    <circle cx="40" cy="14.5" r="2" fill="currentColor" />
                    {/* Item 1: Unchecked box + line */}
                    <rect x="28" y="27" width="7" height="7" rx="1.5" strokeWidth="2" />
                    <line x1="40" y1="30.5" x2="52" y2="30.5" strokeWidth="2.5" />
                    {/* Item 2: Checked circle + checkmark + line */}
                    <circle cx="31.5" cy="43" r="4.5" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                    <path d="M29.5 43 L31 44.5 L33.5 41.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="40" y1="43" x2="52" y2="43" strokeWidth="2.5" />
                    {/* Item 3: Unchecked box + line */}
                    <rect x="28" y="53" width="7" height="7" rx="1.5" strokeWidth="2" />
                    <line x1="40" y1="56.5" x2="52" y2="56.5" strokeWidth="2.5" />
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mt-4">Audited &amp; tested</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 uppercase tracking-widest mt-1" style={monoStyle}>CONTINUOUS PENETRATION TESTING</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
