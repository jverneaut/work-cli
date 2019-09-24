const fs = require('fs');
const args = process.argv.slice(2);
const basePath = args[0];

const types = {
  SITES_PATH: 'sites_path',
  PROJECTS_PATH: 'projects_path',
  SELECTED_SITE: 'selected_site',
  SELECTED_PROJECT: 'selected_project',
};

const getDataObject = () =>
  Object.assign(
    {},
    ...fs
      .readFileSync(basePath + '/tmp/data.txt', 'utf8')
      .split('\n')
      .filter(line => line !== '')
      .map(line => {
        const parts = line.split(':');
        return {
          [parts[0]]: parts[1],
        };
      })
  );

const saveDataObject = dataObject => {
  fs.writeFileSync(
    basePath + '/tmp/data.txt',
    Object.keys(dataObject)
      .map(key => key + ':' + dataObject[key] + '\n')
      .join('')
  );
};

const get = key => {
  const dataObject = getDataObject();
  return dataObject[key];
};

const set = (key, value) => {
  const dataObject = getDataObject();
  dataObject[key] = value;
  saveDataObject(dataObject);
};
module.exports = {
  types,
  get,
  set,
};
