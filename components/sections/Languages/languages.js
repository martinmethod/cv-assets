// ===================================================|
// Sections: LANGUAGES

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
    items() {
      const active_native_locale = this.content.items.find(({ fields }) => !!fields.native).fields.locale === this.$i18n.locale;

      return this.content.items.map((item) =>
          this.modifyItem(item)
      ).filter(({ locale }) => active_native_locale ? locale !== this.$i18n.locale : true);
    }
  },

  methods: {
    modifyItem({ fields }) {
      return fields;
    }
  }
};
