import { useState } from 'react';
import {
  FaChartLine,
  FaUserCheck,
  FaSmile,
  FaBrain,
  FaUserPlus,
  FaCogs,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`group flex flex-col ${
        isExpanded ? 'w-64' : 'w-20'
      } bg-white text-black transition-all duration-300 shadow-lg relative`}
    >
      <div className="flex items-center p-4 relative">
        <div className="flex items-center">
          <img
            src="/images/smart gaze.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700"
          />
          {isExpanded && (
            <span className="ml-3 text-lg font-normal text-gray-700">Smart Gaze</span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 text-gray-600 dark:text-gray-300 focus:outline-none absolute -right-3 top-3 bg-gray-200 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {isExpanded ? <FaChevronLeft className="text-sm" /> : <FaChevronRight className="text-sm" />}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {[
            { name: 'Main Dashboard', icon: FaChartLine, href: '/admin_dashboard' },
            { name: 'Attendance Dashboard', icon: FaUserCheck, href: '/admin_dashboard/attendance_dashboard' },
            { name: 'Emotional State Dashboard', icon: FaSmile, href: '/admin_dashboard/emotionalstate_dashboard' },
            { name: 'Attention Level Dashboard', icon: FaBrain, href: '/admin_dashboard/attentionlevel_dashboard' },
            { name: 'User Profile Creation', icon: FaUserPlus, href: '/admin_dashboard/userprofile_creation' },
            { name: 'Customizations', icon: FaCogs, href: '/admin_dashboard/customizations' },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleMenuItemClick(item.name)}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeItem === item.name
                    ? 'bg-custom-gradient text-white shadow-md'
                    : 'hover:bg-gray-200 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
              >
                <item.icon className="text-lg mr-3" />
                {isExpanded && <span className="text-sm font-normal">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
