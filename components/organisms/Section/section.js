// ===================================================|
// Organisms: SECTION

// Components
import CustomScrollbar from '@/node_modules/cv-assets/components/wrappers/CustomScrollbar';
import Heading from '@/node_modules/cv-assets/components/atoms/Heading';

export default {
  components: {
    CustomScrollbar,
    Heading
  },

  props: {
    heading: {
      type: String,
      required: true
    },
    tooltip: {
      type: String
    },
    modal: Boolean
  }
};
