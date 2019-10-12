// ===================================================|
// Atoms: COPYRIGHT

export default {
  props: {
    startingYear: {
      type: Number,
      required: true
    },
    domain: {
      type: String,
      required: true
    }
  },

  methods: {
    printPeriod() {
      const currentYear = (new Date).getFullYear();
      return this.startingYear === currentYear ? currentYear : `${this.startingYear}–${currentYear}`;
    }
  }
};
