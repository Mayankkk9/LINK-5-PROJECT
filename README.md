# LINK-5-PROJECT
DESCRIPTION - Your task is to develop a system that allows users to log in using Google OAuth, view the details of due
invoices in a SaaS platform, and automate the process of sending past-due invoice reminders and
follow-up sequences. The system should integrate with Zapier to trigger automation actions. This
assignment assesses your ability to integrate third-party services, implement OAuth authentication, and
design a microservices architecture.

To set up and run your application, follow these steps:

Backend Setup (Express server): Navigate to the backend directory in your terminal:

 Copy code cd backend Install the required Node.js packages:

 Copy code npm install Configure Google OAuth:

 Copy code npm start Frontend Setup (React app): Navigate to the frontend directory in a new terminal window:

 Copy code cd frontend Install the required Node.js packages:

 Copy code npm install Start the React development server:

 copy code 'npm i' in backend as well as in frontend

TO RUN APPLICATION -

Open your browser and go to http://localhost:3000 (or the port specified by the React development server). Click the "Login with Google" button. You will be redirected to Google for authentication. Log in with your Google credentials and grant the required permissions. View Due Invoices:

After successful Google OAuth login, you will be redirected back to the React app. Explore the app and navigate to the "Invoices" section. Trigger Automation Actions through Zapier:

In the "Invoices" section, there should be a button to "Trigger Automation" or a similar action. Click the button to simulate triggering automation actions. Check the backend console for logs related to the Zapier integration (ZapierIntegrationController.js). Notes: Ensure that your Google OAuth credentials are correctly set up in the backend. If running into CORS issues during development, consider using the cors middleware in your Express backend. Make sure your backend server is running on http://localhost:3001 (or the specified port). Verify that the backend routes (/auth/google, /invoices, /zapier/webhook) are accessible and functioning as expected.
