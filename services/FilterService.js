import moment from 'moment';

// -------------------------| Filter locales
export const filterLocales = (locales, currentLocale) =>
  locales.filter((locale) => locale.code !== currentLocale);

// -------------------------| Filter items till now
export const filterItemsTillNow = (items) =>
  items.filter((item) => moment().diff(item.fields.startDate) >= 0);
