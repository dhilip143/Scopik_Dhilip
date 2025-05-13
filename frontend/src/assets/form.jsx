import React, { useState } from "react";




function LoginForm() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-3xl shadow-md w-[360px]">
        <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">Login</h2>

        {/* Toggle Tabs */}
        <div className="flex border border-black rounded-full overflow-hidden mb-8 w-fit mx-auto">
          <button
            className={`px-4 py-2 text-white font-medium transition-all ${
              activeTab === "student"
                ? "bg-gradient-to-r from-blue-800 to-red-600"
                : "text-black"
            }`}
            onClick={() => setActiveTab("student")}
          >
            Students
          </button>
          <button
            className={`px-4 py-2 font-medium transition-all ${
              activeTab === "teacher"
                ? "bg-gradient-to-r from-blue-800 to-red-600 text-white"
                : "text-black"
            }`}
            onClick={() => setActiveTab("teacher")}
          >
            Teachers
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-blue-800 to-red-600 text-white font-medium py-2 rounded-md shadow-md hover:opacity-90 transition">
          Sign in as {activeTab === "student" ? "Student" : "Teacher"}
        </button>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t Have Account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
   
  );
}

export default LoginForm;