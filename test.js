
var high = require('./index.js')

high('http://www.bbc.com/news/health-43502144', function(err, page) {
  console.log(page)
})
