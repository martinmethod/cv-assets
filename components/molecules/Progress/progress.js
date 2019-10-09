// ===================================================|
// Molecules: PROGRESS

import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import ProgressBar from '@/node_modules/cv-assets/components/atoms/ProgressBar';

export default {
  components: {
    Heading,
    ProgressBar
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
