const prompts = require('prompts');

const select = async (name, message, choices) => {
  return await prompts({
    type: 'select',
    name,
    choices,
    message
  }).then(res => choices[res[name]]);
}

const text = async (name, message) => {
  return await prompts({
    type: 'text',
    name,
    message
  }).then(res => res[name]);
}

module.exports = {
  select,
  text
}
