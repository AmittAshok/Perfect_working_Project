Running the Application
Build and Start Containers:
Run this command in the project folder:
docker-compose up --build

1. Access the App:
Open your browser and go to http://localhost:5000. You should see "Hello,
World!" fetched from the PostgreSQL database.

Stop the Containers:
Run this command to stop and remove the containers:
docker-compose down

Conclusion
This project shows how to create a Python Flask app, connect it to PostgreSQL,
and run both inside Docker containers using Docker Compose. It's a great way to
manage and deploy web applications in isolated environments.