import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bus, Train, Car, MapPin, Clock, Users, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data for vehicles
const mockVehicles = [
  { id: 1, type: "bus", lat: 40.7128, lng: -74.0060, route: "Route 42", eta: "3 min", occupancy: 75, status: "on-time" },
  { id: 2, type: "metro", lat: 40.7589, lng: -73.9851, route: "Line A", eta: "1 min", occupancy: 90, status: "delayed" },
  { id: 3, type: "cab", lat: 40.7505, lng: -73.9934, route: "Available", eta: "2 min", occupancy: 0, status: "available" },
  { id: 4, type: "bus", lat: 40.7614, lng: -73.9776, route: "Route 15", eta: "5 min", occupancy: 45, status: "on-time" },
  { id: 5, type: "metro", lat: 40.7282, lng: -73.9942, route: "Line B", eta: "4 min", occupancy: 60, status: "on-time" },
];

const LiveMapPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof mockVehicles[0] | null>(null);
  const [layerToggles, setLayerToggles] = useState({
    buses: true,
    metro: true,
    cabs: true,
  });
  const mapRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-time": return "text-success";
      case "delayed": return "text-warning";
      case "available": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "bus": return Bus;
      case "metro": return Train;
      case "cab": return Car;
      default: return MapPin;
    }
  };

  const toggleLayer = (layer: keyof typeof layerToggles) => {
    setLayerToggles(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header Controls */}
      <div className="p-4 border-b border-border/50 glass-card">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Live Transit Map</h1>
            <p className="text-muted-foreground">Real-time vehicle tracking and status</p>
          </div>
          
          {/* Layer Controls */}
          <div className="flex gap-2">
            {Object.entries(layerToggles).map(([layer, enabled]) => (
              <Button
                key={layer}
                variant={enabled ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLayer(layer as keyof typeof layerToggles)}
                className="flex items-center gap-2 capitalize"
              >
                {enabled ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                {layer}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Map Container */}
        <div className="flex-1 relative">
          <div 
            ref={mapRef}
            className="w-full h-full bg-gradient-to-br from-background via-muted/20 to-background/50 relative overflow-hidden"
          >
            {/* Simulated Map Grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-border" style={{ top: `${i * 5}%` }} />
              ))}
              {[...Array(20)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-border" style={{ left: `${i * 5}%` }} />
              ))}
            </div>

            {/* Vehicle Markers */}
            {mockVehicles.map((vehicle) => {
              const isVisible = layerToggles[vehicle.type as keyof typeof layerToggles];
              if (!isVisible) return null;

              const Icon = getVehicleIcon(vehicle.type);
              
              return (
                <motion.div
                  key={vehicle.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${(vehicle.lng + 74) * 20}%`,
                    top: `${(40.8 - vehicle.lat) * 30}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: vehicle.id * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className={`p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 ${
                    selectedVehicle?.id === vehicle.id ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Pulse animation for active vehicles */}
                  {vehicle.status === "on-time" && (
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  )}
                </motion.div>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4">
              <Card className="p-4 glass-card">
                <h3 className="font-semibold mb-2">Legend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-primary" />
                    <span>Buses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-secondary" />
                    <span>Metro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-accent" />
                    <span>Cabs</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Vehicle Details Sidebar */}
        {selectedVehicle && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-80 border-l border-border/50 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Vehicle Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVehicle(null)}
              >
                ✕
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = getVehicleIcon(selectedVehicle.type);
                  return <Icon className="w-8 h-8 text-primary" />;
                })()}
                <div>
                  <div className="font-semibold capitalize">{selectedVehicle.type}</div>
                  <div className="text-sm text-muted-foreground">{selectedVehicle.route}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">ETA</span>
                  </div>
                  <div className="text-lg font-bold">{selectedVehicle.eta}</div>
                </div>

                <div className="glass-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">Occupancy</span>
                  </div>
                  <div className="text-lg font-bold">{selectedVehicle.occupancy}%</div>
                </div>
              </div>

              <div className="glass-card p-3 rounded-lg">
                <div className="text-sm font-medium mb-2">Status</div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(selectedVehicle.status)} bg-current/10`}>
                  {selectedVehicle.status}
                </div>
              </div>

              {selectedVehicle.type === "cab" && selectedVehicle.status === "available" && (
                <Button className="w-full glow-button">
                  Book This Cab
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LiveMapPage;