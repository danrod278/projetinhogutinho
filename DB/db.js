const mongoose = require('mongoose');

async function connect(){
  mongoose.connect('mongodb+srv://danrod278:qsc278279wdv@crud-application-cluste.3zbzuhw.mongodb.net/?retryWrites=true&w=majority&appName=crud-application-cluster')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
}

//connect()

module.exports = {connect}