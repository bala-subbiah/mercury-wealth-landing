/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';

const sansStyle = { fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' };

interface NavigationProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export default function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTopNear, setIsTopNear] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark over hero video
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  // 1. Smart Auto-Hide on Scroll & Scroll-depth Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track whether user scrolled past Hero video zone
      setIsScrolled(currentScrollY > 60);

      // Always show at top of page
      if (currentScrollY < 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Reveal
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // 2. Mouse move detector for top screen hover reveal (0-25px zone)
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 25) {
        setIsTopNear(true);
      } else if (e.clientY > 80 && !isHovered) {
        setIsTopNear(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  // 3. Adaptive Dark & Light Mode Navbar using IntersectionObserver
  useEffect(() => {
    const checkBgTheme = () => {
      // Find all sections tagged as dark or check background colors
      const darkElements = document.querySelectorAll('.dark-section, [data-theme="dark"]');
      if (darkElements.length === 0) return;

      let inDarkZone = false;
      const navTop = 40; // Approx height position of navbar center

      darkElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navTop && rect.bottom >= navTop) {
          inDarkZone = true;
        }
      });

      setIsDarkMode(inDarkZone);
    };

    window.addEventListener('scroll', checkBgTheme, { passive: true });
    checkBgTheme(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkBgTheme);
    };
  }, [activePage]);

  // Determine effective theme mode
  const isLightNav = !isScrolled
    ? (activePage === 'home' ? false : (activePage === 'mercury' || activePage === 'about') ? true : !isDarkMode)
    : !isDarkMode;

  // Navbar is shown if: isVisible OR isTopNear OR isHovered OR mobile menu isOpen
  const shouldShowNav = isVisible || isTopNear || isHovered || isOpen;

  const navItems: { id: PageId; label: string }[] = [
    { id: 'mercury', label: 'Solution' },
    { id: 'about', label: 'About' },
  ];

  const getNavBgClass = () => {
    if (!isScrolled) {
      if (activePage === 'home') return 'bg-transparent text-white';
      if (activePage === 'mercury' || activePage === 'about') return 'bg-transparent text-[#040B15]';
      return isLightNav ? 'bg-transparent text-[#040B15]' : 'bg-transparent text-white';
    }
    return isLightNav 
      ? 'bg-white/90 text-[#040B15] backdrop-blur-md shadow-sm' 
      : 'bg-[#040B15]/85 text-white backdrop-blur-md shadow-sm';
  };

  const getCtaClass = () => {
    if (!isScrolled && activePage === 'home') {
      return 'bg-transparent border border-white text-white hover:bg-white hover:text-[#040B15] active:bg-white active:text-[#040B15]';
    }
    if (isLightNav) {
      return 'bg-[#040B15] border border-transparent text-white hover:bg-neutral-800';
    }
    return 'bg-white border border-transparent text-[#040B15] hover:bg-neutral-200';
  };

  return (
    <>
      {/* Invisible Mouse Hover Sensor at Top Edge (0-20px trigger zone) */}
      <div 
        className="fixed top-0 left-0 right-0 h-5 z-50 pointer-events-auto"
        onMouseEnter={() => setIsTopNear(true)}
      />

      {/* Main Adaptive Floating Navigation Bar (Borderless & Ultra-Minimalist) */}
      <nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsTopNear(false);
        }}
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-12 lg:px-16 transition-all duration-400 ease-out transform border-none ${
          shouldShowNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${getNavBgClass()}`}
        style={sansStyle}
      >
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between">
          {/* Brand Logo & Desktop Nav Links - Far Left Side */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Logo 
              size="md" 
              variant={isLightNav ? 'dark' : 'light'}
              onClick={() => { setActivePage('home'); setIsOpen(false); }} 
            />

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`relative font-sans text-[9px] lg:text-[10px] tracking-[0.22em] uppercase py-1 select-none cursor-pointer border-none outline-none no-underline transition-all duration-300 ${
                      isLightNav
                        ? (isActive ? 'text-[#040B15] opacity-100 font-semibold' : 'text-[#040B15] opacity-60 hover:opacity-100 font-medium')
                        : (isActive ? 'text-white opacity-100 font-semibold' : 'text-white opacity-60 hover:opacity-100 font-medium')
                    }`}
                    style={sansStyle}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Hand Side Container (Request a Demo CTA) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setActivePage('contact')}
              className={`group font-sans text-[7.5px] lg:text-[8px] tracking-[0.18em] uppercase py-2.5 px-5 transition-all duration-300 cursor-pointer flex items-center space-x-1.5 rounded-full outline-none ${getCtaClass()}`}
              style={sansStyle}
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 transition-colors focus:outline-none border-none ${
                isLightNav ? 'text-[#040B15] hover:text-neutral-600' : 'text-white hover:text-neutral-300'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden overflow-hidden mt-4 pt-2 border-none ${
                isLightNav ? 'bg-white text-[#040B15]' : 'bg-[#0a0a0a] text-white'
              }`}
            >
              <div className="flex flex-col space-y-4 py-4 px-2">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-left font-sans text-[13px] tracking-widest uppercase py-2 border-none ${
                        isActive ? 'opacity-100 font-semibold' : 'opacity-50 hover:opacity-90 font-medium'
                      }`}
                      style={sansStyle}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    setActivePage('contact');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between font-sans text-[10px] tracking-[0.15em] uppercase py-3 px-5 transition-all duration-300 rounded-full outline-none ${
                    activePage === 'home'
                      ? 'bg-transparent border border-white text-white hover:bg-white hover:text-[#040B15] active:bg-white active:text-[#040B15]'
                      : isLightNav 
                        ? 'bg-[#040B15] border border-transparent text-white' 
                        : 'bg-white border border-transparent text-[#040B15]'
                  }`}
                  style={sansStyle}
                >
                  <span>Request a Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
