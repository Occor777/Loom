const express = require('express');
const express_application = express();
const my_port = process.env.PORT || 3000;

// Home route
express_application.get('/', (req, res) => {
    res.send('Welcome to the TTRPG Character Sheet App!');
});

// Users route
express_application.get('/users', (req, res) => {
    // Placeholder response for now
    res.send('List of users will be here');
});

express_application.post('/users', (req, res) => {
    // Placeholder response for now
    res.send('User created');
});

express_application.listen(my_port, () => {
    console.log(`Server is running on http://localhost:${my_port}`);
});
