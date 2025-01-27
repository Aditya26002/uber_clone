# Uber Clone

## Overview

A full-stack Uber clone application that implements core ride-sharing functionalities including user authentication, real-time ride booking, location tracking, and driver-passenger matching.

## Key Features

### User & Driver Authentication:

- Secure JWT-based authentication
- Separate flows for passengers and drivers
- Session management

### Real-time Location Tracking

- Live GPS tracking using Google Maps API
- Real-time driver location updates
- Interactive map interface

### Ride Management

- Ride booking and fare calculation
- Driver-passenger matching
- Ride status updates
- OTP verification for ride start

### Real-time Communication

- WebSocket integration for live updates
- Real-time notifications
- Status synchronization between driver and passenger

## Tech Stack

### Frontend

- React.js with Vite
- TailwindCSS for styling
- Google Maps API integration
- Socket.io client
- GSAP for animations

### Backend

- Node.js + Express.js
- MongoDB with Mongoose
- Socket.io for real-time communication
- JWT authentication
- RESTful API architecture

## Project Structure

```bash
├── Backend/                # Backend server code
│   ├── controllers/       # Request handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── middlewares/      # Custom middlewares
│
├── Frontend/             # Frontend React app
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Context providers
│   │   └── wrappers/    # HOC wrappers
│   └── public/          # Static assets
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Google Maps API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

2. Install Backend Dependencies

```bash
cd Backend
npm install
```

3. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

4. Environment Setup

- Create .env files in both Backend and Frontend directories
- Configure required environment variables:

```bash
# Backend/.env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=4000

# Frontend/.env
VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

5. Run the Application

```bash
# Start Backend Server
cd Backend
npx nodemon

# Start Frontend Development Server
cd Frontend
npm run dev
```

## API Documentation

For detailed API documentation, refer to the README.md file in the backend folder.

## Contributing

1. Fork the repository
2. Create a new branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React Documentation
- Express.js Documentation
- Socket.io Documentation
- Google Maps Platform

## Contact

- Aditya Daksh - adityadaksh002@gmail.com
- Project Link: https://github.com/Aditya26002/uber_clone
