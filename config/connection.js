const mongoose = require('mongoose');

mongoose.connect( 'mongodb://127.0.0.1:27017/socialNetwork',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// use this to log mongo queries being exectuted!
mongoose.set('debug', true);

module.exports = mongoose.connection;