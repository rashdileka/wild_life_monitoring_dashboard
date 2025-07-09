import React from "react";

export default function SensorCard({ type, icon, threat }) {
    return (
        <div className="flex justify-between bg-gray-50 p-3 rounded-md border">
            <div>
                <p className="font-semibold">{type}</p>
                <p>Detection: Smoke, Gas</p>
                <p>Temp: 55°C - 125°C</p>
            </div>
            <div className="text-2xl">{icon}</div>
        </div>
    );
}