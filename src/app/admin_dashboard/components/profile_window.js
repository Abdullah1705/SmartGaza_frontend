import React from 'react';
import { FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';

// ThemeToggle Component with "Change Theme" label
function ThemeToggle({ isDarkMode, toggleTheme }) {
  const handleToggle = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to parent elements
    toggleTheme(); // Call the toggleTheme function to switch themes
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-black">Change Theme</span>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle} // Use the custom handler
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
        </label>
        <div className="ml-3">
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
        </div>
      </div>
    </div>
  );
}


// ProfileDropdown Component
export default function ProfileDropdown({ isOpen, isDarkMode, toggleTheme }) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <img src="/images/admin.jpeg" alt="Admin Profile" className="w-10 h-10 rounded-full" />
          <div>
            <span className="block font-medium text-gray-800">Ayesha Nazneen</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div>
        <div className="space-y-2">
          <button className="w-full text-left p-2 rounded hover:bg-gray-100">Your profile</button>
        </div>
        <hr className="my-4" />
        <div className="space-y-2">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button className="w-full flex items-center text-left p-2 rounded hover:bg-gray-100 text-red-500">
            <FaSignOutAlt className="mr-2" /> Log out
          </button>
        </div>
      </div>
    </div>
  );
}
