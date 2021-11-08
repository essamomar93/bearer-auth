const { start } = require('./src/server');
const { db } = require('./src/auth/models/index');

// we first connect to the DB, then we run our server
db.sync().then(() => {
  start();
}).catch(console.error);