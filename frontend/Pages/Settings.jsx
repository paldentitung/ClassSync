import React, { useContext, useState } from "react";
import MainButton from "../Components/MainButton";
import { RoleContext } from "../Context/RoleContext";
import Header from "../Components/Header";

const Settings = () => {
  const { role } = useContext(RoleContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Header title="Settings" />
      <div className="p-6  flex flex-col gap-10">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Profile</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">Change</span>
              </div>
            </div>

            <div className="flex-1 space-y-5 w-full">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <MainButton name="Save Profile" />
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-md border border-red-200 p-8 ">
          <h2 className="text-2xl font-bold mb-6 text-red-700">Danger Zone</h2>
          <p className="text-red-700 mb-6">
            These actions are irreversible. Proceed with caution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MainButton
              name="Log Out"
              className="bg-gray-700 hover:bg-gray-800 text-white"
            />
            <MainButton
              name="Delete Account"
              className="bg-red-600 hover:bg-red-700 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
