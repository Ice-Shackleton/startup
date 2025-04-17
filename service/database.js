const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Startup');
const userCollection = db.collection('user');


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connected to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  console.log("Attempting to get user.");
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  console.log("Attempting to get user by token.");
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  console.log("Attempting to add user.");
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  console.log("Attempting to update user.");
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser
};
