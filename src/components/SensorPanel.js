import React from "react";
import SensorCard from "./SensorCard";

export default function SensorPanel() {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md w-1/2">
            <h3 className="text-xl font-semibold mb-4">Test Zone A</h3>
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Zone"
                className="rounded-lg mb-3"
            />
            <div className="text-sm mb-4">
                <p><strong>Location:</strong> Test Zone A</p>
                <p><strong>Coordinates:</strong> -13.75, 24.17</p>
                <p><strong>Circuit Model:</strong> Raspberry Pi 4 Model B</p>
                <p><strong>Battery:</strong> 2150 mAh</p>
                <p><strong>Storage:</strong> 32 GB</p>
            </div>
            <hr className="mb-3" />
            <div className="space-y-2 text-sm">
                <SensorCard type="Heat Sensor" icon="🔥" threat="Bushfire" />
                <SensorCard type="Smoke Sensor" icon="🔥" threat="Bushfire" />
                <SensorCard type="Sound Sensor" icon="🎤" threat="Poaching & Deforestation" />
            </div>
        </div>
    );
}