import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "primary" | "secondary" | "accent" | "success" | "warning";
  delay?: number;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = "primary",
  delay = 0 
}: StatCardProps) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary", 
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card p-6 hover:shadow-glow transition-all duration-300 group"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <motion.p 
            className="text-2xl font-bold text-foreground"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          >
            {value}
          </motion.p>
          {trend && (
            <div className={`flex items-center text-sm mt-2 ${
              trend.isPositive ? 'text-success' : 'text-destructive'
            }`}>
              <span>{trend.isPositive ? '↗' : '↘'}</span>
              <span className="ml-1">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        
        <div className={`${colorMap[color]} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </motion.div>
  );
}