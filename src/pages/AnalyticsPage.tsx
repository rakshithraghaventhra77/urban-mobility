import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Clock, Users, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";

// Mock data for charts
const ridership = [
  { time: "6:00", buses: 120, metro: 200, cabs: 80 },
  { time: "9:00", buses: 300, metro: 450, cabs: 200 },
  { time: "12:00", buses: 250, metro: 300, cabs: 150 },
  { time: "15:00", buses: 280, metro: 350, cabs: 180 },
  { time: "18:00", buses: 350, metro: 500, cabs: 250 },
  { time: "21:00", buses: 200, metro: 250, cabs: 120 },
];

const onTimePerformance = [
  { route: "Route 42", percentage: 92 },
  { route: "Line A", percentage: 88 },
  { route: "Route 15", percentage: 95 },
  { route: "Line B", percentage: 90 },
  { route: "Route 23", percentage: 87 },
];

const co2Data = [
  { month: "Jan", saved: 45, baseline: 100 },
  { month: "Feb", saved: 52, baseline: 100 },
  { month: "Mar", saved: 48, baseline: 100 },
  { month: "Apr", saved: 61, baseline: 100 },
  { month: "May", saved: 58, baseline: 100 },
  { month: "Jun", saved: 65, baseline: 100 },
];

const modeShare = [
  { name: "Metro", value: 45, color: "#00D7FF" },
  { name: "Bus", value: 35, color: "#00FFAA" },
  { name: "Cab", value: 20, color: "#AA00FF" },
];

const AnalyticsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive insights into urban mobility patterns</p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <StatCard
          title="On-Time Performance"
          value="91.2%"
          icon={Clock}
          color="success"
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatCard
          title="Daily Ridership"
          value="127K"
          icon={Users}
          color="primary"
          trend={{ value: 8.1, isPositive: true }}
        />
        <StatCard
          title="Route Efficiency"
          value="88.7%"
          icon={TrendingUp}
          color="secondary"
          trend={{ value: 2.1, isPositive: false }}
        />
        <StatCard
          title="CO₂ Reduction"
          value="34.5%"
          icon={Leaf}
          color="success"
          trend={{ value: 12.3, isPositive: true }}
        />
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ridership Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Daily Ridership Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ridership}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Line type="monotone" dataKey="buses" stroke="#00FFAA" strokeWidth={3} />
                <Line type="monotone" dataKey="metro" stroke="#00D7FF" strokeWidth={3} />
                <Line type="monotone" dataKey="cabs" stroke="#AA00FF" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* On-Time Performance */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">On-Time Performance by Route</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={onTimePerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="route" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="percentage" fill="#00D7FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* CO2 Savings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">CO₂ Emissions vs Baseline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={co2Data}>
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
                <Bar dataKey="baseline" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="saved" fill="#00FFAA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Mode Share */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Transportation Mode Share</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={modeShare}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {modeShare.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="glass-card p-6">
          <TrendingUp className="w-8 h-8 text-success mb-3" />
          <h3 className="font-semibold mb-2">Peak Hour Optimization</h3>
          <p className="text-sm text-muted-foreground">
            Rush hour efficiency improved by 15% through AI-powered route optimization.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Users className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold mb-2">Ridership Growth</h3>
          <p className="text-sm text-muted-foreground">
            Monthly active users increased by 23% with improved service reliability.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Leaf className="w-8 h-8 text-success mb-3" />
          <h3 className="font-semibold mb-2">Environmental Impact</h3>
          <p className="text-sm text-muted-foreground">
            Reduced city carbon footprint by 34% compared to individual car usage.
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default AnalyticsPage;