# Image Upload API with Appwrite using Node.js and Express

This project is a RESTful API built with Node.js and Express that allows you to upload images to an Appwrite storage bucket. Once uploaded, the API returns a URL that you can use to access the image. It is designed to be a simple and scalable way to handle file uploads in web applications.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
  - [Clone the Repository](#1-clone-the-repository)
  - [Install Dependencies](#2-install-dependencies)
  - [Configure Environment Variables](#3-configure-environment-variables)
  - [Start the Server](#4-start-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Security Considerations](#security-considerations)
- [Next Steps](#next-steps)

## Features
- Image Upload: Handles image uploads through an HTTP POST request
- Appwrite Integration: Uses Appwrite's Storage API to manage file storage
- Environment Configuration: Environment variables are used for storing sensitive data
- CORS Support: Configured to handle cross-origin requests

## Prerequisites
To run this project, you'll need:

- Node.js (v14 or higher)
- An Appwrite instance or access to an existing Appwrite server
- An Appwrite Project with a configured Bucket for storing files

## Project Setup

### 1. Clone the Repository
First, clone the project repository and navigate into the project directory:
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
Install the necessary dependencies using npm or yarn:

```bash

npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a .env file in the root directory of your project based on the provided .env.example file:

```bash
# .env
PORT=9000
APPWRITE_ENDPOINT=https://your-appwrite-server.com/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_appwrite_api_key
APPWRITE_BUCKET_ID=your_appwrite_bucket_id
Fill in the values:

APPWRITE_ENDPOINT: URL of your Appwrite server
APPWRITE_PROJECT_ID: ID of your Appwrite project
APPWRITE_API_KEY: API key for accessing your Appwrite instance
APPWRITE_BUCKET_ID: ID of the bucket where images will be stored
```

### 4. Start the Server
To start the server, use the following command:

```bash

Copy
npm start
# or
yarn start
```

The server will be available at http://localhost:9000 by default.

### API Endpoints
POST /upload
Uploads an image file to the Appwrite bucket and returns the URL of the uploaded image.

URL: /upload
Method: POST
Content-Type: multipart/form-data
Body Parameters:
image (required): The image file to be uploaded
Response:
200 OK: JSON object with the image URL if the upload is successful
400 Bad Request: If no file is uploaded
500 Internal Server Error: If there's an error during the upload
Example Usage
Upload an image using curl:

```bash

curl -X POST http://localhost:9000/upload \
  -F "image=@/path/to/your/image.jpg"
```

Example Response
```bash

{
  "success": true,
  "imageUrl": "https://your-appwrite-server.com/v1/storage/buckets/your_bucket_id/files/unique_file_id/view?project=your_project_id"
}
```
```
### Project Structure
.
├── .env              # Environment variables
├── .env.example      # Example environment file
├── .gitignore        # Git ignore file
├── README.md         # Project documentation
├── package.json      # Project dependencies and scripts
├── server.js         # Main server file
└── uploads/          # Temporary folder for uploaded files

### Dependencies
The project uses the following Node.js packages:

Express: A fast, unopinionated web framework for Node.js
Multer: Middleware for handling multipart/form-data, used for file uploads
node-appwrite: Appwrite's official Node.js SDK for interacting with the Appwrite API
dotenv: Loads environment variables from a .env file
cors: Middleware for enabling Cross-Origin Resource Sharing
To install all dependencies, run:

```bash

Copy
npm install express multer node-appwrite dotenv cors
# or
yarn add express multer node-appwrite dotenv cors
```
### Security Considerations
Store sensitive data like API keys and project IDs in the .env file
Do not commit the .env file to version control by ensuring it's listed in .gitignore
Implement additional security measures such as authentication to restrict access to the API if needed
Next Steps
Possible enhancements:

Multi-file Uploads: Modify the API to support uploading multiple files simultaneously
File Deletion: Add endpoints to handle file deletion from the Appwrite bucket
User Authentication: Secure the API with authentication and authorization mechanisms
Error Handling: Improve error handling for better debugging and client communication
Feel free to contribute or modify the project for your specific use cases!


Contact
For questions or suggestions, please contact [johnossai20@gmail.com].


### 🏗️ Built With
Node.js & Express - For the API server
Appwrite - For image storage and management
Multer - Handling file uploads like a boss
CORS - Because we play nice with other domains

### 📝 Notes
Currently supports single image uploads
Maximum file size is 5MB (configurable in code)

Accepts common image formats (jpg, png, gif)
### 🚧 Roadmap
 Add support for multiple file uploads
 Implement file type validation
 Add image compression options
 Create delete endpoint
 Add user authentication

### 🤝 Contributing
Found a bug? Have a cool feature in mind? Pull requests are welcome! Feel free to check the issues page if you want to contribute.


🤔 Questions?
Feel free to reach out if you have questions:


Email: johnossai20@gmail.com

Made with ☕ and 💻 by John