const env = process.env
const appKey = env.APP_KET || 'default key'
const appSecret = env.APP_SECRET || 'default secret'
const nodeEnv = env.NODE_ENV
let db = {
  name: 'mongodb://188.131.174.180:27017/wechat',
  user: 'mzy',
  password: 'mzy@424'
}
if (nodeEnv === 'production') {
  db = {
    name: 'mongodb://188.131.174.180:27017/wechat',
    user: 'mzy',
    password: 'mzy@424'
  }
}
let port = 3000;
module.exports = {
  appKey,
  appSecret,
  db,
  port
}
