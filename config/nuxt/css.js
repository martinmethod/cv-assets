import { name } from '../../package.json';

const resourcesPath = 'node_modules/cv-assets/assets/styles/general';
const localPath = `@${resourcesPath}`;

export default [
  `normalize.css/normalize.css`,
  `${localPath}/font-faces.scss`,
  `${localPath}/scaffolding.scss`,
  `${localPath}/app.scss`,
  `${localPath}/print.scss`
];
