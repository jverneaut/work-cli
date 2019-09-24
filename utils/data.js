const fs = require('fs');
const args = process.argv.splice(process.execArgv.length + 2);
const basePath = args[0];

const get = (key) => {
  // fs.readFile(basePath + '/tmp/site.txt', 'utf8', (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  // });
}
const set = (key, value) => {}
