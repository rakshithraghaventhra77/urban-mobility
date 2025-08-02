import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "24/7 customer service hotline",
    contact: "+1 (555) 123-4567",
    hours: "Available 24/7"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "General inquiries and feedback",
    contact: "support@urbanflow.com",
    hours: "Response within 4 hours"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support for urgent matters",
    contact: "Click to start chat",
    hours: "Mon-Fri 8AM-8PM"
  },
  {
    icon: Headphones,
    title: "Accessibility Support",
    description: "Specialized assistance for accessibility needs",
    contact: "accessibility@urbanflow.com",
    hours: "24/7 priority support"
  }
];

const officeLocations = [
  {
    city: "New York",
    address: "123 Innovation Drive, NY 10001",
    phone: "+1 (555) 123-4567",
    type: "Headquarters"
  },
  {
    city: "San Francisco",
    address: "456 Tech Boulevard, CA 94105",
    phone: "+1 (555) 234-5678",
    type: "West Coast Operations"
  },
  {
    city: "London",
    address: "789 Smart City Lane, London E1 6AN",
    phone: "+44 20 7123 4567",
    type: "European Operations"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
    setFormData({ name: "", email: "", subject: "", message: "", category: "" });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our team for support, partnerships, or general inquiries. 
          We're here to help make your urban mobility experience seamless.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send us a Message
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="glass-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="glass-card"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full p-2 rounded-lg glass-card border border-border bg-background text-foreground"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="accessibility">Accessibility Support</option>
                  <option value="media">Media Inquiries</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <Input
                  placeholder="Brief description of your inquiry"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="glass-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  placeholder="Tell us more about your inquiry or how we can help..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="glass-card min-h-[120px]"
                />
              </div>

              <Button 
                className="w-full glow-button flex items-center gap-2"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div key={method.title} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <method.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.contact}</p>
                      <p className="text-xs text-muted-foreground">{method.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="glass-card p-6 border-destructive/20">
            <h3 className="text-lg font-semibold mb-3 text-destructive">Emergency Support</h3>
            <p className="text-sm text-muted-foreground mb-3">
              For urgent safety or accessibility issues during travel
            </p>
            <Button variant="destructive" className="w-full">
              Emergency Hotline: 911
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Office Locations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Our Offices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office) => (
              <motion.div
                key={office.city}
                className="p-4 rounded-lg glass-card hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{office.city}</h3>
                    <p className="text-sm text-secondary mb-1">{office.type}</p>
                    <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                    <p className="text-sm font-medium">{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Business Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-sm text-muted-foreground">24/7 Available</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-8PM EST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Inquiries</h3>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Emergency Support</h3>
              <p className="text-sm text-muted-foreground">24/7 Priority Response</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* FAQ Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <Card className="glass-card p-6">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Need Quick Answers?</h3>
          <p className="text-muted-foreground mb-4">
            Check out our frequently asked questions for instant solutions to common inquiries.
          </p>
          <Button variant="outline" className="glow-button">
            Visit FAQ Section
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPage;