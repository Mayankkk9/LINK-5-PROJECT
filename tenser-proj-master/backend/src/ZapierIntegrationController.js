// ZapierIntegrationController.js
const express = require('express');
const router = express.Router();

// Endpoint to trigger automation actions
router.post('/webhook', async(req, res) => {
  // Handle Zapier integration logic here
  console.log(req.body);
  await fetch('https://hooks.zapier.com/hooks/catch/17081578/3kb18nk/')
  await fetch('https://hooks.zapier.com/hooks/catch/17081578/3kb18nk/')
  await fetch('https://hooks.zapier.com/hooks/catch/17081578/3kb18nk/')

  // Trigger your automation actions based on past-due invoice data
  // Example: send email reminders, follow-up notifications, etc.
  res.sendStatus(200);
});

module.exports = router;
