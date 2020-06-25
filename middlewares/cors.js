const cors = require("cors");
const {env} = require('../config/globals')
let whitelist = []
if(env.NODE_ENV === 'development') {
    whitelist.push('http://localhost:3000')
}
const corsOptions = {
    origin: function (origin, callback) {
      console.log(whitelist, origin)
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
const middleware = cors(corsOptions)
module.exports = middleware
