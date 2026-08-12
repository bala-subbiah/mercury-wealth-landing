/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Activity, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Bell, 
  Layers, 
  Maximize2,
  FileText,
  Workflow,
  Search,
  Download,
  Send,
  Share2,
  Sparkles,
  PanelLeft,
  Mic,
  Sun,
  ChevronRight,
  Grid
} from 'lucide-react';
import { PageId } from '../types';
import darkBg1 from '../assets/images/dark_ui_bg_1_1785176270708.jpg';
import darkBg2 from '../assets/images/dark_ui_bg_2_1785176282685.jpg';
import darkBg3 from '../assets/images/dark_ui_bg_3_1785176293791.jpg';
import darkBg4 from '../assets/images/dark_ui_bg_4_1785176303607.jpg';
import architectureSunsetBg from '../assets/images/modern_architecture_sunset_1785181329014.jpg';
import { ScrollTextRevealSection } from './ScrollTextRevealSection';

interface HomeLandingProps {
  onNavigate: (page: PageId) => void;
}

// Live Chat Conversation Script data with CTA cards and natural casual dialogue
const conversationScript = [
  {
    id: 1,
    sender: 'User',
    name: 'John Smith',
    text: "How will tonight's Fed interest rate decision affect our clients?",
    time: '20:01',
  },
  {
    id: 2,
    sender: 'AI',
    name: 'Mercury',
    text: "Our insights show the Wong family portfolio will experience the most significant impact based on their current asset weights.",
    time: '20:01',
  },
  {
    id: 3,
    sender: 'AI',
    name: 'Mercury',
    text: "Here is the current asset allocation drift:",
    time: '20:02',
    card: {
      badge: 'DRIFT',
      badgeColor: 'bg-amber-500',
      text: 'Wong Corporate Reserve fixed income +22.1pp over the IPS target (62.1% vs 40%).',
    }
  },
  {
    id: 4,
    sender: 'AI',
    name: 'Mercury',
    text: "Would you like me to explain the drift and draft a rebalancing proposal?",
    time: '20:02',
  },
  {
    id: 5,
    sender: 'User',
    name: 'John Smith',
    text: "Yes, please draft the proposal.",
    time: '20:03',
  },
  {
    id: 6,
    sender: 'AI',
    name: 'Mercury',
    text: "Analyzing and retrieving the Wong family portfolio...",
    time: '20:03',
  },
  {
    id: 7,
    sender: 'AI',
    name: 'Mercury',
    text: "Proposal created! Please see the attached proposal and explanation breakdown:",
    time: '20:04',
    card: {
      badge: 'PROPOSAL READY',
      badgeColor: 'bg-emerald-400',
      text: 'Rebalancing Proposal & Macro Drift Explanation for Wong Corporate Reserve.',
      cta1: 'Review rebalance',
      cta2: 'Explain the drift',
    }
  },
];

function LiveChatCoPilot() {
  const [messages, setMessages] = useState<typeof conversationScript>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex >= conversationScript.length) {
      // Auto-replay loop after 4 seconds delay when conversation finishes
      const loopTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(loopTimer);
    }

    // Smooth conversation progression (2.2s per message)
    const timer = setTimeout(() => {
      const nextMsg = conversationScript[currentIndex];
      setMessages((prev) => [...prev, nextMsg]);
      setCurrentIndex((prev) => prev + 1);
    }, 2200);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="w-full font-sans relative">
      {/* Chat Bubble List with Top & Bottom Blur Fade Mask */}
      <div 
        ref={chatContainerRef}
        className="space-y-3.5 h-[480px] sm:h-[520px] overflow-y-auto no-scrollbar py-6 px-1 flex flex-col justify-start pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => {
            const isUser = msg.sender === 'User';
            return (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: -24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 1, 0.5, 1],
                  layout: { duration: 0.35, ease: 'easeOut' }
                }}
                className={`flex items-start space-x-3 w-full ${
                  isUser 
                    ? 'flex-row-reverse space-x-reverse ml-auto max-w-[85%] sm:max-w-[78%]' 
                    : 'mr-auto max-w-[85%] sm:max-w-[78%]'
                }`}
              >
                {/* Avatar Icon: User -> "JS" badge, AI -> WordArt "M" logo */}
                {isUser ? (
                  <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-blue-200 font-bold font-sans text-xs flex items-center justify-center shrink-0 shadow-lg border border-blue-400/30">
                    JS
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 text-white font-black font-sans text-xs flex items-center justify-center shrink-0 shadow-lg border border-white/30 tracking-tighter">
                    M
                  </div>
                )}

                {/* Bubble Container */}
                <div 
                  className={`p-3.5 sm:p-4 rounded-2xl shadow-xl backdrop-blur-xl transition-all border ${
                    isUser 
                      ? 'bg-[#192A40]/95 border-blue-500/25 text-white rounded-tr-xs' 
                      : 'bg-[#141822]/90 border-white/10 text-white rounded-tl-xs'
                  }`}
                >
                  <div className="flex items-center justify-between space-x-4 mb-1">
                    <span className="text-[11px] font-semibold tracking-wide text-neutral-200 font-sans">
                      {msg.name}
                    </span>
                    <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-wider">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-100 font-normal">
                    {msg.text}
                  </p>

                  {/* Attachment Card / Drift Review CTA Box */}
                  {msg.card && (
                    <div className="bg-[#0A0D14]/90 border border-white/10 rounded-xl p-3 sm:p-3.5 mt-2.5 shadow-inner space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${msg.card.badgeColor || 'bg-amber-500'} inline-block animate-pulse`} />
                          <span className="uppercase text-neutral-300 font-bold tracking-widest text-[10px] sm:text-xs">{msg.card.badge}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-sans font-medium text-white/95 leading-relaxed">
                        {msg.card.text}
                      </p>

                      {(msg.card.cta1 || msg.card.cta2) && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {msg.card.cta1 && (
                            <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-semibold transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer">
                              <FileText className="w-3.5 h-3.5 text-blue-400" />
                              <span>{msg.card.cta1}</span>
                            </button>
                          )}
                          {msg.card.cta2 && (
                            <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans text-xs font-semibold transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer">
                              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              <span>{msg.card.cta2}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function HomeLanding({ onNavigate }: HomeLandingProps) {
  // Capability feature selector state
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const capabilities = [
    {
      id: 'collaboration',
      title: 'Autonomous Engine',
      tagline: 'AI Understand Your Business',
      description: 'Synthesizes live portfolio drift, overdue suitability reviews, and actionable AUM signals into a unified morning briefing tailored for family offices and wealth managers.',
    },
    {
      id: 'context',
      title: 'Institutional Integration',
      tagline: 'Integrated Your Trust Data',
      description: 'Unifies custodian feeds, trust structures, market intelligence, and private data rooms into a single, synchronized source of truth.',
    },
    {
      id: 'workflows',
      title: 'Unified Stack',
      tagline: 'One Workspace',
      description: 'Empowers relationship managers to run instant portfolio diagnostics, draft rebalance proposals, and analyze IPS drift through a conversational AI assistant.',
    },
    {
      id: 'scale',
      title: 'Zero Hallucinations',
      tagline: 'Insight to Investment',
      description: 'Transforms complex multi-entity portfolio data and market movements into clear, actionable investment decisions and client-ready reporting.',
    },
  ];

  const capNavRef = useRef<HTMLElement>(null);

  // Auto scroll active pill on mobile / tablet navigation bar
  useEffect(() => {
    if (capNavRef.current) {
      const activeBtn = capNavRef.current.children[activeFeatureIndex] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeFeatureIndex]);

  // Robust Scroll-Spy tracking across all 3 device screen types (Mobile, Tablet, Desktop)
  useEffect(() => {
    const cards = document.querySelectorAll('.capability-scroll-section');
    if (!cards.length) return;

    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          const idxStr = card.getAttribute('data-section-index');
          if (idxStr !== null) {
            closestIndex = parseInt(idxStr, 10);
          }
        }
      });

      setActiveFeatureIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    setActiveFeatureIndex(index);
    const el = document.getElementById(`capability-section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Stats count state
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [workflowSaved, setWorkflowSaved] = useState(0);
  const [researchPrecision, setResearchPrecision] = useState(0.0);
  const [clientEngagement, setClientEngagement] = useState(0);

  const statsSectionRef = useRef<HTMLDivElement>(null);

  // Trigger count up animation
  const triggerCountUp = () => {
    if (hasAnimatedStats) return;
    setHasAnimatedStats(true);

    // Animate workflowSaved 0 -> 75
    let startWorkflow = 0;
    const stepWorkflow = () => {
      startWorkflow += 2;
      if (startWorkflow >= 75) {
        setWorkflowSaved(75);
      } else {
        setWorkflowSaved(startWorkflow);
        requestAnimationFrame(stepWorkflow);
      }
    };

    // Animate researchPrecision 0.0 -> 99.8
    let startResearch = 0.0;
    const stepResearch = () => {
      startResearch += 2.5;
      if (startResearch >= 99.8) {
        setResearchPrecision(99.8);
      } else {
        setResearchPrecision(Number(startResearch.toFixed(1)));
        requestAnimationFrame(stepResearch);
      }
    };

    // Animate clientEngagement 0 -> 38
    let startEngagement = 0;
    const stepEngagement = () => {
      startEngagement += 1;
      if (startEngagement >= 38) {
        setClientEngagement(38);
      } else {
        setClientEngagement(startEngagement);
        requestAnimationFrame(stepEngagement);
      }
    };

    requestAnimationFrame(stepWorkflow);
    requestAnimationFrame(stepResearch);
    requestAnimationFrame(stepEngagement);
  };

  // Intersection observer for stats count-up (low threshold so it triggers reliably on mobile, tablet & desktop)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerCountUp();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, [hasAnimatedStats]);

  return (
    <div className="bg-[#040B15] min-h-screen text-white selection:bg-white/20 selection:text-black font-sans">
      
      {/* 1. HERO SECTION (100vw x 100vh Full Screen Video with Mid-Bottom Positioned Content & Architectural H1) */}
      <section className="dark-section relative w-full min-h-screen p-0 m-0 overflow-hidden bg-[#040B15] flex items-center justify-center pt-28 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 border-none">
        
        {/* Full Bleed Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
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
        </div>

        {/* Cinematic dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040B15] via-[#040B15]/40 to-[#040B15]/60 z-[1]" />
        <div className="absolute inset-0 bg-[#040B15]/30 z-[1]" />

        {/* Hero Content Block - Positioned between center and bottom */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center justify-center translate-y-12 sm:translate-y-16 md:translate-y-20">
          <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-light tracking-tight leading-tight text-white text-center drop-shadow-lg"
            >
              Built for Wealth firms <br className="hidden sm:inline" />
              bold enough to evolve.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base text-neutral-400 font-light max-w-lg text-center mx-auto mt-4 md:mt-5 leading-relaxed"
            >
              Mercury: The AI operations team for modern wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-5 sm:pt-6"
            >
              <button
                onClick={() => onNavigate('mercury')}
                className="bg-white hover:bg-neutral-200 text-black font-sans text-xs font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 tracking-wide"
              >
                Request a demo <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. LOGO BAR SECTION (Borderless & Tighter Spacing) */}
      <section className="bg-[#040B15] py-6 sm:py-8 md:py-10 px-6 sm:px-12 lg:px-16 overflow-hidden relative border-none">
        <div className="max-w-[1600px] mx-auto mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 text-center">
            INSTITUTIONAL ECOSYSTEM & COLLABORATORS
          </p>
        </div>

        {/* Marquee Wrapper with Fade Masking */}
        <div 
          className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 sm:before:w-40 before:bg-gradient-to-r before:from-[#040B15] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 sm:after:w-40 after:bg-gradient-to-l after:from-[#040B15] after:to-transparent"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex animate-marquee space-x-20 sm:space-x-32 items-center whitespace-nowrap">
            {[0, 1, 2, 3].map((setIndex) => (
              <div key={setIndex} className="flex space-x-20 sm:space-x-32 items-center shrink-0">
                
                {/* 1. UOB KAY HIAN */}
                <div className="flex items-center justify-center px-6 cursor-pointer group">
                  <div className="h-16 sm:h-20 flex items-center justify-center overflow-visible">
                    <img
                      src="https://i.ibb.co/4gJJhb7r/UOB-KY.png"
                      onError={(e) => { e.currentTarget.src = "/logos/uob-kay-hian.png"; }}
                      referrerPolicy="no-referrer"
                      alt="UOB Kay Hian"
                      className="logo-base logo-wide logo-uob opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 2. LIZEN ASSET MANAGEMENT */}
                <div className="flex items-center justify-center px-6 cursor-pointer group">
                  <div className="h-16 sm:h-20 flex items-center justify-center overflow-visible">
                    <img
                      src="https://i.ibb.co/23KC3Dq7/LI-Zen.png"
                      onError={(e) => { e.currentTarget.src = "/logos/lizen.png"; }}
                      referrerPolicy="no-referrer"
                      alt="Lizen Asset Management"
                      className="logo-base logo-square logo-leza opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 3. CYBERPORT */}
                <div className="flex items-center justify-center px-6 cursor-pointer group">
                  <div className="h-16 sm:h-20 flex items-center justify-center overflow-visible">
                    <img
                      src="https://i.ibb.co/1GvQPFKn/Cyberport.png"
                      onError={(e) => { e.currentTarget.src = "/logos/cyberport.png"; }}
                      referrerPolicy="no-referrer"
                      alt="Cyberport 數碼港"
                      className="logo-base logo-square logo-cyberport opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 4. SOLOMON */}
                <div className="flex items-center justify-center px-6 cursor-pointer group">
                  <div className="h-16 sm:h-20 flex items-center justify-center overflow-visible">
                    <img
                      src="https://i.ibb.co/7JVwnmWw/Solomon-logo.png"
                      onError={(e) => { e.currentTarget.src = "/logos/solomon.png"; }}
                      referrerPolicy="no-referrer"
                      alt="Solomon"
                      className="logo-base logo-wide logo-solomon opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEM CAPABILITIES SCROLLYTELLING HERO SECTION (Ultra-Minimalist Swiss Grid) */}
      <section className="dark-section pt-20 pb-28 md:pt-32 md:pb-44 lg:pt-40 lg:pb-52 px-6 sm:px-12 lg:px-16 bg-[#040B15] text-white relative border-none">
        <div className="max-w-[1600px] w-full mx-auto">
          
          {/* Giant Header Section */}
          <div className="mb-20 lg:mb-28">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] font-light text-white tracking-tight leading-[0.98] text-left">
              Innovating Wealth
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-20 items-start relative">
            
            {/* LEFT COLUMN: Micro-navigation Menu (Borderless & Clean) */}
            <div className="col-span-12 lg:col-span-4 sticky lg:top-32 max-lg:top-14 max-lg:z-30 max-lg:bg-[#040B15]/95 max-lg:backdrop-blur-md max-lg:py-2.5 max-lg:px-1 border-none h-fit space-y-0">
              <nav ref={capNavRef} className="flex max-lg:flex-row lg:flex-col max-lg:overflow-x-auto no-scrollbar max-lg:space-x-4 lg:space-y-3">
                {capabilities.map((item, idx) => {
                  const isActive = activeFeatureIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(idx)}
                      className={`text-left text-[11px] sm:text-xs lg:text-xs xl:text-sm uppercase tracking-wider lg:tracking-[0.14em] transition-all duration-300 flex items-center group cursor-pointer shrink-0 whitespace-nowrap max-lg:px-3 max-lg:py-1.5 lg:py-1 ${
                        isActive 
                          ? 'text-white font-semibold lg:pl-2' 
                          : 'text-neutral-500 hover:text-neutral-200 lg:hover:pl-2'
                      }`}
                    >
                      <span className="truncate">{item.tagline}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT COLUMN: Main Canvas Floating Micro-UI Cards */}
            <div className="col-span-12 lg:col-span-8 space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28 overflow-hidden">
              
              {/* Card 0: AI Understand Your Business / Morning Briefing System UI Portrait */}
              <motion.div
                id="capability-section-0"
                data-section-index="0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="capability-scroll-section border-none bg-white/[0.015] backdrop-blur-md rounded-none h-[220px] xs:h-[250px] sm:h-[330px] md:h-[370px] lg:h-[420px] xl:h-[460px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-8 xl:p-10 relative flex items-center justify-center transition-all duration-500 group shadow-2xl overflow-hidden w-full max-w-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 brightness-[0.8] contrast-[1.1] pointer-events-none group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(https://res.cloudinary.com/q1hzzizh/image/upload/v1785431578/greyandblacktone_joi3zl.png)` }}
                />

                <div className="relative z-10 w-full flex items-center justify-center overflow-hidden py-1 sm:py-0">
                  <div className="w-[580px] max-w-none transform scale-[0.34] xs:scale-[0.39] min-[400px]:scale-[0.44] min-[480px]:scale-[0.49] sm:scale-[0.52] md:scale-[0.59] lg:scale-[0.70] xl:scale-[0.81] origin-center transition-transform duration-300 shrink-0 mx-auto text-left">
                    
                    {/* Single Unified Morning Briefing Container */}
                    <div className="w-full border border-white/10 bg-[#0A101C]/85 backdrop-blur-md rounded-xl p-4 sm:p-5 space-y-3.5 shadow-2xl">
                      
                      {/* System Header Bar */}
                      <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                            <PanelLeft className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-sans text-xs font-medium text-white tracking-tight">Home</span>
                        </div>

                        <div className="flex-1 max-w-xs bg-[#121824]/90 border border-white/10 rounded-lg px-2.5 py-1 flex items-center space-x-2 text-neutral-400 text-[11px] shadow-inner">
                          <Search className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span className="truncate text-neutral-400 font-light text-[10px] sm:text-[11px]">Search clients, ask Mercury...</span>
                          <Mic className="w-3 h-3 text-neutral-400 ml-auto shrink-0 cursor-pointer hover:text-white transition-colors" />
                        </div>
                      </div>

                      {/* Header line */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                        <div className="flex items-center space-x-1 text-indigo-400 font-medium">
                          <Sparkles className="w-3 h-3 text-indigo-400" />
                          <span className="text-white font-medium text-xs">Morning briefing</span>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-400">
                          Fri 19 Jun · composed from live book signals
                        </span>
                      </div>

                      {/* Greeting */}
                      <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight pt-0.5">
                        Good morning, Audrey.
                      </h3>

                      {/* Paragraph Narrative with underline highlights matching screenshot */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        <strong className="text-white font-medium">13 portfolios have drifted past the IPS band</strong> — worst in the{' '}
                        <span className="underline underline-offset-4 decoration-neutral-500 hover:decoration-white font-normal text-white transition-colors cursor-pointer">
                          Lim Family Office
                        </span>{' '}
                        book (85.0% vs target 65.0%). <strong className="text-white font-medium">11 compliance reviews overdue</strong> across major accounts. The{' '}
                        <span className="underline underline-offset-4 decoration-neutral-500 hover:decoration-white font-normal text-white transition-colors cursor-pointer">
                          Chen Family Trust
                        </span>{' '}
                        has US$1.3M idle cash — worth deploying.
                      </p>

                      {/* Status CTA Buttons */}
                      <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2">
                        <button className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-[10px] sm:text-[11px] font-semibold transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>13 rebalance candidates</span>
                        </button>
                        <button className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-[10px] sm:text-[11px] font-semibold transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                          <span>11 reviews overdue</span>
                        </button>
                        <button className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-[10px] sm:text-[11px] font-semibold transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span>US$1.3M idle cash</span>
                        </button>
                        <button className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 font-sans text-[10px] sm:text-[11px] font-medium transition-all flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>4 due this week</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 1: Integrated Your Trust Data / 8-Icon Connector Bar UI */}
              <motion.div
                id="capability-section-1"
                data-section-index="1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="capability-scroll-section border-none bg-white/[0.015] backdrop-blur-md rounded-none h-[150px] xs:h-[180px] sm:h-[290px] md:h-[330px] lg:h-[390px] xl:h-[430px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-8 xl:p-10 relative flex items-center justify-center transition-all duration-500 group shadow-2xl overflow-hidden w-full max-w-full"
              >
                {/* Layer 1: Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 brightness-[0.8] contrast-[1.1] pointer-events-none group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(https://res.cloudinary.com/q1hzzizh/image/upload/v1785431578/greyandblacktone_joi3zl.png)` }}
                />

                {/* Layer 2: Foreground 8 Icon Bar Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <div className="w-full max-w-[620px] mx-auto flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/q1hzzizh/image/upload/v1785261553/8barv.1.2_xu4uyx.png" 
                      alt="8 Icon Bar Connectors" 
                      className="w-full h-auto max-h-full object-contain drop-shadow-2xl rounded-2xl transition-all duration-300 transform-gpu"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: One Workspace / System UI Portrait Widget */}
              <motion.div
                id="capability-section-2"
                data-section-index="2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="capability-scroll-section border-none bg-white/[0.015] backdrop-blur-md rounded-none h-[230px] xs:h-[260px] sm:h-[390px] md:h-[440px] lg:h-[480px] xl:h-[510px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-7 xl:p-9 relative flex items-center justify-center transition-all duration-500 group shadow-2xl overflow-hidden w-full max-w-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 brightness-[0.8] contrast-[1.1] pointer-events-none group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(https://res.cloudinary.com/q1hzzizh/image/upload/v1785431578/greyandblacktone_joi3zl.png)` }}
                />

                <div className="relative z-10 w-full flex items-center justify-center overflow-hidden py-1 sm:py-0">
                  <div className="w-[680px] max-w-none transform scale-[0.30] xs:scale-[0.35] min-[400px]:scale-[0.40] min-[480px]:scale-[0.46] sm:scale-[0.55] md:scale-[0.63] lg:scale-[0.75] xl:scale-[0.85] origin-center transition-transform duration-300 shrink-0 mx-auto font-sans text-neutral-200">
                    
                    {/* Single Unified Dashboard Layer Container */}
                    <div className="bg-[#0A0D14]/90 border border-white/10 rounded-xl p-3.5 space-y-3 shadow-2xl backdrop-blur-md">
                      
                      {/* Top System Navigation Bar Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 text-[11px]">
                        <div className="flex items-center space-x-1.5">
                          <button className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                            <PanelLeft className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-medium text-white tracking-tight">Home</span>
                        </div>

                        <div className="flex-1 max-w-xs bg-[#121824]/90 border border-white/10 rounded-lg px-2.5 py-1 flex items-center space-x-1.5 text-neutral-400 text-[11px] shadow-inner">
                          <Search className="w-3 h-3 text-neutral-400 shrink-0" />
                          <div className="ml-auto flex items-center space-x-1 shrink-0">
                            <Mic className="w-3 h-3 text-neutral-400 cursor-pointer hover:text-white transition-colors" />
                            <Grid className="w-3 h-3 text-neutral-400 cursor-pointer hover:text-white transition-colors" />
                            <span className="bg-white/10 border border-white/10 px-1 py-0.2 rounded text-[8px] font-mono text-neutral-300">K</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1.5 text-[10px] font-mono text-neutral-400">
                          <Sun className="w-3 h-3 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
                          <Bell className="w-3 h-3 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                      </div>
                      
                      {/* TOP ROW: Market News Banner & Sector Performance */}
                      <div className="grid grid-cols-12 gap-2.5">
                        
                        {/* Left: News Hero Banner */}
                        <div className="col-span-5 bg-gradient-to-br from-[#121A28]/90 via-[#0D131F]/90 to-[#0A0E18]/90 border border-white/10 rounded-lg p-3 flex flex-col justify-between space-y-2.5 relative overflow-hidden group/hero">
                          <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                          
                          <div>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[9px] font-medium tracking-wide">
                              <span className="w-1 h-1 rounded-full bg-emerald-400" /> The markets are bullish
                            </span>
                          </div>

                          <div className="space-y-1">
                            <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-400 block">
                              What you need to know today
                            </span>
                            <h4 className="text-[11px] sm:text-xs font-semibold text-white leading-tight tracking-tight">
                              Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path
                            </h4>
                          </div>
                        </div>

                        {/* Right: Sector Performance Table */}
                        <div className="col-span-7 bg-[#111622]/80 border border-white/10 rounded-lg p-3 space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/5">
                            <h5 className="font-medium text-white text-[11px]">Sector Performance</h5>
                          </div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[10px] font-sans">
                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="font-medium text-white">All sectors</span>
                              <span className="font-mono font-medium text-emerald-400">+0.88%</span>
                            </div>
                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Healthcare</span>
                              <span className="font-mono text-emerald-400">+0.84%</span>
                            </div>

                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Industrials</span>
                              <span className="font-mono text-emerald-400">+1.86%</span>
                            </div>
                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Real Estate</span>
                              <span className="font-mono text-emerald-400">+0.68%</span>
                            </div>

                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Communication</span>
                              <span className="font-mono text-emerald-400">+1.55%</span>
                            </div>
                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Basic Materials</span>
                              <span className="font-mono text-emerald-400">+0.65%</span>
                            </div>

                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Technology</span>
                              <span className="font-mono text-emerald-400">+1.06%</span>
                            </div>
                            <div className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
                              <span className="text-neutral-400">Utilities</span>
                              <span className="font-mono text-emerald-400">+0.57%</span>
                            </div>

                            <div className="flex justify-between items-center py-0.5">
                              <span className="text-neutral-400">Financial</span>
                              <span className="font-mono text-emerald-400">+0.68%</span>
                            </div>
                            <div className="flex justify-between items-center py-0.5">
                              <span className="text-neutral-400">Energy</span>
                              <span className="font-mono text-rose-400">-0.05%</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* MIDDLE ROW: 5 Metric Stat Cards */}
                      <div className="grid grid-cols-5 gap-2 items-stretch">
                        
                        {/* Metric 1: Total AUM */}
                        <div className="bg-[#111622]/80 border border-white/10 hover:border-white/20 rounded-lg p-2.5 flex flex-col justify-between transition-all space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Total AUM</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white tracking-tight">US$180.5M</div>
                            <div className="text-[9px] text-neutral-400 mt-0.5">20 Households</div>
                          </div>
                        </div>

                        {/* Metric 2: Today */}
                        <div className="bg-[#111622]/80 border border-white/10 hover:border-white/20 rounded-lg p-2.5 flex flex-col justify-between transition-all space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Today</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-emerald-400 tracking-tight">+US$532k</div>
                            <div className="text-[8px] text-emerald-400/80 font-mono mt-0.5 whitespace-nowrap">+0.29% day</div>
                          </div>
                        </div>

                        {/* Metric 3: Net new money MTD */}
                        <div className="bg-[#111622]/80 border border-white/10 hover:border-white/20 rounded-lg p-2.5 flex flex-col justify-between transition-all space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Net New Money</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-emerald-400 tracking-tight">+US$1.3M</div>
                            <div className="text-[9px] text-neutral-400 mt-0.5">Month to date</div>
                          </div>
                        </div>

                        {/* Metric 4: Needs attention */}
                        <div className="bg-[#111622]/80 border border-white/10 hover:border-white/20 rounded-lg p-2.5 flex flex-col justify-between transition-all space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Attention</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white tracking-tight">58</div>
                            <div className="text-[9px] text-neutral-400 mt-0.5">Pending reviews</div>
                          </div>
                        </div>

                        {/* Metric 5: Movers today */}
                        <div className="bg-[#111622]/80 border border-white/10 hover:border-white/20 rounded-lg p-2.5 flex flex-col justify-between transition-all space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Top Mover</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-emerald-400 tracking-tight">+US$313k</div>
                            <div className="text-[9px] text-neutral-300 font-mono mt-0.5 flex items-center justify-between">
                              <span>Lim</span>
                              <span className="text-neutral-500 text-[8px]">+2 others</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* BOTTOM SPLIT ROW: Needs Attention List & Coming Up Calendar */}
                      <div className="grid grid-cols-12 gap-2.5">
                        
                        {/* Left: Needs Attention List */}
                        <div className="col-span-7 bg-[#111622]/80 border border-white/10 rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                            <div className="flex items-center space-x-1.5">
                              <h5 className="font-medium text-white text-[11px]">Needs attention</h5>
                              <span className="px-1 py-0.2 rounded-full bg-white/10 text-neutral-300 text-[9px] font-mono">58</span>
                            </div>
                          </div>

                          <div className="space-y-1.5 text-[10px]">
                            
                            {/* Item 01 */}
                            <div className="flex items-center justify-between gap-1.5 p-2 rounded-md bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                              <div className="space-y-0.5">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-[9px] font-mono text-neutral-500">01</span>
                                  <span className="w-1 h-1 rounded-full bg-rose-500" />
                                  <span className="font-medium text-white text-[10px]">Chan Family</span>
                                </div>
                                <p className="text-[9px] text-neutral-400 pl-3.5">
                                  Suitability review for <strong className="text-neutral-200 font-normal">2 members</strong> overdue by <strong className="text-white">121 days</strong>.
                                </p>
                              </div>
                            </div>

                            {/* Item 02 */}
                            <div className="flex items-center justify-between gap-1.5 p-2 rounded-md bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                              <div className="space-y-0.5">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-[9px] font-mono text-neutral-500">02</span>
                                  <span className="w-1 h-1 rounded-full bg-rose-500" />
                                  <span className="font-medium text-white text-[10px]">Fong Family</span>
                                </div>
                                <p className="text-[9px] text-neutral-400 pl-3.5">
                                  Suitability review for <strong className="text-neutral-200 font-normal">Kwok Ka-Yan</strong> overdue by <strong className="text-white">154 days</strong>.
                                </p>
                              </div>
                            </div>

                            {/* Item 03 */}
                            <div className="flex items-center justify-between gap-1.5 p-2 rounded-md bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                              <div className="space-y-0.5">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-[9px] font-mono text-neutral-500">03</span>
                                  <span className="w-1 h-1 rounded-full bg-rose-500" />
                                  <span className="font-medium text-white text-[10px]">So Family</span>
                                </div>
                                <p className="text-[9px] text-neutral-400 pl-3.5">
                                  Suitability review for <strong className="text-neutral-200 font-normal">So Wing-Yee</strong> overdue by <strong className="text-white">112 days</strong>.
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Right: Coming Up Calendar Feed */}
                        <div className="col-span-5 bg-[#111622]/80 border border-white/10 rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[11px]">
                            <h5 className="font-medium text-white">Coming up</h5>
                          </div>

                          <div className="space-y-1 text-[10px] font-sans">
                            
                            <div className="flex items-start space-x-2 py-0.5 border-b border-white/[0.03]">
                              <div className="font-mono text-[9px] text-neutral-300 w-10 shrink-0">
                                <span className="font-medium text-white block">28 Jun</span>
                              </div>
                              <div className="space-y-0.2 truncate">
                                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Task</span>
                                <p className="text-[9px] text-neutral-300 truncate">Follow up Loung on phased rotation...</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 py-0.5 border-b border-white/[0.03]">
                              <div className="font-mono text-[9px] text-neutral-300 w-10 shrink-0">
                                <span className="font-medium text-white block">28 Jun</span>
                              </div>
                              <div className="space-y-0.2 truncate">
                                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Pang Family</span>
                                <p className="text-[9px] text-neutral-300 truncate">Drift-breach alert — Pang Discretionar...</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 py-0.5 border-b border-white/[0.03]">
                              <div className="font-mono text-[9px] text-neutral-300 w-10 shrink-0">
                                <span className="font-medium text-white block">22 Jun</span>
                              </div>
                              <div className="space-y-0.2 truncate">
                                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Task</span>
                                <p className="text-[9px] text-neutral-300 truncate">Confirm gold-sleeve pricing — Zhang...</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 py-0.5">
                              <div className="font-mono text-[9px] text-neutral-300 w-10 shrink-0">
                                <span className="font-medium text-white block">25 Jun</span>
                              </div>
                              <div className="space-y-0.2 truncate">
                                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Fong Family</span>
                                <p className="text-[9px] text-neutral-300 truncate">Review Fong single-market HK conce...</p>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Live Chat AI Co-pilot Simulation UI */}
              <motion.div
                id="capability-section-3"
                data-section-index="3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="capability-scroll-section border-none bg-white/[0.015] backdrop-blur-md rounded-none h-[220px] xs:h-[250px] sm:h-[370px] md:h-[410px] lg:h-[460px] xl:h-[480px] p-2 xs:p-3 sm:p-4 md:p-5 lg:p-8 xl:p-10 relative flex items-center justify-center transition-all duration-500 group shadow-2xl overflow-hidden w-full max-w-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 brightness-[0.8] contrast-[1.1] pointer-events-none group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(https://res.cloudinary.com/q1hzzizh/image/upload/v1785431578/greyandblacktone_joi3zl.png)` }}
                />

                <div className="relative z-10 w-full flex items-center justify-center overflow-hidden py-1 sm:py-0">
                  <div className="w-[580px] max-w-none transform scale-[0.37] xs:scale-[0.42] min-[400px]:scale-[0.47] min-[480px]:scale-[0.54] sm:scale-[0.61] md:scale-[0.68] lg:scale-[0.78] xl:scale-[0.85] origin-center transition-transform duration-300 shrink-0 mx-auto">
                    <LiveChatCoPilot />
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 3.5 EDITORIAL QUOTE TESTIMONIAL SECTION */}
      <ScrollTextRevealSection />

      {/* 4. PERFORMANCE BY THE NUMBERS SECTION (Reference Image Layout, Block Quote Off-White Palette & Customer Section Serif Typography) */}
      <section ref={statsSectionRef} className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-8 sm:px-16 lg:px-24 bg-[#fcfcfb] text-[#1a1a1a] relative border-none">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
          
          {/* Left 50% Column: Title */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-light text-[#1a1a1a] tracking-tight leading-[1.05]">
              Performance by the numbers
            </h2>
          </div>

          {/* Right 50% Column: Layout with top borders for each metric */}
          <div className="w-full space-y-6 sm:space-y-8">
            
            {/* Item 1: 75% - Workflow time saved */}
            <div className="border-t border-slate-300/80 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[83px] font-light text-[#1a1a1a] tracking-tight leading-none">
                {workflowSaved}%
              </div>
              <div className="text-sm sm:text-base text-neutral-600 font-sans font-light leading-relaxed max-w-[300px] pt-1">
                Workflow time saved
              </div>
            </div>

            {/* Item 2: 99.8% - Research precision & fidelity */}
            <div className="border-t border-slate-300/80 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[83px] font-light text-[#1a1a1a] tracking-tight leading-none">
                {researchPrecision.toFixed(1)}%
              </div>
              <div className="text-sm sm:text-base text-neutral-600 font-sans font-light leading-relaxed max-w-[300px] pt-1">
                Research precision &amp; fidelity
              </div>
            </div>

            {/* Item 3: +38% - Client engagement boost */}
            <div className="border-t border-slate-300/80 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[83px] font-light text-[#1a1a1a] tracking-tight leading-none">
                +{clientEngagement}%
              </div>
              <div className="text-sm sm:text-base text-neutral-600 font-sans font-light leading-relaxed max-w-[300px] pt-1">
                Client engagement boost
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRE-FOOTER BANNER ("SHAPE THE FUTURE OF WEALTH") */}
      <section className="relative w-full bg-[#fcfcfb] text-[#1a1a1a] flex flex-col justify-center items-center text-center py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 border-none">
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-[1.05] text-center">
            Shape the Future of Wealth
          </h3>
          <button
            onClick={() => onNavigate('mercury')}
            className="mt-8 sm:mt-10 bg-[#1a1a1a] hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-medium py-3 px-7 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 tracking-wide"
          >
            Request a demo <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
