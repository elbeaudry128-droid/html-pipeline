import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Service is running' });
});

// Pipeline route
app.get('/pipeline', (req, res) => {
    res.status(200).json({ message: 'Pipeline route' });
});

// Export the app
export default app;
