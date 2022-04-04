const mongoose = require("mongoose"), 
      MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dogs";

// Database Error/Disconnection
const db = mongoose.connection;
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Database Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
})
.then((instance) => console.log(`Connected to db: ${instance.connections[0].name}`))
.catch((error) => console.log("Connection failed!", error));

db.once('open', () => {
    console.log('connected to mongoose...');
});