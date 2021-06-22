// ===================================================|
// Pages: INDEX

import moment from 'moment';
import { mapState } from 'vuex';
import { isMobile } from 'mobile-device-detect';

// Components
import sections from '@/node_modules/cv-assets/components/sections';

export default {
  head({ $i18n, $store }) {
    return {
      htmlAttrs: {
        lang: $i18n.locale
      },
      title: this.title,
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: $store.state.contentful.data.identity.fields.avatar
        }
      ]
    };
  },

  async fetch({ app, store }) {
    await store.dispatch('contentful/fetchContent', {
      locale: app.i18n.locale
    });
    store.dispatch('core/setFlagForActiveNativeLocale');
  },

  computed: mapState({
    title: ({ contentful }) => contentful.data.title,
    sections: ({ contentful }) => contentful.data.sections
  }),

  methods: {
    sectionComponent(id) {
      return sections[id];
    }
  },

  created() {
    moment.locale(this.$i18n.locale);

    if (process.client) {
      const device = isMobile ? 'mobile' : 'desktop';
      document.body.classList.add(device);
    }
  }
};
