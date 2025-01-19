import React, { useState } from 'react';
import { Search, Shield, Clock, MapPin, Star, Phone, Car, Users, Crown, Zap, UserCheck, Building, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Map from './Map';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white font-sans">
      <Navbar />

      {/* Hero Section with Map */}
      <section className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 md:px-12 py-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <Shield className="text-yellow-600" size={20} />
            <span className="text-yellow-800 font-medium">Trusted by 1M+ travelers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Travel Safe with<br/>
            <span className="text-yellow-600 relative inline-block">
              Complete Peace of Mind
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-600 leading-relaxed">
            Experience worry-free journeys with real-time tracking, verified drivers, and 24/7 customer support. Your safety is our commitment.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center w-full max-w-[467px] h-[60px] border border-gray-200 rounded-xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-200 transition-all duration-300">
              <MapPin className="text-yellow-600" size={20} />
              <input 
                type="text" 
                placeholder="Enter pickup location" 
                className="flex-1 ml-4 outline-none text-gray-700 placeholder-gray-400 font-medium"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="flex items-center w-full max-w-[467px] h-[60px] border border-gray-200 rounded-xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-200 transition-all duration-300">
              <MapPin className="text-yellow-600" size={20} />
              <input 
                type="text" 
                placeholder="Enter destination" 
                className="flex-1 ml-4 outline-none text-gray-700 placeholder-gray-400 font-medium"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button className="w-full max-w-[467px] h-[60px] bg-yellow-600 text-white rounded-xl font-semibold tracking-wide hover:bg-yellow-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-yellow-200 flex items-center justify-center gap-2">
              <Car size={20} />
              Book Secure Ride
            </button>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="text-yellow-600" size={20} />
              <span>Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-yellow-600" size={20} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Map/>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 text-center bg-gradient-to-b from-white to-yellow-50">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Safe Travel Options</h2>
        <p className="text-lg text-gray-600 mb-12">Choose the perfect ride that matches your comfort and safety needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { title: 'Women Safety Ride', desc: 'Exclusively female drivers for women passengers.', icon: <UserCheck /> },
            { title: 'Premium Safety', desc: 'Enhanced safety features with luxury comfort.', icon: <Crown /> },
            { title: 'Family Safe', desc: 'Extra spacious cars with child safety seats.', icon: <Users /> },
            { title: 'Quick Safe', desc: 'Swift rides without compromising security.', icon: <Zap /> },
            { title: 'Corporate Safe', desc: 'Professional service with added safety.', icon: <Building /> },
            { title: 'Night Safe', desc: 'Enhanced security features for night travel.', icon: <Shield /> }
          ].map((service) => (
            <div key={service.title} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <div className="text-yellow-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.desc}
              </p>
              <button className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white">
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">Your Safety Is Our Priority</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Multiple layers of protection for every journey</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Live Tracking', desc: 'Share your ride status with trusted contacts', icon: <MapPin /> },
              { title: 'Emergency SOS', desc: '24/7 emergency response team', icon: <Phone /> },
              { title: 'Driver Verification', desc: 'All drivers are thoroughly vetted', icon: <Shield /> },
              { title: 'Safe Route', desc: 'AI-powered safest route selection', icon: <Star /> }
            ].map((feature) => (
              <div key={feature.title} className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-yellow-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">SafeTravel</h3>
              <p className="text-gray-400">Your trusted partner for safe and secure travel, available 24/7.</p>
            </div>
            {[
              { title: 'Safety', links: ['Emergency Contacts', 'Safety Features', 'Driver Standards'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Safety Policy'] }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                {section.links.map((link) => (
                  <p key={link} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-yellow-400">{link}</a>
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>© 2025 SafeTravel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;