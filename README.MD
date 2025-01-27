# Uber Clone

## Description

A comprehensive Uber clone application that replicates the core functionalities of the original Uber platform, including user authentication, ride booking, real-time tracking, and payment processing.

## Features

- **User Authentication:** Secure login and registration for riders and drivers.
- **Ride Booking:** Users can book rides specifying pickup and drop-off locations.
- **Real-Time Tracking:** Live tracking of drivers and rides on an interactive map.
- **Payment Integration:** Secure payment processing with multiple payment options.
- **Notifications:** Real-time notifications for ride status updates.
- **Admin Dashboard:** Manage users, rides, and payments through an administrative interface.

## Technologies Used

- **Frontend:** React Native, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Gateway:** Stripe API
- **Map Integration:** Google Maps API

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/uber_clone.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd uber_clone
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```
5. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

- **Riders:** Sign up or log in to book rides, track drivers in real-time, and make payments.
- **Drivers:** Register, manage availability, accept ride requests, and track earnings.
- **Admin:** Access the admin dashboard to oversee platform operations.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact [adityadaksh002@gmail.com](mailto:adityadaksh002@gmail.com).
