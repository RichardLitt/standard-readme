var mdast = require('mdast')
var lint = require('mdast-lint')
var fs = require('graceful-fs')
var remarkTitle = require('remark-title')
var doc = './README.md'
// TODO Replace README with readme option

fs.writeFileSync(doc, mdast().use(remarkTitle, {
  title: 'IPFS Readme Standard'
}, lint).process(
  fs.readFileSync(doc, 'utf8'), function (err, file, res) {
    if (err) {
      console.log(err)
      return
    }

    if (file.messages[0] != null) {
      console.log(file.messages)
    } else {
      console.log('No errors found!')
    }
  })
)
