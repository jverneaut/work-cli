const shell = require('shelljs');

const getFolderNames = path =>
  shell
    .exec('ls -tp ' + path + ' | grep /', { silent: true })
    .stdout.split('\n')
    .map(folderName => folderName.slice(0, -1))
    .slice(0, -1);

module.exports = {
  getFolderNames,
};
