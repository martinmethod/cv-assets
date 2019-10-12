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
    }
  }
};
