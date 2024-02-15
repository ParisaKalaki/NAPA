# AIS Data Web Application

This project is aimed at creating a web application to fetch and display Automatic Identification System (AIS) data for ships within a specified time range. The application consists of a backend API to handle data insertion and retrieval, as well as a frontend interface to visualize the AIS data.

## AIS Data Overview

AIS data provides information about the location and characteristics of ships in real time. It includes data fields such as IMO (ship identification number), latitude (LAT), longitude (LON), and timestamp (BaseDateTime).

## Tech Stack

The tech stack for this project includes:

- **Frontend**:

  - React.js for building the user interface.
  - React Router for client-side routing.
  - Styled-components for styling the components.
  - Jest framework for testing frontend components.
  - Vite.js for bundling and serving the frontend assets.

- **Backend**:
  - Node.js for building the backend server.
  - Express.js for handling API routes and requests.
  - PostgreSQL as the database for storing AIS data.
  - Pg admin for interacting with the database.
  - Docker and Docker Compose for containerization and orchestration.

## Project Structure

The project is organized into frontend and backend directories:

- **Frontend**:

  - `src/`: Contains the frontend source code.
  - `public/`: Contains static assets and HTML template.
  - `__test__/`: Contains unit tests for frontend components.
  - `features/ships/`: Contains components related to ship data visualization.
  - `hooks/`: Contains custom React hooks.
  - `services/`: Contains service modules for making API requests.
  - `styles/`: Contains global styles for the application.
  - `ui/`: Contains reusable UI components.

- **Backend**:
  - `index.js`: Entry point for the backend server.
  - `db.js`: Configuration for connecting to the PostgreSQL database.
  - `services/apiShips.js`: API service for handling ship data CRUD operations.
  - `__test__/`: Contains unit tests for frontend components.
  - `requests`: Contains HTTP requests.

## Running the Application

1. Clone the repository:

   ```bash
   git clone git@github.com:ParisaKalaki/NAPA.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NAPA
   ```

3. Run the Docker-compose

   ```bash
   docker-compose up -d
   ```

4. Access the web application in your browser at http://localhost:5173

## Testing

Both frontend and backend components are tested:

- Frontend tests are located in the src/**\_\_test\_\_** directory and can be run using the these command:

  ```bash
  docker-compose exec frontend npm test

  ```

- Backend tests are located in the backend/**\_\_test\_\_** directory and can be run using the these command:

  ```bash
  docker-compose exec backend npm run test
  docker-compose exec backend npm run test_post

  ```
