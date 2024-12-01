const express = require("express");
const multer = require("multer");
const sdk = require("node-appwrite");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 9000;

// CORS configuration
const corsOptions = {
   origin: ["http://localhost:3000", "http://localhost:9000"],
   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
   allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true,
   optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Initialize Appwrite SDK
const client = new sdk.Client();
const storage = new sdk.Storage(client);

// Appwrite configuration using environment variables
client
   .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your Appwrite server URL
   .setProject(process.env.APPWRITE_PROJECT_ID) // Your Appwrite Project ID
   .setKey(process.env.APPWRITE_API_KEY); // Your Appwrite API Key

// Set up multer for file handling
const upload = multer({ dest: "uploads/" });

/**
 * Upload image to Appwrite storage
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 * @returns {Promise<void>}
 */
app.post("/upload", upload.single("file"), async (req, res) => {
   console.log(req.file);
   const file = req.file;
   if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
   }

   try {
      // Upload file to Appwrite storage
      const uploadedFile = await storage.createFile(
         process.env.APPWRITE_BUCKET_ID, // Your Appwrite bucket ID
         sdk.ID.unique(), // Generate unique ID
         sdk.InputFile.fromPath(file.path, file.originalname),
      );

      // Construct the file URL manually
      const fileUrl = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${uploadedFile.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}&mode=admin`;

      return res.json({ success: true, fileUrl });
   } catch (error) {
      console.error("Error uploading file:", error);
      return res.status(500).json({ error: "Error uploading file", details: error.message });
   }
});

// Start the server
app.listen(port, () => {
   console.log(`Server running on http://localhost:${port}`);
});
