// ===================================================|
// Atoms: PROGRESS BAR

export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    label: {
      type: [String, null],
      default: null
    },
    hyperlink: {
      type: String,
      default: ''
    }
  },

  computed: {
    barComponent() {
      return this.hyperlink ? {
        element: 'a',
        attrs: {
          ['data-btn']: true,
          href: this.hyperlink,
          target: '_blank'
        }
      } : {
        element: 'div',
        attrs: {}
      }
    }
  }
};
