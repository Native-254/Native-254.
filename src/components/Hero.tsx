import React from 'react';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-12 bg-radial-[circle_at_50%_-20%] from-neutral-900 via-neutral-950 to-neutral-950 text-center">
      {/* Decorative radial lighting backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-[circle_800px_at_center_top] from-primary-500/10 to-transparent pointer-events-none" />

      {/* Scattered, well-blurred, subtle technological background icons that do not overpower text */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Computer Monitor */}
        <div className="absolute top-[18%] left-[7.5%] opacity-[0.14] text-primary-500 filter blur-[4px] scale-150 rotate-[-12deg] transition-all">
          <Icon name="Monitor" size={72} />
        </div>
        {/* Keyboard */}
        <div className="absolute top-[60%] left-[5%] opacity-[0.11] text-neutral-700 filter blur-[3.5px] scale-155 rotate-[15deg] transition-all">
          <Icon name="Keyboard" size={64} />
        </div>
        {/* Server Setup */}
        <div className="absolute top-[22%] right-[8%] opacity-[0.14] text-primary-500 filter blur-[4.5px] scale-[1.7] rotate-[8deg] transition-all">
          <Icon name="Server" size={80} />
        </div>
        {/* CPU */}
        <div className="absolute top-[72%] right-[6%] opacity-[0.11] text-neutral-700 filter blur-[3.5px] scale-150 rotate-[-18deg] transition-all">
          <Icon name="Cpu" size={68} />
        </div>
        {/* Hard Drive */}
        <div className="absolute top-[48%] left-[48%] -translate-x-1/2 opacity-[0.05] text-neutral-800 filter blur-[5px] scale-[2.2] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        {/* Status indicator badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800/80 bg-neutral-900/40 text-xs font-bold text-neutral-300 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Deploying Top‑Tier IT & Desktop Spec Solutions across Kenya</span>
        </div>

        {/* Catchy S-tier Display Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-50 tracking-tight leading-none">
          Accelerating your workflows with expert <span className="text-primary-400 relative">IT Solutions</span>
        </h1>

        {/* Detailed context paragraph */}
        <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          From precise hardware diagnostics and customized gaming PC spec building to robust weekly web hosting and professional certification training. Native 254 empowers your growth with premium workmanship.
        </p>

        {/* Dual Actions Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-4">
          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold text-sm tracking-tight shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Icon name="Wrench" size={16} /> Explore IT Services
          </a>
          <a
            href="#education"
            className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-200 rounded-full font-bold text-sm tracking-tight active:scale-98 transition-all flex items-center justify-center gap-2 shadow-2xs"
          >
            <Icon name="BookOpen" size={16} /> Elite Technical Courses
          </a>
        </div>

        {/* S-tier Metrics Dashboard */}
        <div className="pt-12 sm:pt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-neutral-900/80">
          <div className="text-center">
            <h3 className="font-heading text-3xl font-extrabold text-neutral-100">150+</h3>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
              Projects Solved
            </p>
          </div>
          <div className="text-center border-x border-neutral-900/80">
            <h3 className="font-heading text-3xl font-extrabold text-neutral-100">40+</h3>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
              Happy Clients
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-heading text-3xl font-extrabold text-neutral-100">3</h3>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
              Specialized Tracks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
