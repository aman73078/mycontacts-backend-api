// Core Modules

// External Modules
const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const dotenv = require('dotenv').config();
const app = express();

// Local Modules
const contactRoutes = require('./routes/contactRoute');

// Body Parser
app.use(express.json());
app.use("/api/contact",contactRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});