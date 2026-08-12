/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TrendingUp, Sparkles, ShieldCheck, ArrowUpRight, ArrowRight, Zap } from 'lucide-react';

const sansStyle = { fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' };
const monoStyle = { fontFamily: '"JetBrains Mono", monospace' };

export default function CustomersSection() {
  const [activeTab, setActiveTab] = useState<'wealth' | 'family' | 'banking' | 'asset'>('wealth');

  return (
    <div className="bg-[#f6f7fa] py-20 sm:py-28 lg:py-40 w-full max-w-none px-6 sm:px-12 lg:px-16 xl:px-24 overflow-x-hidden border-none text-brand-dark" id="customers-anchor">
      <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24 lg:space-y-36">
        
        {/* Neo-Editorial Section Header */}
        <div className="w-full pb-10 sm:pb-16 lg:pb-20 border-b border-neutral-300/80 mb-6 sm:mb-10 lg:mb-12">
          <div className="flex flex-col space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] xl:text-[72px] text-brand-dark font-light leading-[0.98] tracking-tight">
              Bringing quiet efficiency <br className="hidden sm:inline" />
              to Modern Wealth
            </h2>
          </div>
        </div>

        {/* 2-Column Asymmetrical Bento Layout with Spaced Gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 items-stretch w-full">
          
          {/* LEFT COLUMN (lg:col-span-5) */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16 lg:col-span-5 h-full">
            
            {/* 1. TOP-LEFT CARD: WEALTH MANAGER (Borderless Box) */}
            <div className="flex flex-col group">
              <div 
                onClick={() => setActiveTab('wealth')}
                className="cursor-pointer bg-gradient-to-b from-[#a2b5c7] via-[#c4d4e2] to-[#dce7f1] hover:brightness-98 transition-all duration-300 rounded-none p-5 sm:p-6 lg:p-7 flex flex-col justify-center items-center min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden border-none"
              >
                {/* Inner 3-Card Stack with constrained width and exposed background whitespace */}
                <div className="w-full max-w-[260px] sm:max-w-[275px] lg:max-w-[280px] flex flex-col gap-2.5 sm:gap-3 my-auto">
                  {/* UI 1: Review Card */}
                  <div className="bg-white/95 backdrop-blur-xs p-2.5 sm:p-3 rounded-lg border border-white/80 shadow-xs shadow-slate-900/5 flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#b45309] text-[8px] sm:text-[9px] font-bold tracking-wider uppercase" style={monoStyle}>
                        <span className="w-1 h-1 rounded-full bg-[#d97706]"></span>
                        REVIEW
                      </span>
                    </div>
                    <h5 className="font-sans font-semibold text-[10px] sm:text-xs text-slate-900 leading-snug my-0.5">
                      Chan's family review for 2 household view
                    </h5>
                    <div className="mt-0.5">
                      <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-slate-900 hover:underline">
                        Schedule review <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </span>
                    </div>
                  </div>

                  {/* UI 2: Drift Card */}
                  <div className="bg-white/95 backdrop-blur-xs p-2.5 sm:p-3 rounded-lg border border-white/80 shadow-xs shadow-slate-900/5 flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#ffe4e6] text-[#e11d48] text-[8px] sm:text-[9px] font-bold tracking-wider uppercase" style={monoStyle}>
                        <span className="w-1 h-1 rounded-full bg-[#e11d48]"></span>
                        DRIFT
                      </span>
                    </div>
                    <h5 className="font-sans font-semibold text-[10px] sm:text-xs text-slate-900 leading-snug my-0.5">
                      Chan balanced fixed income +11.4% over the IPS target
                    </h5>
                    <div className="mt-0.5">
                      <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-slate-900 hover:underline">
                        Review rebalance <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </span>
                    </div>
                  </div>

                  {/* UI 3: Idle Cash Card */}
                  <div className="bg-white/95 backdrop-blur-xs p-2.5 sm:p-3 rounded-lg border border-white/80 shadow-xs shadow-slate-900/5 flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#d1fae5] text-[#059669] text-[8px] sm:text-[9px] font-bold tracking-wider uppercase" style={monoStyle}>
                        <span className="w-1 h-1 rounded-full bg-[#059669]"></span>
                        IDLE CASH
                      </span>
                    </div>
                    <h5 className="font-sans font-semibold text-[10px] sm:text-xs text-slate-900 leading-snug my-0.5">
                      HK$2.3M idle HKD at UBS, untouched for 72 days
                    </h5>
                    <div className="mt-0.5">
                      <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-slate-900 hover:underline">
                        Investment ideas <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wording Div below Card */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Actionable market insights at scale
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left max-w-lg">
                  Tailored investment strategies surfaced across your entire book in real time
                </p>
              </div>
            </div>

            {/* 2. BOTTOM-LEFT BLOCK: FAMILY OFFICE (Borderless Text Section) */}
            <div 
              onClick={() => setActiveTab('family')}
              className={`cursor-pointer py-6 sm:py-8 px-2 flex flex-col justify-center transition-all duration-300 bg-transparent rounded-none w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] border-none ${
                activeTab === 'family' ? 'opacity-100' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[50px] xl:text-[56px] text-brand-dark font-light leading-[1.02] tracking-tight text-left">
                Analyze market <br />
                complexity with <br />
                speed and clarity
              </h3>
            </div>

            {/* 3. ENGAGE CARD (Borderless Picture Card) */}
            <div className="flex flex-col group">
              <div 
                className="cursor-pointer bg-[#eaece0] transition-all duration-500 rounded-none h-[280px] xs:h-[320px] sm:h-[420px] md:h-[480px] lg:h-[620px] overflow-hidden relative flex items-center justify-center w-full border-none"
              >
                <img 
                  src="https://res.cloudinary.com/q1hzzizh/image/upload/v1785819924/computer_women_mtzeg1.png" 
                  alt="Women on computer" 
                  className="w-full h-full object-cover object-center" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Keep every relationship personal
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left max-w-lg">
                  Power deeper client engagement with AI that translates complex investment strategies into custom insights and visual stories in seconds
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (lg:col-span-7) */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16 lg:col-span-7 h-full">
            
            {/* 1. TOP-RIGHT CARD: BANKS (Tall Primary Dark Borderless Box) */}
            <div className="flex flex-col group">
              <div 
                onClick={() => setActiveTab('banking')}
                className="cursor-pointer bg-[#0d0f14] text-white transition-all duration-300 rounded-none p-10 sm:p-14 lg:p-18 flex flex-col justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden border-none"
              >
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-white font-light leading-tight max-w-xl">
                  Advisory Copilot &amp; <br />
                  Portfolio Analysis
                </h3>
              </div>

              {/* Wording Div */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Risk &amp; Suitability in one view
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left">
                  Unifies complex structured product exposures, scenario impacts, and compliance rules on one screen for instant approval.
                </p>
              </div>
            </div>

            {/* 2. BOTTOM-RIGHT BLOCK: ASSET MANAGER (Borderless Chart Box) */}
            <div className="flex flex-col group mt-[80px]">
              <div 
                onClick={() => setActiveTab('asset')}
                className="cursor-pointer w-full rounded-none overflow-hidden"
              >
                <img 
                  src="https://res.cloudinary.com/q1hzzizh/image/upload/v1786105076/analysis_Chart_hlfcch.png" 
                  alt="Portfolio Analysis Chart" 
                  referrerPolicy="no-referrer" 
                  className="w-full h-auto object-cover block rounded-none"
                />
              </div>

              {/* Wording Div */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Institutional-grade portfolio tracking
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left">
                  Track performance in real time, benchmark against custom market indexes, and uncover deeper insights into what’s driving your returns.
                </p>
              </div>
            </div>

            {/* 3. NEW BOTTOM-RIGHT BLOCK: OPERATIONS HEADLINE */}
            <div 
              className="flex-1 py-10 sm:py-14 px-4 bg-transparent flex flex-col justify-end min-h-[220px] sm:min-h-[280px] lg:min-h-[360px] border-none"
            >
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-brand-dark font-light leading-[1.02] tracking-tight">
                Make Your Daily <br />
                Operations Effortless
              </h3>
            </div>

          </div>

          {/* 3 WORKFLOW DIV CARDS BOX (Integrated into Bento Layout with Aligned Spacing) */}
          <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-4 lg:gap-8 xl:gap-12 items-stretch pt-4 sm:pt-8 lg:pt-10">
            
            {/* Column 1: Run firm-specific workflows */}
            <div className="flex flex-col h-full bg-transparent border-none rounded-none transition-all group">
              {/* High-Impact Illustration Container */}
              <div className="relative h-[280px] xs:h-[320px] sm:h-[360px] md:h-[320px] lg:h-[460px] xl:h-[480px] w-full bg-[#ebedf2] rounded-none border-none flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-2 lg:p-6 xl:p-8 overflow-hidden flex-shrink-0">
                {/* Ambient background image */}
                <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
                  <img 
                    src="https://res.cloudinary.com/q1hzzizh/image/upload/v1785817383/Backgrond_bzzutb.png" 
                    alt="Workflows background" 
                    className="w-full h-full object-cover object-[50%_30%] transform-gpu opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ebedf2]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 3 Linked Minimal UI Components Container */}
                <div className="relative z-10 w-full max-w-[243px] xs:max-w-[270px] sm:max-w-[297px] md:max-w-[220px] lg:max-w-[306px] scale-90 md:scale-[0.72] lg:scale-90 origin-center flex flex-col items-center space-y-1.5 sm:space-y-2">
                  
                  {/* 1st UI: Trigger Mira holding due diligence process */}
                  <div className="w-full bg-white rounded-xl p-3.5 sm:p-4.5 shadow-lg border border-neutral-100/80 text-center">
                    <div className="text-center font-semibold text-xs sm:text-sm text-neutral-900 tracking-tight" style={sansStyle}>
                      Run Mira holding auditing process
                    </div>
                  </div>

                  {/* Connecting Dots 1 */}
                  <div className="flex flex-col items-center justify-center space-y-1 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                  </div>

                  {/* 2nd UI: Process bars with tick boxes */}
                  <div className="w-full bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-neutral-100/80 space-y-2.5">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <div className="w-24 sm:w-32 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-neutral-200" />
                      </div>
                      <div className="bg-[#10b981] text-white font-medium text-[9px] sm:text-[10px] px-2.5 py-1 rounded-lg flex items-center space-x-1 shrink-0">
                        <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>Submitted</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between">
                      <div className="w-24 sm:w-32 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-neutral-200" />
                      </div>
                      <div className="bg-[#10b981] text-white font-medium text-[9px] sm:text-[10px] px-2.5 py-1 rounded-lg flex items-center space-x-1 shrink-0">
                        <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>Reviewed</span>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Dots 2 */}
                  <div className="flex flex-col items-center justify-center space-y-1 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                  </div>

                  {/* 3rd UI: Process completed : generate audit reports */}
                  <div className="w-full bg-black text-white rounded-xl p-3 sm:p-4 shadow-xl flex items-center justify-between">
                    <div className="text-left space-y-0.5">
                      <div className="font-bold text-xs sm:text-sm text-white">Completed</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-300 font-light">
                        Process completed : generate audit reports
                      </div>
                    </div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                </div>
              </div>

              {/* Description Block */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5 flex-grow">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Run firm custom workflows
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left">
                  Build, trigger, and execute custom workflows for office, fund structure, or banking operations targets without writing code.
                </p>
              </div>
            </div>

            {/* Column 2: Parse complex documentation */}
            <div className="flex flex-col h-full bg-transparent border-none rounded-none transition-all">
              {/* High-Impact Illustration Container */}
              <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-[320px] lg:h-[440px] xl:h-[480px] w-full bg-[#ebedf2] rounded-none border-none flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-0 overflow-hidden flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/q1hzzizh/image/upload/v1786352474/Parsing_SP_lvabbf.png" 
                  alt="Parsing complex documents illustration" 
                  className="w-full h-full object-contain object-top md:object-cover md:object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Description Block */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5 flex-grow">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Parse complex documents
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left">
                  Transform unstructured PDF transcripts, earnings calls, and complex spreadsheets into structured, clean, actionable relational tables automatically.
                </p>
              </div>
            </div>

            {/* Column 3: Create materials at ease */}
            <div className="flex flex-col h-full bg-transparent border-none rounded-none transition-all">
              {/* High-Impact Illustration Container */}
              <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-[320px] lg:h-[440px] xl:h-[480px] w-full bg-[#ebedf2] rounded-none border-none flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-0 overflow-hidden flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/q1hzzizh/image/upload/v1785816256/analyst_workbench_2_eibvlm.png" 
                  alt="Analyst workbench analyst documentation background" 
                  className="w-full h-full object-contain object-top md:object-cover md:object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Description Block */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-start items-start text-left space-y-1.5 flex-grow">
                <h4 className="font-serif text-sm font-semibold text-brand-dark leading-tight">
                  Create materials at ease
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light text-left">
                  Compile fully designed statements, executive summaries, agreements, and verified backing Excel models in seconds, matching brand templates.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}





