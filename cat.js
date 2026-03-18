#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(fs.readFileSync(path.join(__dirname, 'spec.md'), 'utf8'));
