const mongoose = require('mongoose')
const {name, user, password} = require('../config').db
module.exports = {
  open () {
    return mongoose.connect(name, {
      user: user,
      pass: password,
      poolSize: 10,
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex:true
    })
  },
  close () {
    return mongoose.connection.close()
  }
}
