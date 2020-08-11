import express from 'express';
import cors from 'cors';
import path from 'path';

import health from './routes/health.js';
import fail from './routes/fail.js';
import errorHandler from './middleware/errorHandler.js';

const createApp = ({ corsConfig }) => {
  // Create Express application
  const app = express();

  // Health endpoint
  app.use(health);

  // Fail endpoints
  app.use('/fail', fail);

  // Apply CORS to the endpoints
  app.use(cors(corsConfig));

  // Add error handler
  app.use(errorHandler);

  return app;
};

export default createApp;