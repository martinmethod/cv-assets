// ===================================================|
// Atoms: SPINNER

import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  components: {
    BounceLoader
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
