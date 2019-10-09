// ===================================================|
// Molecules: TEXT BLOCK

import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import Paragraph from '@/node_modules/cv-assets/components/atoms/Paragraph';

export default {
  components: {
    Heading,
    Paragraph
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
