import { motion } from "framer-motion";
import { Bus, Train, Car, Leaf, Users } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const stats = [
    {
      title: "Active Buses",
      value: "247",
      icon: Bus,
      color: "primary" as const,
      trend: { value: 12, isPositive: true },
      delay: 0.1
    },
    {
      title: "Metro Trains",
      value: "58",
      icon: Train,
      color: "secondary" as const,
      trend: { value: 3, isPositive: true },
      delay: 0.2
    },
    {
      title: "Available Cabs",
      value: "1,234",
      icon: Car,
      color: "accent" as const,
      trend: { value: 8, isPositive: false },
      delay: 0.3
    },
    {
      title: "CO₂ Saved Today",
      value: "2.4T",
      icon: Leaf,
      color: "success" as const,
      trend: { value: 15, isPositive: true },
      delay: 0.4
    },
    {
      title: "Current Ridership",
      value: "89.2K",
      icon: Users,
      color: "warning" as const,
      trend: { value: 5, isPositive: true },
      delay: 0.5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-animated">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Seamless Urban Mobility,</span>
            <br />
            <span className="text-foreground">Powered by AI</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Real-time coordination of buses, metros, and cabs for efficient, 
            sustainable urban transportation.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" className="glow-button bg-gradient-primary text-primary-foreground px-8 py-3">
              View Live Map
            </Button>
            <Button size="lg" variant="outline" className="neon-border px-8 py-3">
              Analytics Dashboard
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 10,
                opacity: 0 
              }}
              animate={{ 
                y: -10,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Live System Status</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time data from across the urban mobility network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
                trend={stat.trend}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <Bus className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bus Network</h3>
              <p className="text-muted-foreground mb-4">Track buses in real-time</p>
              <Button className="w-full">View Routes</Button>
            </div>

            <div className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <Train className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Metro System</h3>
              <p className="text-muted-foreground mb-4">Plan your metro journey</p>
              <Button className="w-full" variant="secondary">Find Routes</Button>
            </div>

            <div className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <Car className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ride Sharing</h3>
              <p className="text-muted-foreground mb-4">Book a cab instantly</p>
              <Button className="w-full" variant="outline">Book Now</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;