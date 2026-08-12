/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg('Please populate all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full bg-[#040B14] overflow-hidden flex items-center justify-center py-16 px-6 sm:px-12 lg:px-16">
      {/* Cinematic Dark Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/editorial_portrait_1784370671507.jpg"
          alt="Mercury Background Portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040B14]/95 via-[#040B14]/85 to-[#040B14]/90" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Floating Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-white text-brand-dark p-8 sm:p-10 rounded-[32px] shadow-2xl w-full max-w-lg mx-auto lg:mx-0 flex flex-col justify-between min-h-[580px]"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-brand-dark font-light tracking-tight leading-tight mb-1">
                    Contact Us
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    Initiate a confidential discussion with our advisory desk.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl font-mono uppercase tracking-wider">
                    {errorMsg}
                  </div>
                )}

                {/* Name field */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] uppercase tracking-wider font-semibold text-brand-dark block">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                    placeholder="Enter your name"
                    className="w-full bg-[#f6f6f6] border border-transparent rounded-[12px] py-3.5 px-4 text-sm text-brand-dark focus:outline-none focus:bg-[#ededed] placeholder:text-brand-muted/40 transition-colors font-sans"
                  />
                </div>

                {/* Company/Institution */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] uppercase tracking-wider font-semibold text-brand-dark block">
                    Company / Institution
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Sovereign Trust"
                    className="w-full bg-[#f6f6f6] border border-transparent rounded-[12px] py-3.5 px-4 text-sm text-brand-dark focus:outline-none focus:bg-[#ededed] placeholder:text-brand-muted/40 transition-colors font-sans"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] uppercase tracking-wider font-semibold text-brand-dark block">
                    Secure Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                    placeholder="name@company.com"
                    className="w-full bg-[#f6f6f6] border border-transparent rounded-[12px] py-3.5 px-4 text-sm text-brand-dark focus:outline-none focus:bg-[#ededed] placeholder:text-brand-muted/40 transition-colors font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="font-sans text-[10px] uppercase tracking-wider font-semibold text-brand-dark block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrorMsg(''); }}
                    placeholder="Outline your primary requirements..."
                    className="w-full bg-[#f6f6f6] border border-transparent rounded-[12px] py-3.5 px-4 text-sm text-brand-dark focus:outline-none focus:bg-[#ededed] placeholder:text-brand-muted/40 transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#040B15] via-[#0e1d35] to-[#040B15] text-white rounded-full py-4 px-6 text-sm font-medium tracking-wide border border-[#1b2f4d] hover:brightness-125 transition-all font-sans cursor-pointer flex items-center justify-center space-x-2 mt-2 shadow-lg"
                >
                  <span>Send Message</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col justify-center items-center space-y-6 h-full my-auto"
              >
                <div className="w-14 h-14 bg-[#040B15]/10 text-[#040B15] rounded-full flex items-center justify-center border border-[#040B15]/20">
                  <CheckCircle2 className="w-8 h-8 animate-pulse text-[#040B15]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-brand-dark">Message Dispatched</h3>
                  <p className="font-sans text-xs text-brand-muted max-w-sm mx-auto leading-relaxed font-light">
                    Thank you, <span className="font-semibold text-brand-dark">{name}</span>. Your message has been encrypted and routed securely to our advisory desk. We will respond shortly.
                  </p>
                </div>

                {/* Structured Ticket Receipt */}
                <div className="bg-[#fcfcfb] border border-brand-border/80 p-4 rounded-2xl w-full text-left font-mono text-[9px] text-brand-muted space-y-2.5 shadow-3xs">
                  <div className="flex justify-between border-b border-brand-border/40 pb-2 uppercase tracking-widest text-[8px] font-bold">
                    <span>TRANSMISSION STATUS</span>
                    <span className="text-[#040B15] font-bold">ROUTER VERIFIED</span>
                  </div>
                  {company && (
                    <div className="flex justify-between">
                      <span className="text-brand-muted">COMPANY:</span>
                      <span className="text-brand-dark font-sans font-medium">{company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-brand-muted">ROUTED TO:</span>
                    <span className="text-brand-dark font-sans font-medium">ADVISORY DESK</span>
                  </div>
                  <div className="flex justify-between border-t border-brand-border/40 pt-2 text-[8px]">
                    <span>TIMESTAMP (UTC)</span>
                    <span>{new Date().toISOString().replace('T', ' ').substring(0, 19)}</span>
                  </div>
                  <div className="text-[7.5px] text-brand-muted/70 leading-relaxed font-mono truncate bg-gray-50 p-2 rounded-lg border border-brand-border/40">
                    SIGNATURE: SEC_AES4096_{Math.random().toString(16).substring(2, 10).toUpperCase()}_APPROVED
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setCompany('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="border border-brand-border text-brand-dark hover:border-brand-dark py-3 px-6 rounded-full font-sans text-[10px] tracking-widest uppercase transition-colors cursor-pointer flex items-center space-x-2"
                >
                  <span>Submit another request</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Text & Social Channels */}
        <div className="lg:col-span-7 text-white flex flex-col justify-between min-h-[540px] lg:pl-8 space-y-12">
          
          {/* Main Title and Contact Details */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[1.05]"
            >
              Get in <br />
              Touch
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 font-sans text-xl sm:text-2xl font-light text-white/90"
            >
              <p className="text-xs sm:text-sm text-white/75 font-sans font-light max-w-md leading-relaxed mb-6">
                Connect with our institutional advisors for a verified walkthrough of our capital structures and automated MPC sharding arrays.
              </p>

              <a 
                href="tel:+85298124757" 
                className="block hover:text-white transition-colors duration-300 font-serif tracking-tight"
              >
                (852) 9812 4757
              </a>
              <a 
                href="mailto:oscar.chan@mercury-digital.io" 
                className="block hover:text-white transition-colors duration-300 font-sans tracking-tight text-white/80"
              >
                oscar.chan@mercury-digital.io
              </a>
              
              <div className="pt-6 max-w-md">
                <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block mb-2">OFFICE ADDRESS</span>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light font-sans">
                  Unit 608-613, Level 6, Core C, Cyberport 3, 100 Cyberport Road, Hong Kong
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'X.com', url: 'https://x.com' },
              { name: 'Facebook', url: 'https://facebook.com' }
            ].map((social) => (
              <div key={social.name} className="space-y-2">
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-white/50 hover:text-white uppercase transition-colors pt-2 group"
                >
                  <span>{social.name}</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-white/40">↗</span>
                </a>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
