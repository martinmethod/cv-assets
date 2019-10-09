// ===================================================|
// Atoms: HEADING

export default {
  props: {
    size: {
      type: Number
    },
    type: {
      type: String,
      default: 'title'
    }
  },

  computed: {
    element() {
      return this.size ? `h${this.size}` : 'label';
    }
  }
};
