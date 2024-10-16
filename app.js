const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Welcome to the Express Sequelize MySQL app!');
});

// Sincronizar modelos y base de datos
sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.log('Error synchronizing database', err));

// Puerto y escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
