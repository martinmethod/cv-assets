// ===================================================|
// Atoms: TAG

// Components
import ProgressBar from '@/node_modules/cv-assets/components/atoms/ProgressBar';

export default {
  components: {
    ProgressBar
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    wrapper() {
      return this.data.website ? 'a' : 'span';
    }
  }
};
