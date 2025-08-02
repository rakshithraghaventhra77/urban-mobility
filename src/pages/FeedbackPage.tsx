import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, ThumbsUp, ThumbsDown, Send, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "The app makes navigating the city so much easier! Real-time updates are incredibly accurate.",
    service: "Metro",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    comment: "Great integration between all transport modes. Love the CO₂ tracking feature!",
    service: "Bus",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 5,
    comment: "Booking cabs is super quick and the drivers are always professional.",
    service: "Taxi",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "David Kim",
    rating: 4,
    comment: "The analytics dashboard helps me plan my commute perfectly. Highly recommended!",
    service: "Analytics",
    date: "5 days ago"
  }
];

const sentimentData = [
  { category: "App Performance", positive: 85, negative: 15 },
  { category: "Customer Service", positive: 92, negative: 8 },
  { category: "Real-time Data", positive: 88, negative: 12 },
  { category: "User Interface", positive: 90, negative: 10 },
  { category: "Pricing", positive: 78, negative: 22 },
];

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  const handleSubmitFeedback = () => {
    // Handle feedback submission
    console.log({ rating, comment, category, name });
    // Reset form
    setRating(0);
    setComment("");
    setCategory("");
    setName("");
  };

  const StarRating = ({ value, onChange, readonly = false }: { value: number; onChange?: (rating: number) => void; readonly?: boolean }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              star <= value ? 'text-warning fill-current' : 'text-muted-foreground'
            } ${readonly ? 'cursor-default' : 'hover:text-warning'}`}
            onClick={() => !readonly && onChange?.(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Feedback & Reviews</h1>
        <p className="text-muted-foreground">Share your experience and help us improve</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Share Your Feedback
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name (Optional)</label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass-card"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Service Category</label>
                <select 
                  className="w-full p-2 rounded-lg glass-card border border-border bg-background text-foreground"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="metro">Metro Service</option>
                  <option value="bus">Bus Service</option>
                  <option value="taxi">Taxi/Cab Service</option>
                  <option value="app">Mobile App</option>
                  <option value="analytics">Analytics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <StarRating value={rating} onChange={setRating} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Feedback</label>
                <Textarea
                  placeholder="Tell us about your experience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="glass-card min-h-[120px]"
                />
              </div>

              <Button 
                className="w-full glow-button flex items-center gap-2"
                onClick={handleSubmitFeedback}
                disabled={!rating || !comment}
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </Button>
            </div>
          </Card>

          {/* Testimonials */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="p-4 rounded-lg glass-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <StarRating value={testimonial.rating} readonly />
                        <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.comment}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sentiment Analysis */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Overall Stats */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Feedback Stats</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-success">4.7</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
                <StarRating value={5} readonly />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">89%</div>
                  <div className="text-xs text-muted-foreground">Positive</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-xs text-muted-foreground">Total Reviews</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Sentiment Breakdown */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Sentiment Analysis</h3>
            <div className="space-y-4">
              {sentimentData.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.category}</span>
                    <span className="text-success">{item.positive}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-success rounded-full transition-all duration-500"
                      style={{ width: `${item.positive}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Report Positive Experience
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ThumbsDown className="w-4 h-4 mr-2" />
                Report Issue
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Suggest Improvement
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedbackPage;