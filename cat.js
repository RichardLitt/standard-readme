#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(process.cwd(), './spec.md'), {encoding: 'utf8'}, (err, file) => {
  if (err) {
    console.log('Unable to find file')
  }

  console.log(file)
})
