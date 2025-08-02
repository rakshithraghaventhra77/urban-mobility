import { motion } from "framer-motion";
import { Zap, Shield, Users, Globe, Award, Target, Heart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { name: "Dr. Sarah Chen", role: "Chief Technology Officer", expertise: "AI & Machine Learning" },
  { name: "Michael Rodriguez", role: "Head of Urban Planning", expertise: "Smart City Infrastructure" },
  { name: "Emma Johnson", role: "Director of Sustainability", expertise: "Environmental Science" },
  { name: "David Kim", role: "Lead UX Designer", expertise: "Accessibility & Inclusive Design" },
];

const achievements = [
  { year: "2024", title: "Best Smart City Solution", organization: "Urban Innovation Awards" },
  { year: "2023", title: "Sustainability Excellence", organization: "Green Tech Alliance" },
  { year: "2023", title: "Accessibility Champion", organization: "Inclusive Design Council" },
  { year: "2022", title: "Transportation Innovation", organization: "Metro Transit Association" },
];

const AboutPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">About UrbanFlow</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Revolutionizing urban transportation through intelligent coordination and sustainable mobility solutions
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card p-8 mb-8">
          <div className="text-center max-w-4xl mx-auto">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a seamless, sustainable, and accessible urban mobility ecosystem that connects 
              communities, reduces environmental impact, and empowers every citizen to move efficiently 
              through their city.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Cutting-edge AI technology driving smarter transportation decisions
            </p>
          </Card>

          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Sustainability</h3>
            <p className="text-sm text-muted-foreground">
              Reducing carbon footprint through optimized public transportation
            </p>
          </Card>

          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              Inclusive design ensuring mobility for everyone, regardless of ability
            </p>
          </Card>

          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <Shield className="w-8 h-8 text-success mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Reliability</h3>
            <p className="text-sm text-muted-foreground">
              Dependable service with real-time updates and 99.9% uptime
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Technology & Innovation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Technology & Innovation</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">AI-Powered Coordination</h3>
              <p className="text-muted-foreground mb-4">
                Our advanced machine learning algorithms analyze traffic patterns, weather conditions, 
                and passenger demand to optimize routes and schedules in real-time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Predictive Analytics</Badge>
                <Badge variant="outline">Real-time Processing</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Sustainable Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Built on cloud-native architecture with energy-efficient data centers and 
                carbon-neutral operations, supporting our commitment to environmental responsibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Cloud Native</Badge>
                <Badge variant="outline">Carbon Neutral</Badge>
                <Badge variant="outline">Green Computing</Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.expertise}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <Card className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-warning" />
            <h2 className="text-2xl font-bold">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="flex items-center gap-4 p-4 rounded-lg glass-card">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{achievement.year}</div>
                </div>
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-card p-8">
          <div className="text-center mb-6">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Our Impact</h2>
            <p className="text-muted-foreground">Making cities more livable, one journey at a time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-success mb-2">2.4M</div>
              <div className="text-sm text-muted-foreground">Daily Passengers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Reduction in Wait Times</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">156T</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved Annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">Cities Using UrbanFlow</div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutPage;