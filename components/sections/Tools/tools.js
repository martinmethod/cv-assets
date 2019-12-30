// ===================================================|
// Sections: TOOLS

// Components
import TagGroup from '@/node_modules/cv-assets/components/molecules/TagGroup';

// Mixins
import sectionMixin from '@/node_modules/cv-assets/components/sections/section-mixin';

export default {
  mixins: [sectionMixin],

  data() {
    return {
      component: TagGroup
    };
  },

  computed: {
    seeAllText() {
      return this.$t('seeAll');
    }
  },

  methods: {
    modifyItem({ fields, sys }) {
      const { title, items } = fields;

      return {
        title,
        items: items.map(({ fields }) => {
          const { experience } = fields;
          let label;

          switch (true) {
            case experience <= 50:
              label = this.$t('junior');
              break;
            case experience > 50 && experience <= 75:
              label = this.$t('midLevel');
              break;
            default:
              label = this.$t('senior');
          }

          return {
            fields: {
              label,
              ...fields
            },
            sys: { ...sys }
          };
        })
      };
    }
  }
};
