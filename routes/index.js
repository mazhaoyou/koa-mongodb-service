const Router = require('koa-router')
const router = new Router()
const controllers = require('../controllers')
const uuid = require('uuid')
const multer = require('koa-multer')
const path = require('path')

function getPageParams (context) {
  return {
    pageIndex: parseInt(context.query.pageIndex) || 1,
    pageSize: parseInt(context.query.pageSize) || 10
  }
}

async function responseOK (ctx, next) {
  ctx.body = {
    status: 0
  }
  await next()
}


router.post('/room/add',async (context, next) => {
  const {
    name,code,remark  
  } = context.request.body
  await controllers.room.add(name,code,remark)
  await next()
  context.body = {
    code:1000
  }
})

router.get('/room/getRoomList', async (context, next) => {
  let roomList = await controllers.room.getRoomList();
  console.log(roomList);
  context.body = {
     roomList
     }
})

module.exports = router
