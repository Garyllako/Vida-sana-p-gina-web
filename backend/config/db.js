const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
    console.log('\x1b[1m\x1b[42mBase de datos conectada exitosamente\x1b[0m');
  } catch (error) {
    console.log('\x1b[1m\x1b[41mError al conectar a la base de datos\x1b[0m', error.message);
  }
}

module.exports = conectarDB