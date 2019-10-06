import moment from 'moment';

// -------------------------| Format date
export const formatDate = (date, format = 'MMM YYYY') =>
  moment(date).format(format);

// -------------------------| Format duration
export const formatDuration = (startDate, finalDate) => {
  const days = moment(finalDate).diff(moment(startDate), 'days');

  const unit =
    days >= 30 ? 'months' : days >= 14 ? 'weeks' : days >= 2 ? 'days' : null;

  if (!unit) {
    return null;
  }

  const diff = moment(finalDate).diff(moment(startDate), unit);

  return moment.duration(diff, unit).humanize();
};
