export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    },
    {
      code: 'bg',
      iso: 'bg-BG',
      file: 'bg-BG.js',
      name: 'български'
    }
  ],
  defaultLocale: 'en',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en'
  },
  lazy: true,
  langDir: 'node_modules/cv-assets/lang/'
};
