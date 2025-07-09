// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IoTSensing from "./pages/IoTSensing";
import Dashboard from "./pages/Dashboard";
import WildlifeThreats from "./pages/WildlifeThreats";
import DroneStreaming from "./pages/DroneStreaming";
import Insights from "./pages/Insights";
import DroneMap from "./pages/DroneMap";
import AlertSettings from "./pages/AlertSettings";
import SignOut from "./pages/SignOut";

function App() {
    return (
        <Router>
            <div className="flex min-h-screen font-sans bg-gray-100">
                <Sidebar />
                <main className="flex-1 p-6">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/wildlife-threats" element={<WildlifeThreats />} />
                        <Route path="/drone-streaming" element={<DroneStreaming />} />
                        <Route path="/iot-sensing" element={<IoTSensing />} />
                        <Route path="/insights" element={<Insights />} />
                        <Route path="/drone-map" element={<DroneMap />} />
                        <Route path="/alert-settings" element={<AlertSettings />} />
                        <Route path="/sign-out" element={<SignOut />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
