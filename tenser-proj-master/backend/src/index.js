// index.js
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoute = require('./auth')
const GoogleOAuthMiddleware = require('./GoogleOAuthMiddleware');
const ZapierIntegrationController = require('./ZapierIntegrationController');
const cors = require('cors');
const passportStrategy = require("./passport");
const session = require('express-session');
const cookieSession = require("cookie-session");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

// Google OAuth Routes
// app.get('/auth/google', GoogleOAuthMiddleware);

// Zapier Integration Routes
app.use('/zapier', ZapierIntegrationController);

// Protected route
app.get('/invoices', (req, res) => {
  // Fetch and return due invoices for the authenticated user
  // This route should be protected to ensure only authenticated users can access it
  res.json({ invoices: [] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
