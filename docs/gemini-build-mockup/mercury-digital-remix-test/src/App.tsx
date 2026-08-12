/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { PageId } from './types';
import Navigation from './components/Navigation';
import HomeLanding from './components/HomeLanding';
import MercuryEngine from './components/MercuryEngine';
import CustomersSection from './components/CustomersSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Logo from './components/Logo';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="bg-[#040B15] min-h-screen flex flex-col text-white selection:bg-white/20 selection:text-white font-sans antialiased">
      {/* Premium Top Navigation */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* Main Multi-Page App Space with Route Fade Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <HomeLanding onNavigate={setActivePage} />
            )}

            {(activePage === 'mercury' || activePage === 'customers') && <MercuryEngine />}

            {activePage === 'about' && <AboutSection />}

            {activePage === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Redesigned Luxury MERCURY Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
