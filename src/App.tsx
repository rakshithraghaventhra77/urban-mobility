import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

// Pages
import HomePage from "./pages/HomePage";
import LiveMapPage from "./pages/LiveMapPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import MetroPage from "./pages/MetroPage";
import TaxiPage from "./pages/TaxiPage";
import CO2TrackerPage from "./pages/CO2TrackerPage";
import FeedbackPage from "./pages/FeedbackPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live-map" element={<LiveMapPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/metro" element={<MetroPage />} />
            <Route path="/taxi" element={<TaxiPage />} />
            <Route path="/co2-tracker" element={<CO2TrackerPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
