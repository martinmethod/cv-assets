import moment from 'moment';

// -------------------------| Check period
export const checkPeriod = (startDate, endDate) => {
  const startDiff = moment().diff(startDate, 'days');
  const endDiff = moment().diff(endDate);
  const isUpcoming = startDiff < 0;
  const isAboutToEnd = endDiff <= 0;

  if (isUpcoming) {
    return 'starting';
  }

  if (!endDate || isAboutToEnd) {
    return 'ongoing';
  }

  return 'finished';
};

// -------------------------| Get period
export const getPeriod = (items) => {
  const lastDate = items[0].fields.endDate
    ? moment(items[0].fields.endDate)
    : moment();
  const firstDate = moment(items[items.length - 1].fields.startDate);

  return `${firstDate.format('YYYY')} — ${lastDate.format('YYYY')}`;
};
