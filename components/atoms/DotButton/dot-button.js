// ===================================================|
// Atoms: DOT BUTTON

export default {
  props: {
    link: String,
    tooltip: String,
    display: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String,

      default: 'blue',
      validator(value) {
        return ['blue', 'red'].includes(value);
      }
    }
  }
};
