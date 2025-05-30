const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const ratelimit = require('express-rate-limit');
const { errorHandler } = require('./utils/errorHandler');

// Import routes
const authRoutes = require('./routes/auth');
const credentialRoutes = require('./routes/credentials');
const verificationRoutes = require('./routes/verification');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

// Rate limiting
const limiter = ratelimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Request logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/credentials', credentialRoutes);
app.use('/api/verify', verificationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Error handling
app.use(errorHandler);

module.exports = app;