import moment from 'moment';

const ceil_units = {
  'months': {
    top: 12,
    rest: 7,
    least: 9
  },
  'weeks': {
    top: 4,
    rest: 0.75,
    least: 28
  },
  'days': {
    top: 7,
    rest: 5,
    least: 6
  }
};

// -------------------------| Format date
export const formatDate = (date, format = 'MMM YYYY') =>
  moment(date).format(format);

// -------------------------| Format duration
export const formatDuration = (startDate, finalDate) => {
  const days = moment(finalDate).diff(moment(startDate), 'days');
  const unit = days >= 30 ? 'months' : days >= 14 ? 'weeks' : days >= 1 ? 'days' : null;

  if (!unit) { return; }

  let period = Math.ceil(moment(finalDate).diff(moment(startDate), unit, true));
  period = period >= ceil_units[unit].least && period < ceil_units[unit].top ? ceil_units[unit].top : period;

  return period % ceil_units[unit].top >= ceil_units[unit].rest || period % ceil_units[unit].top === 0 ? moment.duration(period, unit).humanize() : moment.duration(period, unit).format();
};
