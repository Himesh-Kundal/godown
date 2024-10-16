# Godown

Godown is a web application that provides a robust frontend and backend system for managing your resources. The project uses Docker for containerization and Nginx as a reverse proxy.

## How to Use

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Running the Project

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Himesh-Kundal/godown.git
   ```

2. Navigate to the project directory:
   ```bash
   cd godown
   ```

3. Run the project using Docker Compose:
   ```bash
   docker-compose up --build
   ```

This will build and start both the frontend and backend services.

- The **frontend** will be available at: `http://localhost:3068`
- The **backend API** will be available at: `http://localhost:3069/api`

## Tech Stack Used

- **Frontend:** [React](https://reactjs.org/) (Vite for development)
- **Backend:** [Node.js](https://nodejs.org/) (Express framework)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** JWT (JSON Web Tokens)
- **Tools:**
  - **Nginx** for reverse proxy and SSL termination
  - **Docker** for containerization

## Architecture

- **Frontend**:
  - Served on port **3068** in a Docker container.
  - Built using React and served with Nginx inside the container.

- **Backend**:
  - Runs on port **3069** inside a Docker container.
  - Built using Node.js (Express) and connects to MongoDB for database operations.

- **MongoDB**:
  - You can set up a MongoDB instance using services like MongoDB Atlas or run it locally using a Docker container.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request with a detailed description of your changes.

### Issues

If you find any bugs or have feature requests, please [create an issue](https://github.com/Himesh-Kundal/godown/issues).

---

Feel free to contribute or suggest improvements!