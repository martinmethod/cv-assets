import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export default ({ app }) => {
  moment.locale(app.i18n.locale);
};
