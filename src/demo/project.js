const { project } = require('@lerna/project');

module.exports = project;

export const bip353 = () => {
  console.log('bip-3532');
  return 'bip-3532';
}

export const offer = () => {
  console.log('offer');
  return 'offer';
}