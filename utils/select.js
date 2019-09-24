const prompts = require('prompts');

export const select = (name, choices, message) => {
  return await prompts({
    type: 'select',
    name,
    choices,
    message
  });
}
