# Urban-Mobility

> AI-powered urban mobility dashboard for seamless city transport coordination

## Team
*RakshithRaghaventhra & Subhodhraj BS*

## Overview
Urban-Mobility is an intelligent multi-agent system that streamlines urban transportation by coordinating buses, metros, and ride-hailing services to provide seamless, end-to-end travel planning for city commuters. The platform features real-time tracking, AI-powered predictions, and dynamic routing to reduce friction and improve the overall commuter experience.

## Key Features
- 🚌 **Real-time Bus Tracking** - Live GPS tracking with accurate ETA predictions
- 🚇 **Metro Integration** - Seamless train schedule coordination and transfer optimization
- 🚕 **Ride-hailing Coordination** - Integration with cab services for last-mile connectivity
- 📊 **Analytics Dashboard** - Comprehensive insights on ridership, delays, and performance
- 🌱 **CO₂ Emissions Tracker** - Environmental impact monitoring and sustainability metrics
- 🗺️ **Interactive Maps** - Animated, dark-themed city maps with live vehicle tracking
- ♿ **Accessibility Features** - Support for users with special mobility needs

## Tech Stack
- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Backend:** Node.js
- **Database:** MongoDB
- **Maps:** Mapbox/Leaflet integration
- **AI/ML:** Predictive analytics for ETA and demand forecasting

## Prerequisites
- Node.js v18+
- MongoDB installed and running locally
- Git for version control

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/rakshithraghaventhra77/urban-mobility.git
   cd urban-mobility
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up environment variables**
   ```
   cp .env.example .env
   # Add your API keys and database connection strings
   ```

4. **Start MongoDB**
   ```
   # Make sure MongoDB is running on your local machine
   mongod
   ```

5. **Run the application**
   ```
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Project Structure
```
urban-mobility/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── agents/        # AI agent implementations
│   ├── utils/         # Utility functions
│   └── styles/        # TailwindCSS styles
├── backend/
│   ├── routes/        # API routes
│   ├── models/        # Database models
│   └── controllers/   # Route controllers
├── public/           # Static assets
└── docs/            # Documentation
```

## Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run lint` - Run ESLint

## Demo Video URL
https://drive.google.com/file/d/19CGVh25KwXeHFcea88AvXWGPCtNhwIba/view?usp=sharing


## API Endpoints
- `GET /api/buses` - Get live bus data
- `GET /api/metro` - Get metro information
- `GET /api/cabs` - Get available cabs
- `POST /api/journey` - Plan multimodal journey

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Problem Statement
Addresses the challenge of disconnected urban transport services by creating intelligent agents that collaborate to provide:
- Seamless end-to-end travel planning
- Real-time responsiveness to changing commuter needs
- Reduced missed connections and delays

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
- Team: Rakshith Raghaventhra L & Subhodhraj BS
- Repository: [urban-mobility](https://github.com/rakshithraghaventhra77/urban-mobility)

