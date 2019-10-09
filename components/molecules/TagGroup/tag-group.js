// ===================================================|
// Molecules: TAG GROUP

import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import Tag from '@/node_modules/cv-assets/components/atoms/Tag';

export default {
  components: {
    Heading,
    Tag
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
