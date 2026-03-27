import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 text-white font-sans">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-4xl text-center space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
          SUNRISE PG
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100/80 font-light max-w-2xl mx-auto">
          Elevate your property management experience with our premium, cloud-integrated solution.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
          {/* Sign In Button */}
          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-indigo-500/20">
            <span className="relative z-10 text-lg font-semibold tracking-wide">Sign In</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {/* Sign Up Button */}
          <Link href="/signup">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-indigo-500/40 w-full md:w-auto">
              <span className="relative z-10 text-lg font-semibold tracking-wide">Get Started</span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
        </div>

        {/* Decorative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 opacity-50">
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-bold">Secure</h3>
            <p className="text-sm text-indigo-200/60">Neon Postgres encryption at its core.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-bold">Scalable</h3>
            <p className="text-sm text-indigo-200/60">Powered by Vercel & Render edge.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-bold">Seamless</h3>
            <p className="text-sm text-indigo-200/60">Unified FastAPI ecosystem.</p>
          </div>
        </div>
      </div>

      {/* Background Micro-animations (CSS-only) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%);
          filter: blur(80px);
          animation: float 20s infinite ease-in-out;
          z-index: 0;
        }
      `}</style>
      <div className="blob -top-48 -left-48"></div>
      <div className="blob -bottom-48 -right-48" style={{ animationDelay: '-10s' }}></div>
    </div>
  );
}
