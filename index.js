'use strict';

var download = require('download-github-repo');

module.exports = function create(sourceRepo, projectDir) {
  download(sourceRepo, projectDir, function() {});
}
