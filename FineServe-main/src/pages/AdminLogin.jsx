import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Lock, Mail, Shield, ArrowRight } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const expectedEmail = (import.meta.env.VITE_ADMIN_EMAIL || '').trim()
    const expectedPassword = (import.meta.env.VITE_ADMIN_PASSWORD || '').trim()

    if (!expectedEmail || !expectedPassword) {
      setError('Admin credentials not configured. Set VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD in .env')
      return
    }

    if (email.trim().toLowerCase() === expectedEmail.toLowerCase() && password === expectedPassword) {
      localStorage.setItem('adminAuth', 'true')
      try { localStorage.setItem('adminEmail', expectedEmail) } catch (e) {}
      navigate('/admin/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <>
      <main className="bg-gradient-to-b from-[#3776BE] to-white min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5A9BD5]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Left Side - Branding Card */}
            <div className="bg-gradient-to-br from-[#3776BE] via-[#4A85C7] to-[#5A9BD5] p-12 flex flex-col justify-center items-start text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl mb-6 border border-white/30">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                  Welcome Back,<br />Admin
                </h1>
                
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Secure access to your administrative dashboard. Manage and monitor with confidence.
                </p>
                
              </div>
            </div>

            {/* Right Side - Login Form Card */}
            <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-200 ${focusedField === 'email' ? 'text-[#3776BE]' : 'text-gray-400'}`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3776BE] focus:bg-blue-50/30 transition-all duration-200"
                      placeholder="admin@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-200 ${focusedField === 'password' ? 'text-[#3776BE]' : 'text-gray-400'}`}>
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3776BE] focus:bg-blue-50/30 transition-all duration-200"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#3776BE] to-[#5A9BD5] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#3776BE]/30 flex items-center justify-center group"
                >
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Lock className="w-3 h-3" />
                  <span>Secured by end-to-end encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}