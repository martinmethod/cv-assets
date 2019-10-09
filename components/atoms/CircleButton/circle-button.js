// ===================================================|
// Atoms: CIRCLE BUTTON

export default {
  props: {
    link: String,
    tooltip: String,
    color: {
      type: String,

      default: 'blue',
      validator(value) {
        return ['blue', 'red'].includes(value);
      }
    }
  }
};
