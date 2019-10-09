// ===================================================|
// Organisms: SECTION

// Components
import Heading from '@/node_modules/cv-assets/components/atoms/Heading';

export default {
  components: {
    Heading
  },

  props: {
    heading: {
      type: String,
      required: true
    },
    tooltip: {
      type: String
    }
  }
};
