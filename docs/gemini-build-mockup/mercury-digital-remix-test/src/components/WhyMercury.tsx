/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Cpu, ShieldCheck, Activity, Database, RefreshCw } from 'lucide-react';

interface VaultDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  gridClass: string;
  stats: {
    apy: string;
    tvl: string;
    latency: string;
    riskProfile: string;
    jurisdiction: string;
  };
  technicalHighlights: string[];
  simulationLogs: string[];
}

export default function WhyMercury() {
  const [selectedVault, setSelectedVault] = useState<VaultDetail | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [liveLogs, setLiveLogs] = useState<string[]>([]);

  const vaults: VaultDetail[] = [
    {
      id: 'v1',
      category: '01 / YIELD CAPTURE',
      title: 'Aether Vault®',
      description: 'Slippage-free programmatic yield capture executing across 14 offshore sovereign registries continuously.',
      image: '/src/assets/images/regenerated_image_1784490094182.png',
      gridClass: 'col-span-12 md:col-span-7',
      stats: {
        apy: '14.2% Stable APY',
        tvl: '$124.5M AUM',
        latency: '< 1.8ms Execution',
        riskProfile: 'Delta-Neutral Arbitrage',
        jurisdiction: 'Zurich / Singapore'
      },
      technicalHighlights: [
        'Multi-pool gasless transaction routing routers',
        'Slippage protection limit parameters dynamically scaled',
        'Automatic protocol fee optimization routines'
      ],
      simulationLogs: [
        'Establishing secure connection to Zurich core router...',
        'Scanning decentralized arbitrage rate differentials...',
        'Identified rate premium on Singapore-segregated stable contracts (+1.84%)',
        'Executing non-custodial multi-sig routing wrapper swap...',
        'Slippage audit confirmed: 0.00% capital variance.',
        'Yield compounding complete. Rebalancing cycle sleeping.'
      ]
    },
    {
      id: 'v2',
      category: '02 / ASSET WRAPPERS',
      title: 'Apex Portfolio®',
      description: 'Bespoke multi-jurisdictional legal and cryptographic wrappers shielding sovereign trust capital.',
      image: '/src/assets/images/regenerated_image_1784490243826.png',
      gridClass: 'col-span-12 md:col-span-5',
      stats: {
        apy: '+24.1% Compound',
        tvl: '$340.2M Protected',
        latency: 'Continuous Rebalance',
        riskProfile: 'Asset-Backed Wealth',
        jurisdiction: 'Cayman Islands / Vaduz'
      },
      technicalHighlights: [
        'Programmatic tax-loss-harvesting index overlay',
        'Segregated on-chain trust asset certificates',
        'Decentralized identity legal-wrapper integration'
      ],
      simulationLogs: [
        'Validating sovereign custodian KYC certificate hashes...',
        'Reviewing real-time global tax compliance matrices...',
        'Sovereign asset boundary conditions verified.',
        'Executing automatic tax offset index balancing sweep...',
        'Saved capital drag calculated: +$14,203.44 net alpha.',
        'Wrapper status: SECURE • AUDITED.'
      ]
    },
    {
      id: 'v3',
      category: '03 / CLEARING RAILWAYS',
      title: 'Kronos Pipeline®',
      description: 'Sub-second digital routing and clearing infrastructure bypassing standard SWIFT settlement gates.',
      image: '/src/assets/images/regenerated_image_1784490246098.png',
      gridClass: 'col-span-12 md:col-span-5',
      stats: {
        apy: '0.01% Flat Drag',
        tvl: '$82.4M Daily Vol',
        latency: '620ms Settlement',
        riskProfile: 'Ultra-Low Settlement',
        jurisdiction: 'Singapore MAS Compliant'
      },
      technicalHighlights: [
        'Cryptographic cross-ledger liquidity pools',
        'Direct atomic gross settlement protocol blocks',
        'Pre-screened anti-money laundering block scanners'
      ],
      simulationLogs: [
        'Pinging Singapore MAS-aligned API clearing nodes...',
        'Polling on-ledger atomic settlement corridors...',
        'Found liquidity depth matching transfer request of $5,000,000...',
        'Broadcasting cryptographic ledger settlement block...',
        'Block confirmed: Settlement achieved in 580ms.',
        'Corridor clean. Zero-settlement drag verified.'
      ]
    },
    {
      id: 'v4',
      category: '04 / CUSTODY NODES',
      title: 'Genesis Custody®',
      description: 'Multi-party computation key sharding keeping capital fully private and decentralized.',
      image: '/src/assets/images/genesis_wrapper_1784370736666.jpg',
      gridClass: 'col-span-12 md:col-span-7',
      stats: {
        apy: 'Zero-Trust Storage',
        tvl: '$1.2B Total Segregated',
        latency: 'Multi-Sig Consensus',
        riskProfile: 'Sovereign MPC Shield',
        jurisdiction: 'Swiss FINMA Standard'
      },
      technicalHighlights: [
        'Threshold secret sharing cryptographic keys',
        'Offline cold-tier hardware nodes redundancy',
        'Failsafe emergency backup trust succession'
      ],
      simulationLogs: [
        'Initiating threshold MPC key shard audit...',
        'Confirming 2-of-3 secure server node consensus...',
        'Hardware security modules (HSM) checking status: LIVE.',
        'Evaluating cryptographic secure enclosure temperature...',
        'Zero-trust succession parameters validated.',
        'Sovereign capital shield is 100% active.'
      ]
    }
  ];

  const handleRunSimulation = () => {
    if (!selectedVault) return;
    setSimulating(true);
    setLiveLogs([]);
    
    // Simulate interactive on-chain logging line by line
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < selectedVault.simulationLogs.length) {
        setLiveLogs(prev => [...prev, selectedVault.simulationLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 900);
  };

  return (
    <section className="bg-[#fcfcfb] py-20 px-6 sm:px-12 border-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block matching Framer Norell visual styling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-none">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] text-brand-dark font-light leading-[0.98] tracking-tight">
              Active Capital Vaults &amp; Architectures
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-md">
              A curated suite of institutional-grade algorithmic capital structures engineered for absolute wealth protection, dynamic rebalancing, and robust intergenerational compounding.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout - Interactive Framer Animations */}
        <div className="grid grid-cols-12 gap-8">
          {vaults.map((vault) => (
            <motion.div
              key={vault.id}
              onClick={() => {
                setSelectedVault(vault);
                setLiveLogs([]);
                setSimulating(false);
              }}
              className={`${vault.gridClass} h-[380px] sm:h-[480px] relative rounded-[40px] overflow-hidden border border-brand-border bg-white group cursor-pointer shadow-xs`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Grayscale to color transition image backdrop */}
              <div className="absolute inset-0 z-0">
                <img
                  src={vault.image}
                  alt={vault.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-[0.93] contrast-[1.03] transition-all duration-[1200ms] group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-100"
                />
                {/* Dynamic overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-brand-dark/10 opacity-80 group-hover:opacity-85 transition-opacity duration-500" />
              </div>

              {/* Bottom Info overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end space-y-3 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {vault.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xs group-hover:bg-white group-hover:text-brand-dark transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="font-sans text-[11px] sm:text-xs text-white/75 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                  {vault.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Console Drawer for Vault Inspection */}
      <AnimatePresence>
        {selectedVault && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVault(null)}
              className="absolute inset-0 bg-brand-dark/45 backdrop-blur-md"
            />

            {/* Immersive interactive modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#fcfcfb] border border-brand-border rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 z-10"
            >
              {/* Left Column: Picture & Header */}
              <div className="lg:col-span-5 bg-brand-dark text-white p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img
                    src={selectedVault.image}
                    alt={selectedVault.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/50 border border-white/10 py-1 px-2.5 rounded-full bg-white/5 backdrop-blur-xs">
                    {selectedVault.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">
                    {selectedVault.title}
                  </h3>
                  <p className="font-sans text-xs text-white/80 font-light leading-relaxed">
                    {selectedVault.description}
                  </p>
                </div>

                {/* High fidelity metadata stats */}
                <div className="relative z-10 border-t border-white/10 pt-6 mt-8 space-y-3.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[8.5px] tracking-wider text-white/50 uppercase">TARGET EFFICIENCY</span>
                    <span className="font-sans font-semibold text-white uppercase">{selectedVault.stats.apy}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[8.5px] tracking-wider text-white/50 uppercase">ACTIVE ALLOCATIONS</span>
                    <span className="font-sans font-semibold text-white uppercase">{selectedVault.stats.tvl}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[8.5px] tracking-wider text-white/50 uppercase">EXECUTION SPEED</span>
                    <span className="font-sans font-semibold text-white uppercase">{selectedVault.stats.latency}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[8.5px] tracking-wider text-white/50 uppercase">BOUND JURISDICTION</span>
                    <span className="font-sans font-semibold text-white uppercase">{selectedVault.stats.jurisdiction}</span>
                  </div>
                </div>

                {/* Close Button on Mobile (absolute positioned) */}
                <button
                  onClick={() => setSelectedVault(null)}
                  className="absolute top-6 right-6 lg:hidden w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Right Column: Interactive Diagnostic Console & Specs */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                
                {/* Tech Specs list */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                    <span className="font-mono text-[9px] tracking-widest text-brand-dark font-semibold uppercase">
                      TECHNICAL SPECIFICATION DIRECTIVES
                    </span>
                    <button
                      onClick={() => setSelectedVault(null)}
                      className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full border border-brand-border hover:border-brand-dark transition-colors"
                    >
                      <X className="w-4 h-4 text-brand-dark" />
                    </button>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {selectedVault.technicalHighlights.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <div className="p-1 bg-[#fafafa] border border-brand-border mt-0.5">
                          <Cpu className="w-3 h-3 text-brand-dark" />
                        </div>
                        <span className="font-sans text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Simulator Screen Console */}
                <div className="bg-[#040B15] p-4 rounded-3xl overflow-hidden font-mono text-[10px] space-y-4 shadow-inner border border-[#1b2f4d]">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="text-white/60 flex items-center gap-1.5 uppercase tracking-widest text-[8px]">
                      <Database className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                      SECURE TERMINAL CONSOLE
                    </span>
                    <span className="text-white bg-gradient-to-r from-[#040B15] to-[#122442] border border-[#1b2f4d] py-0.5 px-2 rounded text-[7.5px] font-bold">
                      CORE ROUTER ONLINE
                    </span>
                  </div>

                  {/* Log console window with real typewriter lines */}
                  <div className="space-y-2 text-white/80 min-h-[140px] overflow-y-auto max-h-[160px] leading-relaxed select-none">
                    {liveLogs.length === 0 ? (
                      <div className="text-white/30 italic flex items-center justify-center h-full pt-10">
                        Diagnostics idle. Click "Run Autonomous Diagnostic" to audit core metrics.
                      </div>
                    ) : (
                      liveLogs.map((log, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-sky-400">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Simulator action buttons */}
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center gap-2">
                    <button
                      onClick={handleRunSimulation}
                      disabled={simulating}
                      className="flex-1 py-2.5 px-4 rounded-xl font-sans text-[9px] tracking-[0.15em] uppercase font-semibold text-brand-dark bg-white hover:bg-neutral-100 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className={`w-3 h-3 ${simulating ? 'animate-spin' : ''}`} />
                      {simulating ? 'Auditing Vault...' : 'Run Autonomous Diagnostic'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[8px] text-brand-muted tracking-widest uppercase">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-brand-muted" />
                    SECURE MULTI-SIG COLD NODES ACTIVE
                  </span>
                  <span>ENCRYPTED 4096-AES</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
