Running the Application
Build and Start the Containers: Open a terminal in the project directory and run:
    docker-compose up --build

1. This command:
○ Builds the Docker image for the Node.js app.
○ Starts both the Node.js app and MongoDB containers.
○ Maps ports 3000 (Node.js) and 27017 (MongoDB) for external access.

2. Access the Application: Open your browser and navigate to
http://localhost:3000. You should see the message: Hello, Node.js with
MongoDB!.
Stop the Containers: To stop and remove the containers, run
    docker compose down


Conclusion
This guide demonstrates how to set up a Node.js application with MongoDB using
Docker and Docker Compose. The containers ensure a consistent and portable
development environment, making it easy to deploy the application across different
systems.