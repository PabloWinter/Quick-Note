const mongoose = require('mongoose');

// Mongo database configuration
mongoose.connect('mongodb://localhost/simple-notes-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log("Connect to mongo database"))
  .catch(error => console.log("Error en la base de datos ", error))