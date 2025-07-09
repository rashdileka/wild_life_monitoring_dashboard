import ZoneGrid from "../components/ZoneGrid";
import SensorPanel from "../components/SensorPanel";

export default function IoTSensing() {
    return (
        <div className="flex gap-6">
            <ZoneGrid />
            <SensorPanel />
        </div>
    );
}
