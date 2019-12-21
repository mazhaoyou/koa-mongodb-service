const {
    Room
  } = require('./model')
  
  module.exports = {

    async add (name, code,remark) {
        let data = await Room.create({
            name,
            code,
            remark
        })
        return data
      },
    async getRoom () {
        let data = await Room.find() 
        return data;
        // if (data) {
        //   return data
        // } else {
        //   return null
        // }
  }
}