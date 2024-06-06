const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname, '../.env')})
const chaveConexaoDB = process.env.URI_MONGODB
async function connect(){
  mongoose.connect(chaveConexaoDB)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
}

//connect()

module.exports = {connect}
