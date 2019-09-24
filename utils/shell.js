const shell = require('shelljs');

export const getFileNames = path =>
  shell
    .exec('ls -t ' + path, { silent: true })
    .stdout.split('\n')
    .slice(0, -1);
