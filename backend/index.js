const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());


app.post('/register', (req, res) => {
  const user = req.body;

  if (!user.name || !user.email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  console.log('User Registered:', user);

  res.status(201).json({ message: 'User registered successfully', user });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});