if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}


// module.exports = {
//   googleClientID: '698751116493-5dob5b1933oj30l0jpe8dl15ba83staq.apps.googleusercontent.com',
//   googleClientSecret: 'GYiTUOxdETKvih2m0fwbwruE',
//   mongoURI: 'mongodb://captainObvious:123hjkuy21@ds115854.mlab.com:15854/emaily-dev',
//   cookieKey: 'asdxzaeqwefsdasfaszxzxvad'
// }
