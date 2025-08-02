import { useState } from "react";
import { motion } from "framer-motion";
import { Accessibility, MapPin, Eye, Ear, Users, Route, AlertCircle, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const accessibleStations = [
  { id: 1, name: "Central Station", type: "Metro", wheelchairAccess: true, audioAnnouncements: true, visualAids: true, elevators: 2 },
  { id: 2, name: "Park Avenue", type: "Metro", wheelchairAccess: true, audioAnnouncements: true, visualAids: false, elevators: 1 },
  { id: 3, name: "University Hub", type: "Bus", wheelchairAccess: true, audioAnnouncements: true, visualAids: true, elevators: 0 },
  { id: 4, name: "Downtown Terminal", type: "Metro", wheelchairAccess: true, audioAnnouncements: true, visualAids: true, elevators: 3 },
  { id: 5, name: "Airport Junction", type: "Metro", wheelchairAccess: true, audioAnnouncements: false, visualAids: true, elevators: 2 },
];

const accessibleRoutes = [
  { id: 1, from: "Central Station", to: "University Hub", stepFree: true, duration: "12 min", transfers: 0 },
  { id: 2, from: "Park Avenue", to: "Downtown Terminal", stepFree: true, duration: "8 min", transfers: 1 },
  { id: 3, from: "Airport Junction", to: "Central Station", stepFree: true, duration: "25 min", transfers: 0 },
];

const AccessibilityPage = () => {
  const [preferences, setPreferences] = useState({
    wheelchairAccess: false,
    audioAssistance: false,
    visualAssistance: false,
    stepFreeAccess: false,
    highContrast: false,
    largeFonts: false,
  });

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getAccessibilityScore = (station: typeof accessibleStations[0]) => {
    let score = 0;
    if (station.wheelchairAccess) score += 25;
    if (station.audioAnnouncements) score += 25;
    if (station.visualAids) score += 25;
    if (station.elevators > 0) score += 25;
    return score;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Accessibility Features</h1>
        <p className="text-muted-foreground">Inclusive transportation for everyone</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Accessibility Preferences */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="glass-card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-primary" />
              Accessibility Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm">Wheelchair Access</span>
                </div>
                <Switch 
                  checked={preferences.wheelchairAccess}
                  onCheckedChange={() => togglePreference('wheelchairAccess')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ear className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Audio Assistance</span>
                </div>
                <Switch 
                  checked={preferences.audioAssistance}
                  onCheckedChange={() => togglePreference('audioAssistance')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-accent" />
                  <span className="text-sm">Visual Assistance</span>
                </div>
                <Switch 
                  checked={preferences.visualAssistance}
                  onCheckedChange={() => togglePreference('visualAssistance')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Route className="w-4 h-4 text-success" />
                  <span className="text-sm">Step-Free Access</span>
                </div>
                <Switch 
                  checked={preferences.stepFreeAccess}
                  onCheckedChange={() => togglePreference('stepFreeAccess')}
                />
              </div>

              <hr className="border-border/50" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm">High Contrast Mode</span>
                <Switch 
                  checked={preferences.highContrast}
                  onCheckedChange={() => togglePreference('highContrast')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Large Fonts</span>
                <Switch 
                  checked={preferences.largeFonts}
                  onCheckedChange={() => togglePreference('largeFonts')}
                />
              </div>
            </div>
            
            <Button className="w-full mt-4 glow-button">
              Save Preferences
            </Button>
          </Card>

          {/* Quick Stats */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Accessibility Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Accessible Stations</span>
                <span className="font-semibold text-success">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Step-Free Routes</span>
                <span className="font-semibold text-success">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Audio Equipped</span>
                <span className="font-semibold text-primary">91%</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Accessible Stations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Accessible Stations</h3>
            <div className="space-y-4">
              {accessibleStations.map((station) => {
                const score = getAccessibilityScore(station);
                return (
                  <motion.div
                    key={station.id}
                    className="p-4 rounded-lg glass-card hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {station.name}
                        </h4>
                        <Badge variant="outline" className="mt-1">
                          {station.type}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          score >= 75 ? 'text-success' : 
                          score >= 50 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {score}%
                        </div>
                        <div className="text-xs text-muted-foreground">Accessible</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className={`flex items-center gap-1 ${
                        station.wheelchairAccess ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <UserCheck className="w-3 h-3" />
                        <span>Wheelchair</span>
                      </div>
                      <div className={`flex items-center gap-1 ${
                        station.audioAnnouncements ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <Ear className="w-3 h-3" />
                        <span>Audio</span>
                      </div>
                      <div className={`flex items-center gap-1 ${
                        station.visualAids ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <Eye className="w-3 h-3" />
                        <span>Visual</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span>{station.elevators} Elevators</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          {/* Accessible Routes */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Step-Free Routes</h3>
            <div className="space-y-3">
              {accessibleRoutes.map((route) => (
                <div key={route.id} className="p-3 rounded-lg glass-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        {route.from} → {route.to}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {route.duration} • {route.transfers} transfers
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {route.stepFree && (
                        <Badge className="bg-success/20 text-success">
                          Step-Free
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Accessibility Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="glass-card p-6">
          <UserCheck className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold mb-2">Mobility Assistance</h3>
          <p className="text-sm text-muted-foreground">
            All stations equipped with elevators, ramps, and wide platform access for wheelchair users.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Ear className="w-8 h-8 text-secondary mb-3" />
          <h3 className="font-semibold mb-2">Hearing Support</h3>
          <p className="text-sm text-muted-foreground">
            Audio announcements, induction loops, and visual displays for hearing-impaired passengers.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Eye className="w-8 h-8 text-accent mb-3" />
          <h3 className="font-semibold mb-2">Visual Assistance</h3>
          <p className="text-sm text-muted-foreground">
            Tactile surfaces, high-contrast signage, and audio guidance for visually impaired users.
          </p>
        </Card>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-warning" />
            <h3 className="text-xl font-semibold">Accessibility Support</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-4">
              <span className="font-medium">24/7 Assistance</span>
              <span className="text-sm text-muted-foreground">Call: 1-800-ASSIST</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-4">
              <span className="font-medium">Report Issue</span>
              <span className="text-sm text-muted-foreground">accessibility@urbanflow.com</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-4">
              <span className="font-medium">Request Help</span>
              <span className="text-sm text-muted-foreground">Live Chat Available</span>
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AccessibilityPage;