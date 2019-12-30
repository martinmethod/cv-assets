// ===================================================|
// Sections: COURSES

// Mixins
import sectionMixin from '@/node_modules/cv-assets/components/sections/section-mixin';
import itemMixin from '@/node_modules/cv-assets/components/sections/item-mixin';

export default {
  mixins: [sectionMixin, itemMixin],

  computed: {
    printMeta() {
      return `+${this.items.regular.length} ${this.$t(
        'takenCourses'
      )}`;
    }
  },
};
