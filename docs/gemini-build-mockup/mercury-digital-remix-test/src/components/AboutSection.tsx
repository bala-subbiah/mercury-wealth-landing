/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, FileText, Code as CodeIcon, Linkedin } from 'lucide-react';

interface TeamMemberDetail {
  name: string;
  role: string;
  experience: string;
  pastRole: string;
  education: string[];
  image: string;
  linkedin?: string;
}

export interface DiaTextRevealProps {
  words?: string[];
  colors?: string[];
  baseColor?: string;
  duration?: number;
  interval?: number;
  wordIndex?: number;
  className?: string;
}

export const DiaTextReveal: React.FC<DiaTextRevealProps> = ({
  words = ["Advice.", "Experience.", "Interaction.", "Business.", "Wealth."],
  colors = ["#4285F4", "#9b51e0", "#ec4899", "#f97316"],
  baseColor = "#1a1a1a",
  duration = 1.6,
  interval = 3200,
  wordIndex,
  className = "",
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = wordIndex !== undefined ? wordIndex : internalIndex;

  useEffect(() => {
    if (wordIndex !== undefined) return;
    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval, wordIndex]);

  // Smooth gradient sweep that ends in vibrant gradient colors (does NOT end in dark/black)
  const gradientString = `linear-gradient(90deg, ${colors.join(", ")}, ${baseColor} 70%, ${baseColor} 100%)`;

  return (
    <span className="inline-flex items-center justify-center overflow-visible whitespace-nowrap">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[activeIndex]}
          initial={{ backgroundPosition: "100% 0%", opacity: 0 }}
          animate={{ backgroundPosition: "0% 0%", opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{
            backgroundPosition: { duration, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.35 },
          }}
          style={{
            backgroundImage: gradientString,
            backgroundSize: "300% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          /* 
            - px-1 py-2: 預留四周適度空間，確保字母下沉部分 (descender) 與邊緣不被裁切
            - leading-none / inline-block: 確保與 'We shape' 精準垂直居中對齊
          */
          className={`inline-block px-1 py-2 overflow-visible leading-none ${className}`}
        >
          {words[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default function AboutSection() {
  // Dia Text Reveal state
  const words = ["Advice.", "Experience.", "Interaction.", "Business.", "Wealth."];
  const [wordIndex, setWordIndex] = useState(0);

  // Interval timer for cycling words
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [words.length]);

  // Modals state
  const [showDocsModal, setShowDocsModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  // Handle Refresh button click
  const handleRefresh = () => {
    setWordIndex(0);
  };

  // Handle Undo button click (step back to previous word)
  const handleUndo = () => {
    setWordIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const codeSnippet = `import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DiaTextRevealProps {
  words?: string[];
  colors?: string[];
  baseColor?: string;
  duration?: number;
  interval?: number;
  className?: string;
}

export const DiaTextReveal: React.FC<DiaTextRevealProps> = ({
  words = ["Advice.", "Experience.", "Interaction.", "Business.", "Wealth."],
  colors = ["#4285F4", "#9b51e0", "#ec4899", "#f97316"],
  baseColor = "#1a1a1a",
  duration = 1.6,
  interval = 3200,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const gradientString = \`linear-gradient(90deg, \${colors.join(", ")}, \${baseColor} 70%, \${baseColor} 100%)\`;

  return (
    <span className="inline-flex items-center justify-center overflow-visible whitespace-nowrap">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ backgroundPosition: "100% 0%", opacity: 0 }}
          animate={{ backgroundPosition: "0% 0%", opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{
            backgroundPosition: { duration, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.35 },
          }}
          style={{
            backgroundImage: gradientString,
            backgroundSize: "300% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className={\`inline-block px-1 py-2 overflow-visible leading-none \${className}\`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#fcfcfb] text-[#1a1a1a] flex items-center justify-center p-6 sm:p-12">
      <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] font-light tracking-tight leading-none max-w-7xl w-full mx-auto grid grid-cols-2 items-center text-center whitespace-nowrap overflow-visible">
        <span className="font-serif font-light leading-none text-right pr-2 sm:pr-3 whitespace-nowrap">We shape</span>
        <div className="text-left pl-2 sm:pl-3 overflow-visible whitespace-nowrap flex items-center justify-start">
          <DiaTextReveal 
            words={["Advice.", "Experience.", "Interaction.", "Business.", "Wealth."]}
            baseColor="#1a1a1a"
            colors={["#4285F4", "#9b51e0", "#ec4899", "#f97316"]}
            duration={1.6}
          />
        </div>
      </h1>
    </section>
  );
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const visionSentences = [
    "Wealth management was meant to be about real advice, but today it has become mostly transactional.",
    "As investors spread their money across different banks, advisors are left with an incomplete, fragmented view. Trapped by disconnected software and manual tasks, they simply can't see the full financial picture.",
    "Mercury was built to solve this exact problem. By connecting data, smart automation, and AI, we give wealth managers full visibility into total wealth so they can focus on building lasting relationships."
  ];

  const team: TeamMemberDetail[] = [
    {
      name: 'Oscar Chan',
      role: 'Co-Founder & CEO',
      experience: '13+ Year BD in Fintech & Sales',
      pastRole: 'FIS, Marvelsoft, Infocast',
      education: ['BA, Business Studies, HK Metropolitan University'],
      image: '/src/assets/images/oscar_chan_portrait_1784450323946.jpg',
      linkedin: 'https://www.linkedin.com/in/oscar-chan'
    },
    {
      name: 'Bala Subbiah',
      role: 'Co-Founder & CPO',
      experience: '14+ Years BD in Digital Transformation & Development',
      pastRole: 'InvestCloud & Tata Consultancy',
      education: ['BA, Electronics and Comm. Engineering, Anna Uni Chennai'],
      image: '/src/assets/images/bala_subbiah_portrait_1784450343591.jpg',
      linkedin: 'https://www.linkedin.com/in/bala-subbiah'
    }
  ];

  return (
    <div className="bg-[#040B15] text-white min-h-screen font-sans antialiased selection:bg-white/20 selection:text-white">
      
      {/* Section 1: Dynamic Dia Text Reveal Hero Section */}
      <section className="relative bg-[#fcfcfb] text-[#1a1a1a] flex flex-col items-center justify-center min-h-screen w-full select-none p-6 sm:p-12 md:p-20 lg:p-28 overflow-visible">
        
        {/* Main Title Section */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] font-light tracking-tight leading-none max-w-7xl w-full mx-auto grid grid-cols-2 items-center text-center whitespace-nowrap overflow-visible">
          <span className="text-[#1a1a1a] whitespace-nowrap font-serif font-light leading-none text-right pr-2 sm:pr-3">We shape</span>
          <div className="text-left pl-2 sm:pl-3 overflow-visible whitespace-nowrap flex items-center justify-start">
            <DiaTextReveal 
              words={words}
              baseColor="#1a1a1a"
              colors={["#4285F4", "#9b51e0", "#ec4899", "#f97316"]}
              duration={1.6}
              wordIndex={wordIndex}
            />
          </div>
        </h1>



      </section>

      {/* Docs Modal */}
      <AnimatePresence>
        {showDocsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-gray-900"
            onClick={() => setShowDocsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-lg text-gray-900">Typewriter Component Docs</h3>
                </div>
                <button
                  onClick={() => setShowDocsModal(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Configuration Parameters</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-gray-800">Words Array:</strong> <code className="bg-gray-100 px-1 py-0.5 rounded">["iterating.", "exploring.", "innovating.", "crafting."]</code></li>
                    <li><strong className="text-gray-800">Typing Speed:</strong> 90ms per character</li>
                    <li><strong className="text-gray-800">Deleting Speed:</strong> 50ms per character</li>
                    <li><strong className="text-gray-800">Pause Duration:</strong> 1600ms on complete word</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Gemini Gradient Effect</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Uses standard CSS linear-gradient clipped to text foreground using <code className="bg-gray-100 px-1 py-0.5 rounded">-webkit-background-clip: text</code> from <span className="text-blue-500 font-mono">#4285F4</span> to <span className="text-purple-500 font-mono">#a855f7</span>, <span className="text-pink-500 font-mono">#ec4899</span>, and <span className="text-orange-500 font-mono">#f97316</span>.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Interactive Controls</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    The bottom floating bar allows live interaction: Refresh restarts the typing sequence, Undo reverses to the previous word, and Code view displays the standalone source code.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setShowDocsModal(false)}
                  className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code Modal */}
      <AnimatePresence>
        {showCodeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 text-gray-100"
            onClick={() => setShowCodeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1e1e1e] text-gray-200 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-gray-800 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <CodeIcon className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-lg text-white">Standalone index.html Source Code</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyCodeToClipboard}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 text-xs rounded-lg transition-colors border border-purple-500/30"
                  >
                    {codeCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowCodeModal(false)}
                    className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="py-4 flex-1 overflow-y-auto">
                <pre className="font-mono text-xs bg-[#121212] p-4 rounded-xl text-emerald-400/90 overflow-x-auto whitespace-pre leading-relaxed border border-gray-800/60">
                  {codeSnippet}
                </pre>
              </div>

              <div className="pt-3 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 2: Our Story */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 w-full max-w-none">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left 50% Column: Section Header */}
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-white font-light leading-[1.02] tracking-tight">
              Our Story
            </h2>
          </div>

          {/* Right 50% Column: Static Sentences */}
          <div className="space-y-6 sm:space-y-7 w-full">
            {visionSentences.map((sentence, index) => (
              <p
                key={index}
                className="font-sans text-lg sm:text-xl text-neutral-400 leading-relaxed font-light text-left"
              >
                {sentence}
              </p>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Team */}
      <section className="relative pt-6 pb-20 sm:pt-8 sm:pb-28 px-6 sm:px-12 lg:px-16 xl:px-24 w-full max-w-none">
        <div className="w-full max-w-[1720px] mx-auto">
          
          {/* Top-Left Section Header */}
          <div className="mb-8 sm:mb-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-white font-light leading-[1.02] tracking-tight">
                The Team
              </h2>
            </motion.div>
          </div>

          {/* 2-Box Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative aspect-[3/4] overflow-hidden bg-[#0a1424] shadow-xl"
            >
              {/* Profile Background Image */}
              <img
                src={member.image}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-[0.8] contrast-[1.05]"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Static View: Name, Role & LinkedIn Icon */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light text-left mt-1">
                    {member.role}
                  </p>
                </div>
                <a 
                  href={member.linkedin || "https://www.linkedin.com"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-all shrink-0 ml-4"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}

