var mdast = require('remark')
var lint = require('remark-lint')
var fs = require('graceful-fs')
var remarkTitle = require('remark-title')
var doc = './README.md'
// TODO Replace README with readme option
// TODO Log that the title has been replaced

// fs.writeFileSync(doc, mdast().use(remarkTitle, {}, lint).process(
//   fs.readFileSync(doc, 'utf8'), function (err, file, res) {
//     if (err) {
//       console.log(err)
//       return
//     }

//     if (file.messages[0] != null) {
//       console.log(file.messages)
//     } else {
//       console.log('No errors found!')
//     }
//   })
// )
