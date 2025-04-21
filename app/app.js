const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Root endpoint with container info
app.get('/', (req, res) => {
  const containerInfo = {
    hostname: require('os').hostname(),
    platform: process.platform,
    nodeVersion: process.version,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  };
  
  res.json({
    message: 'Welcome to the AWS ECS Fargate Demo Application!',
    container: containerInfo
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
