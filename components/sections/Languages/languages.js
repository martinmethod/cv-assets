// ===================================================|
// Sections: LANGUAGES

import { mapState } from 'vuex';

// Components
import Progress from '@/node_modules/cv-assets/components/molecules/Progress';

// Mixins
import sectionMixin from '@/node_modules/cv-assets/components/sections/section-mixin';

export default {
  mixins: [sectionMixin],

  data() {
    return {
      component: Progress
    };
  },

  computed: {
    ...mapState({
      native_locale: ({ core }) => core.native_locale
    }),

    items() {
      return this.content.items.map((item) =>
          this.modifyItem(item)
      ).filter(({ locale }) => this.native_locale ? locale !== this.$i18n.locale : true);
    }
  },

  methods: {
    modifyItem({ fields }) {
      return fields;
    }
  }
};
