Node.js API Project - User Management
This is a Node.js API project that provides endpoints for managing user information in a database. The project includes endpoints for creating, updating, retrieving, and deleting user data.

Table of Contents
API Endpoints
Database Structure
Getting Started
Authentication
Usage
Deployment
Contributing
License
API Endpoints
/details - GET Request
This endpoint fetches details of a specific user given the user_id as a query parameter.

Structure: BASE_URL/details/${user_id}

Returns: JSON object containing user details.

/update - PUT Request
This endpoint updates the details of a specific user given the new details in the request body. Authentication is required.

Structure: BASE_URL/update

Request Body: JSON object containing new user details.

Returns: Success or failure message for acknowledgment.

/image - GET Request
This endpoint retrieves the image of a user given the user_id as a query parameter.

Structure: BASE_URL/image/${user_id}

Returns: JSON object containing user image data.

/insert - POST Request
This endpoint inserts a new user into the database. Authentication is required.

Structure: BASE_URL/insert

Request Body: JSON object containing user details.

Returns: Success or failure message.

/delete - DELETE Request
This endpoint deletes a user from the database given the user_id.

Structure: BASE_URL/delete/${user_id}

Returns: Success or failure message.

Database Structure
The database used for this project includes the following table structure:

Users Table:
user_id: A randomly generated UUIDV4
user_name: The username of the user (may not be unique)
user_email: The user's email address (unique)
user_password: The user's password
user_image: The user's image
total_orders: Total orders placed by the user
created_at: Timestamp when the user was created
last_logged_in: Timestamp when the user last logged in
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/sooraja98/QuadBTech-nodejs-task.git
Install project dependencies:

bash
Copy code
npm install
Create a .env file in the project root directory and configure the following environment variables:

env
Copy code
QUADB=YourDatabaseName
USERNAME=YourDatabaseUsername
PASSWORD=YourDatabasePassword
HOST=YourDatabaseHost
PORT=YourDatabasePort
Initialize and seed the database by running the provided SQL file.

Start the server:

bash
Copy code
npm start
Authentication
Authentication is required for the /update and /insert endpoints. Use a proper authentication middleware to authenticate requests. You can configure authentication using your preferred library or method.

Usage
You can use this API to manage user information in your application. Use the provided endpoints to create, update, retrieve, and delete user data as needed.

Deployment
You may host your API along with the database on a free API hosting service such as Heroku. Configure the environment variables accordingly on your hosting platform.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow the standard Git workflow:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m "Add your feature description".
Push your branch to your fork: git push origin feature/your-feature-name.
Create a pull request on the original repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.