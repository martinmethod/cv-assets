import { createClient } from 'contentful';

export default createClient({
  environment: process.env.NODE_ENV === 'development' ? 'master' : 'production',
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  resolveLinks: true
});
