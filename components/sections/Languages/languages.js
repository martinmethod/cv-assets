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
      return this.content.items.map(({ fields }) => {
        const { name, level, label } = fields;

        return {
          name,
          level,
          label
        };
      });
    }
  }
};
