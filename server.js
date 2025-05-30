const app = require('./app');
const config = require('./config/database');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});