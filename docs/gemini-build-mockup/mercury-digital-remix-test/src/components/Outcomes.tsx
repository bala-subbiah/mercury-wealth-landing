/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Outcomes() {
  return (
    <section className="bg-[#fcfcfb] py-20 px-6 sm:px-12 border-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Massive By Outcome Numbers Block - Framer Norell Style */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-none">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] text-brand-dark font-light leading-[0.98] tracking-tight">
                Performance By the Numbers
              </h2>
            </div>
            <div>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-xs">
                Empirical metrics validating our zero-trust capital automation and cross-border routing mechanics.
              </p>
            </div>
          </div>

          {/* Clean minimal thin-bordered numbers grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-brand-border bg-white divide-y lg:divide-y-0 lg:divide-x divide-brand-border rounded-[40px] overflow-hidden">
            
            {/* Metric 1 */}
            <motion.div 
              className="p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-[#fafafa]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-widest block">SOVEREIGN CAPITAL SHIELDED</span>
              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl text-brand-dark font-light tracking-tighter leading-none my-4 group-hover:scale-102 transition-transform duration-500">
                $1.2B+
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed">
                Total asset value programmatically secured and optimized across Swiss & Singapore multi-sig depository nodes.
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              className="p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-[#fafafa]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-widest block">AVERAGE ALPHA DEPLOYED</span>
              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl text-brand-dark font-light tracking-tighter leading-none my-4 group-hover:scale-102 transition-transform duration-500">
                +24.1%
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed">
                Compound alpha yield realized across core private client cohorts net of routing protocol fees.
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              className="p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-[#fafafa]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-widest block">ROUTING CLEARING LATENCY</span>
              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl text-brand-dark font-light tracking-tighter leading-none my-4 group-hover:scale-102 transition-transform duration-500">
                620ms
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed">
                Atomic gross settlement speed cleared directly over cross-ledger liquidity corridors.
              </p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div 
              className="p-8 sm:p-10 flex flex-col justify-between min-h-[180px] group hover:bg-[#fafafa]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-widest block">MPC THRESHOLD UPTIME</span>
              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl text-brand-dark font-light tracking-tighter leading-none my-4 group-hover:scale-102 transition-transform duration-500">
                99.9%
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed">
                Continuous cryptographic availability across offline secure cold-tier hardware security modules.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
