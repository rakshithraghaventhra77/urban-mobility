import { useState } from "react";
import { motion } from "framer-motion";
import { Train, Clock, Users, AlertTriangle, Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const metroLines = [
  { id: "A", name: "Blue Line", color: "#00D7FF", stations: 24, status: "operational" },
  { id: "B", name: "Green Line", color: "#00FFAA", stations: 18, status: "delayed" },
  { id: "C", name: "Purple Line", color: "#AA00FF", stations: 22, status: "operational" },
  { id: "D", name: "Orange Line", color: "#FF6B00", stations: 16, status: "maintenance" },
];

const trainData = [
  { id: 1, line: "A", direction: "Northbound", nextStation: "Central Station", eta: "2 min", crowdLevel: 85 },
  { id: 2, line: "A", direction: "Southbound", nextStation: "Park Avenue", eta: "4 min", crowdLevel: 65 },
  { id: 3, line: "B", direction: "Eastbound", nextStation: "University", eta: "6 min", crowdLevel: 90 },
  { id: 4, line: "C", direction: "Westbound", nextStation: "Downtown", eta: "3 min", crowdLevel: 45 },
];

const stations = [
  { name: "Central Station", line: "A", accessibility: true, alerts: 0 },
  { name: "Park Avenue", line: "A", accessibility: true, alerts: 1 },
  { name: "University", line: "B", accessibility: false, alerts: 0 },
  { name: "Downtown", line: "C", accessibility: true, alerts: 0 },
  { name: "Airport", line: "D", accessibility: true, alerts: 2 },
];

const MetroPage = () => {
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-success";
      case "delayed": return "text-warning";
      case "maintenance": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getCrowdColor = (level: number) => {
    if (level >= 80) return "text-destructive";
    if (level >= 60) return "text-warning";
    return "text-success";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Metro System</h1>
        <p className="text-muted-foreground">Live metro tracking and journey planning</p>
      </motion.div>

      {/* Journey Planner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Plan Your Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">From</label>
              <Input
                placeholder="Enter starting station"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
                className="glass-card"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">To</label>
              <Input
                placeholder="Enter destination"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
                className="glass-card"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full glow-button">
                Find Routes
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metro Lines */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Metro Lines</h3>
            <div className="space-y-4">
              {metroLines.map((line) => (
                <motion.div
                  key={line.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedLine === line.id 
                      ? 'border-primary shadow-glow' 
                      : 'border-border/50 hover:border-border'
                  }`}
                  style={{ borderColor: selectedLine === line.id ? line.color : undefined }}
                  onClick={() => setSelectedLine(selectedLine === line.id ? null : line.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: line.color }}
                      />
                      <div>
                        <h4 className="font-semibold">Line {line.id} - {line.name}</h4>
                        <p className="text-sm text-muted-foreground">{line.stations} stations</p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${getStatusColor(line.status)} capitalize`}>
                      {line.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Live Trains */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Live Trains</h3>
            <div className="space-y-3">
              {trainData.map((train) => (
                <motion.div
                  key={train.id}
                  className="p-3 rounded-lg glass-card hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-primary" />
                      <span className="font-medium">Line {train.line}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-3 h-3" />
                      {train.eta}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {train.direction} → {train.nextStation}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Crowd Level</span>
                    <span className={`font-medium ${getCrowdColor(train.crowdLevel)}`}>
                      {train.crowdLevel}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                    <div 
                      className={`h-1.5 rounded-full ${
                        train.crowdLevel >= 80 ? 'bg-destructive' :
                        train.crowdLevel >= 60 ? 'bg-warning' : 'bg-success'
                      }`}
                      style={{ width: `${train.crowdLevel}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Stations Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Station Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stations.map((station) => (
              <div key={station.name} className="p-4 rounded-lg glass-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{station.name}</h4>
                  <div className="flex items-center gap-2">
                    {station.accessibility && (
                      <div className="w-2 h-2 rounded-full bg-success" title="Accessible" />
                    )}
                    {station.alerts > 0 && (
                      <div className="flex items-center gap-1 text-warning">
                        <AlertTriangle className="w-3 h-3" />
                        <span className="text-xs">{station.alerts}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Line {station.line}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button variant="outline" className="p-6 h-auto flex flex-col items-center gap-2">
          <Train className="w-8 h-8 text-primary" />
          <span>View Full Map</span>
        </Button>
        <Button variant="outline" className="p-6 h-auto flex flex-col items-center gap-2">
          <Clock className="w-8 h-8 text-secondary" />
          <span>Schedule Alerts</span>
        </Button>
        <Button variant="outline" className="p-6 h-auto flex flex-col items-center gap-2">
          <Users className="w-8 h-8 text-accent" />
          <span>Crowd Predictions</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default MetroPage;