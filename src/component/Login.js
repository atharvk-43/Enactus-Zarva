import React, { useState, useEffect } from 'react';
import { Car, Shield, Bell, Lock, MapPin, Phone, Star, Heart } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iconScale, setIconScale] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setIconScale(1);
    setTimeout(() => setShowIcons(true), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  const floatingIcons = [
    { icon: Shield, delay: 0, position: 'top-20 left-20' },
    { icon: Bell, delay: 200, position: 'top-40 right-24' },
    { icon: MapPin, delay: 400, position: 'bottom-32 left-16' },
    { icon: Star, delay: 600, position: 'bottom-24 right-20' },
    { icon: Heart, delay: 800, position: 'top-32 left-1/2' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-yellow-200/50 rounded-full -top-20 -left-20 animate-pulse" />
          <div className="absolute w-96 h-96 bg-yellow-100/50 rounded-full -bottom-32 -right-32 animate-pulse delay-700" />
        </div>

        {/* Floating icons */}
        {showIcons && floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} opacity-0 animate-float`}
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: `${item.delay}ms`,
              opacity: 0,
            }}
          >
            <item.icon className="text-yellow-600/30 w-8 h-8" />
          </div>
        ))}

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative z-10 border border-yellow-100">
          <div className="p-8">
            {/* Logo animation */}
            <div className="flex items-center justify-center mb-8 relative">
              <div
                className="transform transition-all duration-700 ease-out"
                style={{
                  transform: `scale(${iconScale})`,
                  opacity: iconScale,
                }}
              >
                <div className="relative">
                  <Car className="h-16 w-16 text-yellow-500 animate-bounce" />
                  <Shield className="h-8 w-8 text-yellow-400 absolute -bottom-2 -right-2 animate-pulse" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2 font-['Poppins']">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-center mb-8 font-['Inter']">
              Your safe journey begins here
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-gray-700 text-sm font-medium mb-2 font-['Inter']">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-700 text-sm font-medium mb-2 font-['Inter']">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-yellow-300/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Sign In Securely</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            <div className="text-center mt-6">
              <Link to="/signup">
                <p className="text-sm text-gray-600 font-['Inter']">
                  New to SafeTravel?{' '}
                  <span className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-300">
                    Create Account
                  </span>
                </p>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex justify-center space-x-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Shield className="w-4 h-4 mr-1 text-yellow-500" />
                <span>Secure Login</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Lock className="w-4 h-4 mr-1 text-yellow-500" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoginPage;