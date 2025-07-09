import React from "react";

const zones = ["A", "B", "C", "D", "E", "F"];

export default function ZoneGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 w-1/2">
            {zones.map((zone) => (
                <div
                    key={zone}
                    className="h-32 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center rounded-lg flex items-center justify-center text-white font-bold shadow-md"
                >
                    Test Zone {zone}
                </div>
            ))}
        </div>
    );
}