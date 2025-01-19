'use client'

import React, { useState, useEffect } from 'react'
import { Car } from 'lucide-react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    emergencyNumber: '',
    address: ''
  })
  const [iconScale, setIconScale] = useState(0)

  useEffect(() => {
    setIconScale(1)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup attempted with:', formData)
  }

  const InputField = ({ label, name, type = "text", placeholder, required = true }) => (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-2 font-['Inter']">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
      />
    </div>
  )

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 my-8">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div 
              className="transform transition-all duration-700 ease-out"
              style={{
                transform: `scale(${iconScale})`,
                opacity: iconScale,
              }}
            >
              <Car className="h-16 w-16 text-yellow-500 animate-bounce" />
            </div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2 font-['Poppins']">
            Join CabBooker
          </h2>
          <p className="text-gray-600 text-center mb-8 font-['Inter']">
            Create your account to start riding
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="fullName"
                placeholder="John Doe"
              />
              
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />

              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />

              <InputField
                label="Emergency Contact Number"
                name="emergencyNumber"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />

              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
              />

              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <InputField
              label="Home Address"
              name="address"
              placeholder="Enter your full address"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transform hover:scale-[1.02] transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 font-['Inter']">
              Already have an account?{' '}
              <Link to="/login" className="text-yellow-500 hover:underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignupPage