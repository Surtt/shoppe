/* eslint-env node */
const eslintCommand = 'npm run lint';

const formatCommand = 'prettier --write';
const stylelintCommand = 'stylelint --allow-empty-input "**/*.{css,scss}"';
module.exports = {
  '*.{js,jsx,ts,tsx}': [eslintCommand, formatCommand],
  '*.{css,scss}': [formatCommand, stylelintCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
};
