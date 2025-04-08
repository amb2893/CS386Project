const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt"); // importing bcrypt package
const users = []
app.use(express.urlencoded({extended: false}));
app.post("/register", async (req, res) => {
    try {
        // Check if a user with this email already exists
        const existingUser = users.find(u => u.email === req.body.email);
        if (existingUser) {
            console.log("User already exists. Redirecting to login.");
            return res.redirect("/login?message=exists");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        console.log(users); // display registered users
        res.redirect("/login");
    } catch (e) {
        console.log(e);
        res.redirect("/register");
    }
});
app.post("/login", async (req, res) => {
    try {
        const user = users.find(u => u.email === req.body.email);

        if (!user) {
            console.log("Email not found.");
            return res.redirect("/login?message=user-not-found");
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordValid) {
            console.log("Wrong password.");
            return res.redirect("/login?message=invalid-credentials");
        }

        console.log(`Login successful for: ${user.email}`);
        res.redirect("/index.html");
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }
});



// Build the absolute path to the front-end folder
// Adjust the relative path as needed
const frontEndPath = path.join(__dirname, "../front-end");

// Serve static files from the front-end folder (if you have CSS, JS, etc.)
app.use(express.static(frontEndPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontEndPath, "index.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(frontEndPath, "login.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(frontEndPath, "register.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
