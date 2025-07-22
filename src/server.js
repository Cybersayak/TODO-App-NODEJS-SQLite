import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Get the file path from the url of the current module 
const __filename = fileURLToPath(import.meta.url);
//  Get the directory name from the file path
const __dirname = dirname(__filename);

// Serves the HTML file from the public directory
// Tells express to serve static files from the public directory 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 


