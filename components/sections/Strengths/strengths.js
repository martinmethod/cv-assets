// ===================================================|
// Sections: STRENGTHS

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
    items() {
      return [
        {
          items: this.content.items
        }
      ];
    }
  }
};
