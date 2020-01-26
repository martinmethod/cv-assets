import { mapActions } from 'vuex';

export default {
  data: () => ({
    loading: false
  }),

  methods: {
    ...mapActions('core', [
      'toggleLoadingFlag'
    ]),
    start() {
      this.toggleLoadingFlag();
      this.loading = true;
    },

    finish() {
      setTimeout(() => {
        this.toggleLoadingFlag();
        this.loading = false;
      }, 500);
    }
  }
};
