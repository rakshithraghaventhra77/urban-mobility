import { useState } from "react";
import { motion } from "framer-motion";
import { Car, MapPin, Clock, DollarSign, Star, Phone, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const availableCabs = [
  { id: 1, driver: "Alex Johnson", rating: 4.8, eta: "3 min", price: 12, distance: "0.2 mi", type: "Economy" },
  { id: 2, driver: "Sarah Chen", rating: 4.9, eta: "5 min", price: 18, distance: "0.4 mi", type: "Premium" },
  { id: 3, driver: "Mike Rodriguez", rating: 4.7, eta: "2 min", price: 11, distance: "0.1 mi", type: "Economy" },
  { id: 4, driver: "Emma Wilson", rating: 5.0, eta: "7 min", price: 25, distance: "0.6 mi", type: "Luxury" },
];

const rideHistory = [
  { id: 1, date: "Today 2:30 PM", from: "Downtown", to: "Airport", price: 35, status: "Completed" },
  { id: 2, date: "Yesterday 9:15 AM", from: "Home", to: "Office", price: 12, status: "Completed" },
  { id: 3, date: "Nov 25 6:45 PM", from: "Mall", to: "Restaurant", price: 8, status: "Completed" },
];

const TaxiPage = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedCab, setSelectedCab] = useState<typeof availableCabs[0] | null>(null);
  const [bookingModal, setBookingModal] = useState(false);

  const getCabTypeColor = (type: string) => {
    switch (type) {
      case "Economy": return "bg-primary/20 text-primary";
      case "Premium": return "bg-secondary/20 text-secondary";
      case "Luxury": return "bg-accent/20 text-accent";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const handleBookCab = (cab: typeof availableCabs[0]) => {
    setSelectedCab(cab);
    setBookingModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Cab & Taxi Service</h1>
        <p className="text-muted-foreground">Book a ride instantly or schedule for later</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Book a Ride
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pickup Location</label>
                <Input
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="glass-card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Destination</label>
                <Input
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="glass-card"
                />
              </div>
              <Button className="w-full glow-button">
                Find Available Cabs
              </Button>
            </div>
          </Card>

          {/* Available Cabs */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Available Cabs Nearby</h3>
            <div className="space-y-4">
              {availableCabs.map((cab) => (
                <motion.div
                  key={cab.id}
                  className="p-4 rounded-lg glass-card hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cab.driver}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-warning fill-current" />
                          <span>{cab.rating}</span>
                          <span>•</span>
                          <span>{cab.distance} away</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getCabTypeColor(cab.type)}>
                        {cab.type}
                      </Badge>
                      <div className="mt-2">
                        <div className="text-lg font-bold">${cab.price}</div>
                        <div className="text-sm text-muted-foreground">{cab.eta}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      className="flex-1 glow-button"
                      onClick={() => handleBookCab(cab)}
                    >
                      Book Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Quick Stats */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Available Cabs</span>
                <span className="font-semibold">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Wait Time</span>
                <span className="font-semibold text-success">3.2 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Rating</span>
                <span className="font-semibold">4.8 ⭐</span>
              </div>
            </div>
          </Card>

          {/* Recent Rides */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Rides</h3>
            <div className="space-y-3">
              {rideHistory.map((ride) => (
                <div key={ride.id} className="p-3 rounded-lg glass-card">
                  <div className="text-sm text-muted-foreground mb-1">{ride.date}</div>
                  <div className="font-medium text-sm">{ride.from} → {ride.to}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold">${ride.price}</span>
                    <Badge variant="outline" className="text-xs">
                      {ride.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Emergency & Support */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Emergency & Support</h3>
            <div className="space-y-2">
              <Button variant="destructive" className="w-full">
                Emergency Contact
              </Button>
              <Button variant="outline" className="w-full">
                Report Issue
              </Button>
              <Button variant="outline" className="w-full">
                Customer Support
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Booking Confirmation Modal */}
      {bookingModal && selectedCab && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setBookingModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Car className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold">{selectedCab.driver}</div>
                  <div className="text-sm text-muted-foreground">
                    {selectedCab.type} • {selectedCab.rating} ⭐
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Estimated Arrival</span>
                  <span className="font-semibold">{selectedCab.eta}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Estimated Fare</span>
                  <span className="font-semibold">${selectedCab.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance</span>
                  <span className="font-semibold">{selectedCab.distance}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setBookingModal(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1 glow-button">
                  Confirm Booking
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TaxiPage;