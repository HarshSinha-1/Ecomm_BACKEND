# Ecomm_BACKEND

The **Ecomm-Backend** is a Node.js-based backend server for an e-commerce application. It is built with **Express.js** and **MongoDB** and includes essential features like user authentication, admin setup, and connection to a MongoDB database.

## Project Structure

- **`server.js`** - Main entry point of the application, connects to MongoDB, initializes an admin user if not present, and starts the server.
- **`configs/`** - Configuration files for server and database settings.
- **`models/`** - Mongoose models for interacting with MongoDB collections.
- **`routes/`** - Route handlers, including user authentication.

## Key Features

1. **MongoDB Connection**
   - Connects to MongoDB using Mongoose with configuration provided in `configs/db.config`.
   - Logs errors if the connection fails and confirms a successful connection once established.

2. **Admin User Initialization**
   - On startup, the server checks for the existence of an admin user.
   - If no admin user is found, it creates one with the following default values:
     - **Name**: Harsh
     - **User ID**: admin
     - **Email**: sinhaharsh189@gmail.com
     - **User Type**: ADMIN
     - **Password**: Encrypted password using `bcryptjs`

3. **Authentication Route**
   - The project includes routes for user authentication, initialized through `auth.routes.js`.
   - These routes manage login, signup, and potentially user roles for different levels of access.

4. **Express JSON Middleware**
   - Automatically parses incoming JSON requests, converting them to JavaScript objects for easier data handling.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>

