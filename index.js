var fs = require('graceful-fs')
var doc = 'spec.md'

fs.readFile(doc, { encoding: 'utf8' }, function(err, data) {
  console.log(data)
})
