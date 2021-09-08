const express = require('express')
const helmet = require('helmet');
const server = express()

// setting
server.set('port', process.env.PORT || 3001)


//Security

server.use(helmet()); 


// routes

server.use(express.json()); 
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next()
})


server.use(require('./api/routers/auth/index'))
server.use(require('./api/routers/posts/index'))
server.use(require('./api/routers/webhooks/index'))


server.get('*', function(req, res) {
  res.status(400).json({error: "Page Not Found"})
});

// starting server
server.listen(server.get('port'), () => {
  console.log(`Server on port ${server.get('port')}`)
})

module.exports = server