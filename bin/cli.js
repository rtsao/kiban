#!/usr/bin/env node

var create = require('../');

var argv = process.argv.slice(2);

create(argv[0], argv[1]);
