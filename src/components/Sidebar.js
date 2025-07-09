// components/Sidebar.js
import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";

export default function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true); // Sidebar starts open

    const navItems = [
        {label: "📊 Dashboard", path: "/"},
        {label: "🐾 Wildlife Threats", path: "/wildlife-threats"},
        {label: "🚁 Drone Streaming", path: "/drone-streaming"},
        {label: "🌲 IoT Sensing", path: "/iot-sensing"},
        {label: "📈 Insights", path: "/insights"},
        {label: "🗺️ Drone Map", path: "/drone-map"},
        {label: "🔔 Alert Settings", path: "/alert-settings"},
        {label: "🚪 Sign Out", path: "/sign-out"},
    ];

    return (
        <>
            {/* Toggle button (Mobile - fixed, always visible on small screens) */}
            <button
                className={`fixed top-4 left-4 z-50 p-2 rounded-md text-green-600 bg-white shadow-md md:hidden
                    transition-transform duration-300
                    ${isOpen ? "translate-x-64" : "translate-x-0"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>

            {/* Toggle button (Desktop - shown only when sidebar is closed) */}
            {!isOpen && (
                <button
                    className="hidden md:flex fixed top-4 left-4 z-50 p-2 rounded-md text-green-600 bg-white shadow-md hover:bg-green-100 transition"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28}/>
                </button>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-md p-5 flex flex-col justify-between transition-transform duration-300 z-40
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}  // ⬅️ Removed md:translate-x-0
            >

                <div>
                    {/* Title + Desktop toggle button (inside) */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-green-600">Dabang</h1>
                        {isOpen && (
                            <button
                                className="hidden md:inline-flex p-2 text-green-600 rounded-md hover:bg-green-100"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={24}/>
                            </button>
                        )}
                    </div>

                    {/* Navigation */}
                    <ul className="space-y-4 text-gray-700">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => {
                                        if (window.innerWidth < 768) setIsOpen(false); // close only on mobile
                                    }}
                                    className={`block p-2 rounded-lg hover:bg-green-100 transition ${
                                        location.pathname === item.path ? "bg-green-200" : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer area */}
                <div className="bg-green-100 p-4 rounded-md text-center mt-8">
                    <h2 className="font-semibold">WildAsia App</h2>
                    <p className="text-sm mt-1">Install the mobile app</p>
                    <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded-md">
                        Get App
                    </button>
                </div>
            </aside>
        </>
    );
}
