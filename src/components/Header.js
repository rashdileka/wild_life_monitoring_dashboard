import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const routeTitles = {
        "/": "Dashboard",
        "/wildlife-threats": "Wildlife Threats",
        "/drone-streaming": "Drone Streaming",
        "/iot-sensing": "IoT Sensing",
        "/insights": "Insights",
        "/drone-map": "Drone Map",
        "/alert-settings": "Alert Settings",
        "/sign-out": "Sign Out",
    };

    const pageTitle = routeTitles[location.pathname] || "WildAsia";

    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold">{pageTitle}</h2>
            <div className="flex items-center gap-4">
                <span>🌐 Eng (US)</span>
                <div className="flex items-center gap-2">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <div>
                        <p className="font-medium">Mr. Pujitha Silva</p>
                        <p className="text-sm text-gray-500">Wildlife Officer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
