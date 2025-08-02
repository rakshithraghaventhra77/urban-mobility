import { motion } from "framer-motion";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Leaf, TrendingDown, Car, Bus, Train, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";
import { Progress } from "@/components/ui/progress";

const co2TrendData = [
  { month: "Jan", publicTransport: 45, carBaseline: 100, saved: 55 },
  { month: "Feb", publicTransport: 42, carBaseline: 100, saved: 58 },
  { month: "Mar", publicTransport: 48, carBaseline: 100, saved: 52 },
  { month: "Apr", publicTransport: 39, carBaseline: 100, saved: 61 },
  { month: "May", publicTransport: 41, carBaseline: 100, saved: 59 },
  { month: "Jun", publicTransport: 35, carBaseline: 100, saved: 65 },
  { month: "Jul", publicTransport: 33, carBaseline: 100, saved: 67 },
  { month: "Aug", publicTransport: 37, carBaseline: 100, saved: 63 },
];

const modeEmissions = [
  { mode: "Bus", emissions: 45, color: "#00FFAA" },
  { mode: "Metro", emissions: 25, color: "#00D7FF" },
  { mode: "Cab (Shared)", emissions: 65, color: "#AA00FF" },
  { mode: "Private Car", emissions: 120, color: "#FF6B6B" },
];

const dailyImpact = [
  { hour: "6:00", emissions: 2.1 },
  { hour: "9:00", emissions: 4.8 },
  { hour: "12:00", emissions: 3.2 },
  { hour: "15:00", emissions: 3.7 },
  { hour: "18:00", emissions: 5.2 },
  { hour: "21:00", emissions: 2.9 },
];

const CO2TrackerPage = () => {
  const totalSaved = 156.7; // tons of CO2
  const weeklyTarget = 180;
  const progress = (totalSaved / weeklyTarget) * 100;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">CO₂ Emissions Tracker</h1>
        <p className="text-muted-foreground">Monitor environmental impact and carbon footprint reduction</p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <StatCard
          title="CO₂ Saved Today"
          value="2.4T"
          icon={Leaf}
          color="success"
          trend={{ value: 15.2, isPositive: true }}
        />
        <StatCard
          title="Monthly Reduction"
          value="67.3%"
          icon={TrendingDown}
          color="primary"
          trend={{ value: 8.1, isPositive: true }}
        />
        <StatCard
          title="Equivalent Trees"
          value="847"
          icon={TreePine}
          color="success"
          trend={{ value: 23.4, isPositive: true }}
        />
        <StatCard
          title="Cars Off Road"
          value="1,234"
          icon={Car}
          color="accent"
          trend={{ value: 12.7, isPositive: true }}
        />
      </motion.div>

      {/* Progress Towards Goal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Weekly Emission Reduction Goal</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-success">{totalSaved}T</div>
              <div className="text-sm text-muted-foreground">of {weeklyTarget}T target</div>
            </div>
          </div>
          <Progress value={progress} className="h-3 mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Current Progress</span>
            <span>{progress.toFixed(1)}% Complete</span>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CO2 Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Emission Trends vs Car Baseline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={co2TrendData}>
                <defs>
                  <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FFAA" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00FFAA" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="carBaseline" 
                  stroke="#FF6B6B" 
                  fillOpacity={1} 
                  fill="url(#colorBaseline)"
                  name="Car Baseline"
                />
                <Area 
                  type="monotone" 
                  dataKey="publicTransport" 
                  stroke="#00FFAA" 
                  fillOpacity={1} 
                  fill="url(#colorSaved)"
                  name="Public Transport"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Mode Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Emissions by Transport Mode</h3>
            <div className="space-y-4">
              {modeEmissions.map((mode) => (
                <div key={mode.mode} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {mode.mode === "Bus" && <Bus className="w-4 h-4" />}
                      {mode.mode === "Metro" && <Train className="w-4 h-4" />}
                      {mode.mode.includes("Cab") && <Car className="w-4 h-4" />}
                      {mode.mode === "Private Car" && <Car className="w-4 h-4" />}
                      <span className="font-medium">{mode.mode}</span>
                    </div>
                    <span className="font-bold">{mode.emissions}g CO₂/km</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(mode.emissions / 120) * 100}%`,
                        backgroundColor: mode.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Daily Impact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Today's Emission Pattern</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dailyImpact}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="emissions" 
                  stroke="#00FFAA" 
                  strokeWidth={3}
                  dot={{ fill: "#00FFAA", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">2.4 Tons</div>
                <div className="text-sm text-muted-foreground">CO₂ Saved Today</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="glass-card p-4 rounded-lg">
                  <TreePine className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-lg font-bold">847</div>
                  <div className="text-xs text-muted-foreground">Trees Equivalent</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">1,234</div>
                  <div className="text-xs text-muted-foreground">Cars Off Road</div>
                </div>
              </div>

              <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                <Leaf className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="text-sm font-medium text-success">
                  You're making a difference!
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  67% reduction vs private car usage
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CO2TrackerPage;