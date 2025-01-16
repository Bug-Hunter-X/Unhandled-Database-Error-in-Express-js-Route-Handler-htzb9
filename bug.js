const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operations to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

// The problem is that if the database operation fails, the code doesn't handle the error properly. It might lead to unexpected behavior or crashes, and no error message is sent to the client.