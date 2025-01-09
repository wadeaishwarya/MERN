import React from 'react'


function Register() {
  return (
    <>
    <div>
        <hl className="text-white">Sign up</hl>
        <hl className="text-white text-2xl">Sign up</hl>
        
    </div>
     <div className="min-h-screen flex items-center justify-center bg-gray-700 gap-y-10">
      <div className="bg-black p-8  shadow-lg w-full max-w-md mx-4 gap-y-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-white gap-y-2">Signup</h1>
        <form>
          {/* Name Field */}
          <label className="block mb-4">
            <span className="text-white">Name</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </label>

          {/* Number Field */}
          <label className="block mb-4">
            <span className="text-white">Number</span>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your phone number"
            />
          </label>

          {/* Email Field */}
          <label className="block mb-4">
            <span className="text-white">Email</span>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </label>

          {/* Address Field */}
          <label className="block mb-4">
            <span className="text-white">Address</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your address"
            />
          </label>

          {/* City Field */}
          <label className="block mb-4">
            <span className="text-white">City</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your city"
            />
          </label>

          {/* State Field */}
          <label className="block mb-4">
            <span className="text-white">State</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your state"
            />
          </label>

          {/* Zip Code Field */}
          <label className="block mb-4">
            <span className="text-white">Zip Code</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your zip code"
            />
          </label>

          {/* Create Password Field */}
          <label className="block mb-4">
            <span className="text-white">Create Password</span>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Create a password"
            />
          </label>

          {/* Confirm Password Field */}
          <label className="block mb-6">
            <span className="text-white">Confirm Password</span>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Confirm your password"
            />
          </label>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              href="http://localhost:5178/"
              className="w-1/2 mr-2 bg-orange-700 text-white p-2 rounded-md hover:bg-orange-800 focus:ring focus:ring-orange-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              href="http://localhost:5173/"
            //   href="http://localhost:5176/"
              className="w-1/2 ml-2 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:ring focus:ring-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Register