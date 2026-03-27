'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sunrise-pg-backend.onrender.com'}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Account created successfully! Welcome to Sunrise PG.');
      } else {
        const errorData = await response.json();
        setStatus('error');
        setMessage(errorData.detail || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Unabe to connect to the server. Please check your internet connection.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Create Account</h1>
          <p className="text-indigo-200/60">Join the premium property experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-indigo-100">Full Name</label>
            <input
              type="text"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
              placeholder="Basavaraj"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-indigo-100">Email Address</label>
            <input
              type="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-indigo-100">Password</label>
            <input
              type="password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'Creating Account...' : 'Continue'}
          </button>
        </form>

        {message && (
          <div className={`p-4 rounded-xl text-center text-sm ${status === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
            {message}
          </div>
        )}

        <p className="text-center text-sm text-indigo-200/40">
          Already have an account?{' '}
          <Link href="/" className="text-indigo-300 hover:text-white transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
