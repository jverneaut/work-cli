const data = require('./utils/data');
const input = require('./utils/input');

const args = process.argv.slice(process.execArgv.length + 2);
const option = args[1];

(async () => { switch (option) {
  case 's': // Navigate Sites
    let sitesPath = data.get(data.types.SITES_PATH);
    if (sitesPath) {
      console.log(sitesPath);
    } else {
      data.set(data.types.SITES_PATH, await input.text(data.types.SITES_PATH, 'Quel est le chemin vers votre dossier'));
      sitesPath = data.get(data.types.SITES_PATH);
    }
    break;
  case 'p': // Navigate Projects
    break;
  case 'n': // New site/project
    break;
  default: // Choose option
    break;
}
})();
