import moment from 'moment';

const ceil_units = {
  'months': {
    top: 12,
    rest: 8,
    least: 10
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
export const formatDate = (date, format = 'MMMM YYYY') =>
  moment(date).format(format);

// -------------------------| Format duration
export const formatDuration = (startDate, finalDate) => {
  const days = moment(finalDate).diff(moment(startDate), 'days');
  const unit = days >= 30 ? 'months' : days >= 14 ? 'weeks' : days >= 1 ? 'days' : null;

  if (!unit) { return; }

  const format = days >= 30 ? 'M' : days >= 14 ? 'W' : days >= 1 ? 'D' : null;
  const dateStart = moment(startDate);
  const dateEnd = moment(finalDate);
  const timeValues = [];
  while (dateEnd > dateStart || dateStart.format(format) === dateEnd.format(format)) {
    timeValues.push(dateStart.format('YYYY-MM'));
    dateStart.add(1, unit);
  }
  let period = timeValues.length;

  // let period = Math.ceil(moment(finalDate).diff(moment(startDate), unit, true));
  period = period >= ceil_units[unit].least && period < ceil_units[unit].top ? ceil_units[unit].top : period;

  return period % ceil_units[unit].top >= ceil_units[unit].rest || period % ceil_units[unit].top === 0 ? moment.duration(period, unit).humanize() : moment.duration(period, unit).format();
};
