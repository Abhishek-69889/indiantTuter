import React, { useState } from 'react'
import './Sidebar.css'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <>
      <h2 id='show-button'><button onClick={toggleSidebar}>View</button></h2>
    <aside className="flex fixed h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8" id='sidebar' style={{ display: isVisible ? 'block' : 'none' }}>
    <h2 id='hide-button'><button onClick={toggleSidebar}>Hide</button></h2>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-lg font-semibold uppercase text-gray-900">Profile</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              {/* <Wallet className="h-5 w-5" aria-hidden="true" /> */}
              <span className="mx-2 text-sm font-medium">All Classes</span>
            </a>
          </div>
          <div className="space-y-3 ">
            {/* <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label> */}
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              {/* <Newspaper className="h-5 w-5" aria-hidden="true" /> */}
              <span className="mx-2 text-sm font-medium">Update Class/Subject</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              {/* <BellRing className="h-5 w-5" aria-hidden="true" /> */}
              <span className="mx-2 text-sm font-medium">Update Location</span>
            </a>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/price"
            >
              {/* <Paperclip className="h-5 w-5" aria-hidden="true" /> */}
              <span className="mx-2 text-sm font-medium">Upgrade Plan</span>
            </Link>
          </div>
        </nav>
        <div className="mt-6">
          
          {/* <div className="mt-6 flex items-center justify-between">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="h-7 w-7 rounded-full object-cover"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700">Dan Abromov</span>
            </a>
            <a
              href="#"
              className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
            >
              <LogIn className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </div>
    </aside>
    </>
  )
}
