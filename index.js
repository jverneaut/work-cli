const data = require('./utils/data');
const input = require('./utils/input');

const shell = require('./utils/shell');

const args = process.argv.slice(process.execArgv.length + 2);
const option = args[1];

(async () => {
  switch (option) {
    case 's': // Navigate Sites
      let sitesPath = data.get(data.types.SITES_PATH);
      if (sitesPath) {
        const site = await input.select(
          'path',
          'Sur quel site souhaitez-vous travailler ?',
          shell.getFolderNames(sitesPath)
        );

        data.set(data.types.SELECTED_SITE, site);
      } else {
        data.set(
          data.types.SITES_PATH,
          await input.text(
            data.types.SITES_PATH,
            'Quel est le chemin vers votre dossier Sites ?'
          )
        );
        sitesPath = data.get(data.types.SITES_PATH);
        const site = await input.select(
          'path',
          'Sur quel site souhaitez-vous travailler ?',
          shell.getFolderNames(sitesPath)
        );

        data.set(data.types.SELECTED_SITE, site);
      }
      break;
    case 'p': // Navigate Projects
      let projectsPath = data.get(data.types.PROJECTS_PATH);
      if (projectsPath) {
        const project = await input.select(
          'path',
          'Sur quel projet souhaitez-vous travailler ?',
          shell.getFolderNames(projectsPath)
        );

        data.set(data.types.SELECTED_PROJECT, project);
      } else {
        data.set(
          data.types.PROJECTS_PATH,
          await input.text(
            data.types.PROJECTS_PATH,
            'Quel est le chemin vers votre dossier Projects ?'
          )
        );
        projectsPath = data.get(data.types.PROJECTS_PATH);

        const project = await input.select(
          'path',
          'Sur quel projet souhaitez-vous travailler ?',
          shell.getFolderNames(projectsPath)
        );

        data.set(data.types.SELECTED_PROJECT, project);
      }
      break;
    case 'n': // New site/project
      break;
    default:
      // Choose option
      break;
  }
})();
