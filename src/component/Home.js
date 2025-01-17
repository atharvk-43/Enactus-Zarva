import React, { useState } from 'react';
import { Search, Shield, Clock, MapPin, Star, Phone, Car, Users, Crown, Zap, UserCheck, Building } from 'lucide-react';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navigation - same as before */}
      <nav className="flex items-center justify-between px-16 h-[73px] bg-gray-800/90 backdrop-blur-sm shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/api/placeholder/165/50" alt="SafeTravel" className="w-[165px]" />
        </div>
        
        <div className="hidden md:flex gap-14">
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">RIDES</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">SAFETY</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">BUSINESS</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">HELP</a>
        </div>
        
        <div className="flex items-center gap-5">
          <button className="w-[163px] h-[53px] bg-yellow-500 text-gray-900 rounded-full font-semibold tracking-wide hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
            BOOK A RIDE
          </button>
          <button className="w-[120px] h-[53px] border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold tracking-wide hover:bg-yellow-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Hero Section with Map */}
      <section className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-24 py-16 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
            Your Safety is Our<br/><span className="text-yellow-400 relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-yellow-400/30 after:-bottom-2 after:left-0">Top Priority</span>
          </h1>
          <p className="text-lg mb-8 font-medium text-gray-300 leading-relaxed">
            Travel with confidence knowing every ride is monitored, verified, and protected. 24/7 safety features for your peace of mind.
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center w-full max-w-[467px] h-[53px] border border-gray-700 rounded-full px-4 bg-gray-800 shadow-lg focus-within:ring-2 focus-within:ring-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-2">
                <MapPin className="text-yellow-400" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Pickup location" 
                className="flex-1 ml-4 outline-none bg-transparent text-white placeholder-gray-400 font-medium"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="flex items-center w-full max-w-[467px] h-[53px] border border-gray-700 rounded-full px-4 bg-gray-800 shadow-lg focus-within:ring-2 focus-within:ring-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-2">
                <MapPin className="text-yellow-400" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="flex-1 ml-4 outline-none bg-transparent text-white placeholder-gray-400 font-medium"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button className="w-full max-w-[467px] h-[53px] bg-yellow-500 text-gray-900 rounded-full font-semibold tracking-wide hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center gap-2">
              <Car size={20} />
              RIDE NOW
            </button>
          </div>
          <p className="text-gray-400 font-medium">
            Download our app for better experience
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-gray-800">
            {/* Map placeholder with grid pattern */}
            <div className="w-full h-[400px] bg-gray-800 relative">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="border border-gray-700/30"
                  />
                ))}
              </div>
              {/* Map markers */}
              {pickup && (
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
                  <div className="w-4 h-4 bg-green-500 rounded-full absolute top-0" />
                </div>
              )}
              {destination && (
                <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping" />
                  <div className="w-4 h-4 bg-yellow-500 rounded-full absolute top-0" />
                </div>
              )}
              {pickup && destination && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-yellow-500/20 rounded-full animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - same as before */}
      <section className="py-16 px-24 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">Choose Your Perfect Ride</h2>
        <p className="text-lg text-gray-300 mb-12">Safe and comfortable options for every journey</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {[
            { title: 'Economy', desc: 'Affordable daily rides with verified drivers.', icon: <Car /> },
            { title: 'Premium', desc: 'Luxury vehicles for your special occasions.', icon: <Crown /> },
            { title: 'Family', desc: 'Spacious cars perfect for group travel.', icon: <Users /> },
            { title: 'Express', desc: 'Quick rides for urgent commutes.', icon: <Zap /> },
            { title: 'Women Only', desc: 'Exclusive service with female drivers.', icon: <UserCheck /> },
            { title: 'Corporate', desc: 'Business travel with professional service.', icon: <Building /> }
          ].map((service) => (
            <div key={service.title} className="bg-gray-800 rounded-xl p-8 text-center shadow-lg border-b-4 border-yellow-400 transition-all duration-500 hover:bg-yellow-500 group relative overflow-hidden hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-500">
                <div className="text-yellow-400 group-hover:text-gray-900 transition-all duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-900 transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-900 transition-all duration-500">
                {service.desc}
              </p>
              <button className="absolute left-1/2 -translate-x-1/2 -bottom-12 bg-gray-900 text-yellow-400 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-500 hover:bg-gray-800">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - same as before */}
      <footer className="bg-gray-900 text-white px-[5%] py-8 border-t border-gray-800">
        <div className="flex flex-wrap gap-8 justify-between mb-8">
          <div className="flex-1 min-w-[250px]">
            <img src="/api/placeholder/200/50" alt="SafeTravel" className="w-[200px] mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for safe and reliable travel.<br/>
              Available 24/7 across major cities.
            </p>
          </div>
          
          {[
            {
              title: 'Services',
              links: ['Book a Ride', 'Corporate Travel', 'Airport Transfer', 'Long Distance', 'Rentals', 'Group Booking']
            },
            {
              title: 'Safety',
              links: ['Safety Features', 'Driver Verification', 'COVID-19 Precautions', 'Insurance Coverage', 'Emergency Services']
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact']
            }
          ].map((section) => (
            <div key={section.title} className="flex-1 min-w-[250px]">
              <h3 className="text-lg font-medium mb-4 text-white">{section.title}</h3>
              {section.links.map((link) => (
                <p key={link} className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-yellow-400">{link}</a>
                </p>
              ))}
            </div>
          ))}
          
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-medium mb-4">Download Our App</h3>
            <div className="flex gap-4">
              <img src="/api/placeholder/120/40" alt="App Store" className="w-[120px]" />
              <img src="/api/placeholder/120/40" alt="Play Store" className="w-[120px]" />
            </div>
            <h3 className="text-lg font-medium mt-6 mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <img src="/api/placeholder/24/24" alt={social} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>© 2025 SafeTravel. All rights reserved. Terms of Service | Privacy Policy | Safety Policies</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;