'use client'; // Ensure this is a client component since we're using React hooks

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter(); // Initialize useRouter
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    // Add authentication logic here if needed

    // Navigate to the admin_dashboard page after login
    router.push('/admin_dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gradient">
      <div className="bg-white bg-opacity-50 rounded-lg shadow-2xl p-8 flex flex-col items-center max-w-md mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          SMART GAZE
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Sign in to access the CCTV Classroom Monitoring System
        </p>
        <div className="w-full flex justify-center mb-6">
          <Image 
            src="/images/smart gaze.jpg"
            alt="Smart Gaze Illustration"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              User ID
            </label>
            <input 
              type="text" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your User ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-sm text-right">
            <Link href="/forgot_password">
              <span className="font-medium text-gray-600 hover:text-gray-700">
                Forgot password?
              </span>
            </Link>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
