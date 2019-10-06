import apiClient from '~/node_modules/cv-assets/configs/api/contentful';

// -------------------------| Get content
export const getContent = (params) =>
  apiClient.getEntries({
    ...params
  });

// -------------------------| Get locales
export const getLocales = () => apiClient.getLocales();
