const mongoose = require('mongoose');

function connect(){mongoose.connect('mongodb+srv://danrod278:qsc278279wdv@crud-application-cluste.3zbzuhw.mongodb.net/?retryWrites=true&w=majority&appName=crud-application-cluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
}

module.exports = {connect}