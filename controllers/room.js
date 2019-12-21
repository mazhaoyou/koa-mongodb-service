const room = require('../model/room')
module.exports = {
 
  async approve (id, state) {
    return photo.approve(id, state)
  },
  async updatePhoto (id, data) {
    return photo.update(id, data)
  },
  async delete (id) {
    return photo.delete(id)
  },
  async add (name, code,remark) {
    return room.add(name,code,remark)
  },
  async getRoomList () {
    let roomList = await room.getRoom();
    console.log(roomList);
    return roomList;
  }

}
