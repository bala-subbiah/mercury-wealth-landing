/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, RefreshCw, BarChart3, HelpCircle } from 'lucide-react';

export default function FutureWealth() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedHorizon, setSelectedHorizon] = useState<'3Y' | '5Y' | '10Y'>('5Y');

  // Multi-year performance simulation data
  const dataMap = {
    '3Y': [
      { year: 'Q1 2024', mercury: 100, standard: 100, label: 'Inception' },
      { year: 'Q2 2024', mercury: 108, standard: 104, label: 'Dynamic Rebalance' },
      { year: 'Q3 2024', mercury: 114, standard: 102, label: 'Alpha Harvest' },
      { year: 'Q4 2024', mercury: 121, standard: 107, label: 'Bull Run Allocation' },
      { year: 'Q1 2025', mercury: 129, standard: 111, label: 'Hedge Mode Engaged' },
      { year: 'Q2 2025', mercury: 138, standard: 115, label: 'Private Credit Harvest' },
      { year: 'Q3 2025', mercury: 145, standard: 112, label: 'Asset Rotation' },
      { year: 'Q4 2025', mercury: 156, standard: 118, label: 'Alpha Capture' },
      { year: 'Q1 2026', mercury: 168, standard: 122, label: 'Dynamic Hedging' },
      { year: 'Q2 2026', mercury: 182, standard: 126, label: 'Peak Yield' },
    ],
    '5Y': [
      { year: '2022', mercury: 100, standard: 100, label: 'Deployment' },
      { year: '2023', mercury: 118, standard: 108, label: 'Yield Maximization' },
      { year: '2024', mercury: 139, standard: 114, label: 'Macro Shift Hedge' },
      { year: '2025', mercury: 165, standard: 122, label: 'Private Credit Integration' },
      { year: '2026', mercury: 198, standard: 129, label: 'Intelligent Rotation' },
    ],
    '10Y': [
      { year: '2017', mercury: 100, standard: 100, label: 'Historical Baseline' },
      { year: '2018', mercury: 115, standard: 104, label: 'Volatility Shield' },
      { year: '2019', mercury: 136, standard: 118, label: 'Equity Rotation' },
      { year: '2020', mercury: 168, standard: 125, label: 'Pandemic Liquidity Play' },
      { year: '2021', mercury: 210, standard: 142, label: 'Growth Peak' },
      { year: '2022', mercury: 232, standard: 131, label: 'Market Correction Hedge' },
      { year: '2023', mercury: 278, standard: 151, label: 'Arbitrage Wave' },
      { year: '2024', mercury: 334, standard: 169, label: 'Venture Capital Payoffs' },
      { year: '2025', mercury: 402, standard: 184, label: 'AI Strategy Deployment' },
      { year: '2026', mercury: 489, standard: 202, label: 'Active Compound Peak' },
    ]
  };

  const currentData = useMemo(() => dataMap[selectedHorizon], [selectedHorizon]);

  const maxVal = useMemo(() => {
    return Math.max(...currentData.map(d => Math.max(d.mercury, d.standard))) * 1.1;
  }, [currentData]);

  const minVal = 80;

  // Render SVG path coordinates
  const svgWidth = 600;
  const svgHeight = 250;

  const pointsMercury = useMemo(() => {
    const len = currentData.length;
    return currentData.map((d, index) => {
      const x = (index / (len - 1)) * svgWidth;
      const y = svgHeight - ((d.mercury - minVal) / (maxVal - minVal)) * svgHeight;
      return { x, y, val: d.mercury, label: d.label, year: d.year };
    });
  }, [currentData, maxVal]);

  const pointsStandard = useMemo(() => {
    const len = currentData.length;
    return currentData.map((d, index) => {
      const x = (index / (len - 1)) * svgWidth;
      const y = svgHeight - ((d.standard - minVal) / (maxVal - minVal)) * svgHeight;
      return { x, y, val: d.standard };
    });
  }, [currentData, maxVal]);

  const pathD = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    return points.reduce((acc, p, i) => {
      return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
    }, '');
  };

  const areaD = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    const linePath = pathD(points);
    return `${linePath} L ${points[points.length - 1].x} ${svgHeight} L ${points[0].x} ${svgHeight} Z`;
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Beautiful Descriptive Context - Bento Box */}
          <div className="lg:col-span-5 border border-brand-border bg-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-neutral-500 uppercase block mb-4">
                01 / PERFORMANCE COMPONENT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] text-brand-dark font-light leading-[1.02] tracking-tight mb-6">
                The Next Era of Capital Compounding
              </h2>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-8">
                Traditional private banks rely on slow committees and standardized models that drag on performance with heavy administrative overhead. 
                <br /><br />
                Mercury runs a non-custodial capital optimization stack. Our AI models continuously adjust leverage, yield farming pools, private credit locks, and global equity weights. 
              </p>
            </div>

            {/* Micro Feature Grid - Bento List */}
            <div className="space-y-4 border-t border-brand-border pt-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#fafafa] border border-brand-border">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">Dynamic Alpha Generation</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-1 font-light leading-relaxed">
                    Arbitrage yield captures across cross-chain and traditional finance markets within milliseconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-t border-brand-border/40 pt-4">
                <div className="p-2 bg-[#fafafa] border border-brand-border">
                  <RefreshCw className="w-3.5 h-3.5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-semibold tracking-wider text-brand-dark uppercase">Autonomous Tax Harvesting</h4>
                  <p className="font-sans text-[11px] text-brand-muted mt-1 font-light leading-relaxed">
                    Intelligent programmatic tax harvesting minimizes liabilities in real-time, boosting compounding.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-t border-brand-border/40 pt-4">
                <div className="p-2 bg-[#fafafa] border border-brand-border">
                  <BarChart3 className="w-3.5 h-3.5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-semibold tracking-wider text-brand-dark uppercase">Transparent On-chain Audits</h4>
                  <p className="font-sans text-[11px] text-brand-muted mt-1 font-light leading-relaxed">
                    Every allocation shift, fee deduction, and capital lock is cryptographically verified in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: High-Fidelity Performance Chart Visualizer - Bento Box */}
          <div className="lg:col-span-7 bg-white border border-brand-border p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-brand-border mb-6">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase block">02 / BENCHMARKING APPARATUS</span>
                  <h3 className="font-serif text-xl font-normal text-brand-dark mt-1">Mercury Alpha vs PWM Average</h3>
                </div>
                
                {/* Horizon Switchers */}
                <div className="flex bg-[#fafafa] border border-brand-border p-1 mt-3 sm:mt-0">
                  {(['3Y', '5Y', '10Y'] as const).map((h) => (
                    <button
                      key={h}
                      onClick={() => { setSelectedHorizon(h); setHoveredIndex(null); }}
                      className={`px-3 py-1 text-[9px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                        selectedHorizon === h
                          ? 'bg-brand-dark text-white font-medium'
                          : 'text-brand-muted hover:text-brand-dark'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#fafafa] border border-brand-border p-4">
                  <span className="font-mono text-[8px] text-brand-muted tracking-widest uppercase">MERCURY ACTIVE COMPOUND</span>
                  <div className="text-2xl font-sans font-light text-brand-dark mt-1">
                    {selectedHorizon === '3Y' ? '+82%' : selectedHorizon === '5Y' ? '+98%' : '+389%'}
                  </div>
                </div>
                <div className="bg-[#fafafa] border border-brand-border p-4">
                  <span className="font-mono text-[8px] text-brand-muted tracking-widest uppercase">TRADITIONAL PWM AVG</span>
                  <div className="text-2xl font-sans font-light text-brand-muted mt-1">
                    {selectedHorizon === '3Y' ? '+26%' : selectedHorizon === '5Y' ? '+29%' : '+102%'}
                  </div>
                </div>
              </div>

              {/* The SVG Canvas Chart */}
              <div className="relative w-full h-[230px] mt-2 select-none">
                <svg 
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                  className="w-full h-full overflow-visible"
                >
                  {/* Horizontal grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={svgHeight * p}
                      x2={svgWidth}
                      y2={svgHeight * p}
                      stroke="#eeeeee"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Shaded Area for Mercury */}
                  <path
                    d={areaD(pointsMercury)}
                    fill="url(#mercuryAreaGrad)"
                    opacity="0.05"
                  />

                  {/* Traditional Private Bank Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    d={pathD(pointsStandard)}
                    fill="none"
                    stroke="#a3a3a3"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Mercury Primary Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    d={pathD(pointsMercury)}
                    fill="none"
                    stroke="#0f1011"
                    strokeWidth="2.5"
                  />

                  {/* Interactive Hover Areas */}
                  {pointsMercury.map((p, idx) => (
                    <g key={idx}>
                      <rect
                        x={p.x - svgWidth / (currentData.length * 2)}
                        y="0"
                        width={svgWidth / currentData.length}
                        height={svgHeight}
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />
                      
                      {/* Active highlight dots */}
                      {hoveredIndex === idx && (
                        <>
                          <line
                            x1={p.x}
                            y1="0"
                            x2={p.x}
                            y2={svgHeight}
                            stroke="#111111"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r="5"
                            fill="#0f1011"
                          />
                          <circle
                            cx={p.x}
                            cy={pointsStandard[idx].y}
                            r="4"
                            fill="#a3a3a3"
                          />
                        </>
                      )}
                    </g>
                  ))}

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="mercuryAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0f1011" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Chart X-Axis Labels */}
              <div className="flex justify-between items-center px-1 mt-4 font-mono text-[9px] text-brand-muted uppercase">
                {currentData.map((d, i) => (
                  <span key={i} className="text-center">{d.year}</span>
                ))}
              </div>
            </div>

            {/* Dynamic Active Step Indicator */}
            <div className="mt-8 p-4 bg-[#fafafa] border border-brand-border min-h-[72px] flex items-center justify-between">
              {hoveredIndex !== null ? (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex items-center justify-between"
                >
                  <div>
                    <span className="font-mono text-[8px] text-brand-muted tracking-wider uppercase block">
                      TIMELINE SNAPSHOT ({currentData[hoveredIndex].year})
                    </span>
                    <span className="font-sans text-xs text-brand-dark font-medium italic">
                      "{currentData[hoveredIndex].label}"
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[8px] text-brand-muted tracking-wider uppercase block">ALPHA ADVANTAGE</span>
                    <span className="font-sans text-xs text-[#040B15] font-bold">
                      +{currentData[hoveredIndex].mercury - currentData[hoveredIndex].standard}% over Benchmark
                    </span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center space-x-2.5 text-brand-muted text-[11px] font-light italic">
                  <HelpCircle className="w-4 h-4 text-brand-muted" />
                  <span>Hover along the performance curve to view historical optimization milestones.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
