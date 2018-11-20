const config = require('./config');
const Database = require('./Database');
const User = require('./User');

let db = new Database(config.DB_CONFIG_MYSQL);
db.connect();
let userRepo = new User(db);