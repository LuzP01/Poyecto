const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app-db',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('db conectada'))
.catch(err => console.error(err));   