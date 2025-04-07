const express = require("express");
const path = require("path");
const app = express();

// Build the absolute path to the front-end folder
// Adjust the relative path as needed
const frontEndPath = path.join(__dirname, "../../front-end");

// Serve static files from the front-end folder (if you have CSS, JS, etc.)
app.use(express.static(frontEndPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontEndPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
