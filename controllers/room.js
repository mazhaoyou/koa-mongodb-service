const room = require('../db/room')

 
  async function  approve (ctx) {
    const {
      id,
      state
    } = ctx.query;
    return photo.approve(id, state)
  }
  async  function updatePhoto (ctx) {
    const {
      id,
      data
    } = ctx.query;
    return photo.update(id, data)
  }

  // async function delete (id) {
  //   return photo.delete(id)
  // }
  async function add (ctx) {
    const {
      name,
      code,
      remark
    } = ctx.request.body;

    let result =  await room.add(name,code,remark)
    ctx.body = result
    
  }
  // 获得列表
  async function getRoomList (ctx) {
    let roomList = await room.getRoom();
    ctx.body = {
      roomList:roomList
    }
  }
  module.exports = {
    approve,
    updatePhoto,
    add,
    getRoomList
}
