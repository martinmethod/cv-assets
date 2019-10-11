import { name } from '../../package.json';

const localPath = '~node_modules/cv-assets/assets/styles/resources';
const resourcesPath = 'node_modules/sass-resources';

export default {
  scss: [
    `${resourcesPath}/functions/**/*.scss`,
    `${resourcesPath}/mixins/**/*.scss`,
    `${localPath}/base.scss`,
    `${localPath}/functions/**/*.scss`,
    `${localPath}/data/swatches/primary/**/*.scss`,
    `${localPath}/data/swatches/secondary/**/*.scss`,
    `${localPath}/data/roles/**/*.scss`,
    `${localPath}/mixins/**/*.scss`,
    `${localPath}/placeholders/**/*.scss`
  ]
};
