import React from 'react'

function Signup() {
  return (
    <>
<div className="min-h-7 flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-gray-200 p-6 rounded-lg shadow-md">
    <h1 className="text-center text-2xl font-bold mb-6">Signup</h1>
    
    <form>
      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="text"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="daisy@site.com"
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none mr-2"
        >
          Signup
        </button>
        <button
          type="button"
          className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 focus:outline-none"
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

export default Signup