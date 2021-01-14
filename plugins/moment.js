import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export default ({ app }) => {
  moment.updateLocale('bg', {
    durationLabelsStandard: {
      S: "милисекунда",
      SS: "милисекунди",
      s: "секунда",
      ss: "секунди",
      m: "минута",
      mm: "минути",
      h: "час",
      hh: "часа",
      d: "ден",
      dd: "дни",
      w: "седмица",
      ww: "седмици",
      M: "месец",
      MM: "месеца",
      y: "година",
      yy: "години"
    }
  });

  moment.locale(app.i18n.locale);
};
