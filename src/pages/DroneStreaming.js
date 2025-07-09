import React from "react";
import { FaPlay, FaHome } from "react-icons/fa";

export default function DroneStreaming() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Drone Streaming</h1>

            {/* Video Stream Section */}
            <div className="bg-white shadow rounded-lg p-4 mb-6">
                <div className="relative w-full h-64 rounded overflow-hidden">
                    <img
                        src="/your-drone-stream-image.jpg"
                        alt="Drone View"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <FaPlay className="text-white text-4xl cursor-pointer" />
                    </div>
                    <div className="absolute top-2 right-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                        Coordinates: -13.75, 24.17
                    </div>
                </div>
            </div>

            {/* Drone Specifications Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Drone Image & Specs */}
                <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
                    <img
                        src="/DJI_Mavic-3-Classic_cover-3.jpg"
                        alt="Drone"
                        className="w-40 h-32 object-contain mb-4"
                    />
                    <div className="text-left w-full space-y-2">
                        <p><strong>Drone Model:</strong> DJI Avata 2</p>
                        <p><strong>Battery Capacity:</strong> 2150 mAh</p>
                        <p><strong>Storage Capacity:</strong> 32 GB</p>
                        <p><strong>Flying Speed:</strong> 21 km/h</p>
                        <p><strong>Aerial Coverage:</strong> 13 km²</p>
                    </div>
                </div>

                {/* Drone Manual (Thumbnail + Download) */}
                <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold mb-3">Drone Manual</h3>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                        alt="PDF Icon"
                        className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm text-gray-700 mb-3">
                        DJI_Avata_2_User_Manual_v1.0_en.pdf
                    </p>
                    <a
                        href="/DJI_Avata_2_User_Manual_v1.0_en.pdf"
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Download Manual
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Start Mission
                    </button>
                    <button className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center justify-center gap-2">
                        <FaHome />
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
}
